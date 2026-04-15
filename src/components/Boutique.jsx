import React, { useState, useEffect, useRef } from "react";
import "../style.css";

const FluxDivertissement = () => {

  const [contenus, setContenus] = useState([]);
  const [chargement, setChargement] = useState(false);

  const sentinelRef = useRef(null);
  const idsLoaded = useRef(new Set());

  const API_KEYS = {
    news: "pub_bdcd422614674d188b86924d71a20c41",
    rapid: "b4166c8c44msh9ccc012dd115bf3p136e78jsn7cf912774f0e"
  };

  const rapidHeaders = (host) => ({
    "Content-Type": "application/json",
    "x-rapidapi-key": API_KEYS.rapid,
    "x-rapidapi-host": host
  });

  // PARTAGE
  const partager = async (item) => {

    const url = `${window.location.origin}/live/${item.id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: item.titre,
          text: item.texte,
          url
        });
      } catch {}
    } else {
      await navigator.clipboard.writeText(url);
      alert("Lien copié : " + url);
    }

  };

  // LIKE
  const liker = (id) => {

    const likes = JSON.parse(localStorage.getItem("likes") || "{}");

    likes[id] = (likes[id] || 0) + 1;

    localStorage.setItem("likes", JSON.stringify(likes));

    setContenus([...contenus]);

  };

  const getLikes = (id) => {

    const likes = JSON.parse(localStorage.getItem("likes") || "{}");

    return likes[id] || 0;

  };

  // VUES
  const ajouterVue = (id) => {

    const vues = JSON.parse(localStorage.getItem("vues") || "{}");

    vues[id] = (vues[id] || 0) + 1;

    localStorage.setItem("vues", JSON.stringify(vues));

  };

  const getVues = (id) => {

    const vues = JSON.parse(localStorage.getItem("vues") || "{}");

    return vues[id] || 0;

  };

  // ACTUALITES
  const fetchNews = async () => {

    try {

      const res = await fetch(
        `https://newsdata.io/api/1/latest?apikey=${API_KEYS.news}&language=fr`
      );

      const data = await res.json();

      return (data.results || []).map(item => ({
        id: item.article_id,
        type: "ACTU",
        titre: item.title,
        media: item.image_url || "https://via.placeholder.com/600x400?text=News",
        texte: item.description,
        lien: item.link
      }));

    } catch {
      return [];
    }

  };

  // BLAGUES
  const fetchJoke = async () => {

    try {

      const res = await fetch("https://v2.jokeapi.dev/joke/Any?lang=fr&type=single");

      const data = await res.json();

      return [{
        id: "joke_" + Math.random(),
        type: "HUMOUR",
        titre: "Blague du moment",
        texte: data.joke,
        media: "https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg"
      }];

    } catch {

      return [];

    }

  };

  // NETFLIX
  const fetchNetflix = async () => {

    try {

      const res = await fetch(
        "https://netflix-movies-and-tv-shows1.p.rapidapi.com/list",
        {
          method: "POST",
          headers: {
            ...rapidHeaders("netflix-movies-and-tv-shows1.p.rapidapi.com"),
            "Content-Type": "application/x-www-form-urlencoded"
          },
          body: "page=1&type=Movie"
        }
      );

      const data = await res.json();

      return (data.results || []).map(movie => ({
        id: "netflix_" + movie.title,
        type: "NETFLIX",
        titre: movie.title,
        media: "https://via.placeholder.com/600x400?text=Netflix",
        texte: movie.description
      }));

    } catch {

      return [];

    }

  };

  // ANIME
  const fetchAnime = async () => {

    try {

      const res = await fetch(
        "https://anime-db.p.rapidapi.com/anime?page=1&size=5",
        {
          headers: rapidHeaders("anime-db.p.rapidapi.com")
        }
      );

      const data = await res.json();

      return (data.data || []).map(a => ({
        id: a._id,
        type: "ANIME",
        titre: a.title,
        media: a.image,
        texte: "Ranking : " + a.ranking
      }));

    } catch {

      return [];

    }

  };

  // YOUTUBE
  const fetchYoutube = async () => {

    try {

      const res = await fetch(
        "https://youtube138.p.rapidapi.com/channel/videos/",
        {
          method: "POST",
          headers: rapidHeaders("youtube138.p.rapidapi.com"),
          body: JSON.stringify({
            id: "UCJ5v_MCY6GNUBTO8-D3XoAg",
            filter: "videos_latest"
          })
        }
      );

      const data = await res.json();

      return (data.contents || []).slice(0,3).map(v => ({
        id: "yt_" + v.video?.videoId,
        type: "YOUTUBE",
        titre: v.video?.title,
        media: `https://img.youtube.com/vi/${v.video?.videoId}/hqdefault.jpg`,
        texte: "Nouvelle vidéo YouTube"
      }));

    } catch {

      return [];

    }

  };

  // CHARGEMENT GLOBAL
  const chargerTout = async () => {

    setChargement(true);

    const [
      news,
      jokes,
      netflix,
      anime,
      youtube
    ] = await Promise.all([
      fetchNews(),
      fetchJoke(),
      fetchNetflix(),
      fetchAnime(),
      fetchYoutube()
    ]);

    const mix = [
      ...news,
      ...jokes,
      ...netflix,
      ...anime,
      ...youtube
    ];

    const nouveaux = mix.filter(item => {

      if (idsLoaded.current.has(item.id)) return false;

      idsLoaded.current.add(item.id);

      return true;

    });

    setContenus(prev => [...prev, ...nouveaux]);

    setChargement(false);

  };

  useEffect(() => {

    chargerTout();

  }, []);

  // SCROLL INFINI
  useEffect(() => {

    const observer = new IntersectionObserver(entries => {

      if (entries[0].isIntersecting && !chargement) {

        chargerTout();

      }

    }, { threshold: 0.8 });

    if (sentinelRef.current) {

      observer.observe(sentinelRef.current);

    }

    return () => observer.disconnect();

  }, [chargement]);

  return (

    <div className="main-flux">

      <header className="header-fixe">

        <h1>Al Haddad Live</h1>

        <button
          onClick={() => window.location.reload()}
          className="refresh-btn"
        >
          🔄 Actualiser
        </button>

      </header>

      <div className="feed-container">

        {contenus.map((item,index) => (

          <article
            key={item.id}
            className="post-card"
            onMouseEnter={() => ajouterVue(item.id)}
          >

            <div className={`tag ${item.type.toLowerCase()}`}>
              {item.type}
            </div>

            <img
              src={item.media}
              alt=""
              className="media-content"
            />

            <div className="content-body">

              <h2>{item.titre}</h2>

              <p>{item.texte?.substring(0,150)}...</p>

              {item.lien && (
                <a href={item.lien} target="_blank" rel="noreferrer">
                  Lire la suite
                </a>
              )}

              <div style={{marginTop:"10px"}}>

                👁 {getVues(item.id)} vues

                &nbsp;&nbsp;

                ❤️ {getLikes(item.id)}

              </div>

              <br/>

              <button
                className="refresh-btn"
                onClick={() => liker(item.id)}
              >
                ❤️ Like
              </button>

              <button
                className="refresh-btn"
                onClick={() => partager(item)}
                style={{marginLeft:"10px"}}
              >
                🔗 Partager
              </button>

            </div>

          </article>

        ))}

      </div>

      <div ref={sentinelRef} className="footer-loader">
        {chargement && <div className="loader-anim"></div>}
      </div>

    </div>

  );

};

export default FluxDivertissement;