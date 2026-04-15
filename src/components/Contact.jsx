import React from "react";
// Importation du hook officiel Formspree
import { useForm, ValidationError } from '@formspree/react';

const ContactPage = () => {
  // On utilise l'ID fourni dans votre texte
  const [state, handleSubmit] = useForm("xaqlzyje");

  // Si l'envoi est réussi, on affiche un message de succès
  if (state.succeeded) {
    return (
      <div style={styles.container}>
        <h2 style={styles.title}>Merci !</h2>
        <p style={styles.statusSuccess}>Votre message a été envoyé avec succès. Nous vous répondrons bientôt.</p>
        <button onClick={() => window.location.href = "/"} style={styles.button}>
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Contactez-nous</h2>
      <p style={styles.subtitle}>Une question ? Envoyez-nous un message directement.</p>
      
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.inputGroup}>
          <label htmlFor="email" style={styles.label}>Votre adresse e-mail :</label>
          <input
            id="email"
            type="email" 
            name="email"
            placeholder="exemple@mail.com"
            required
            style={styles.input}
          />
          {/* Affiche une erreur spécifique si l'email est mal formé */}
          <ValidationError prefix="Email" field="email" errors={state.errors} style={styles.error} />
        </div>

        <div style={styles.inputGroup}>
          <label htmlFor="message" style={styles.label}>Votre message :</label>
          <textarea
            id="message"
            name="message"
            rows="5"
            placeholder="Comment pouvons-nous vous aider ?"
            required
            style={styles.textarea}
          ></textarea>
          <ValidationError prefix="Message" field="message" errors={state.errors} style={styles.error} />
        </div>

        <button 
          type="submit" 
          disabled={state.submitting}
          style={state.submitting ? {...styles.button, ...styles.buttonDisabled} : styles.button}
        >
          {state.submitting ? "Envoi en cours..." : "Envoyer le message"}
        </button>

        {state.errors && <p style={styles.error}>Oups ! Une erreur est survenue.</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    maxWidth: '600px',
    margin: '60px auto',
    padding: '30px',
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
  },
  title: {
    textAlign: 'center',
    color: '#2563eb',
    fontSize: '28px',
    marginBottom: '10px'
  },
  subtitle: {
    textAlign: 'center',
    color: '#666',
    marginBottom: '30px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column'
  },
  inputGroup: {
    marginBottom: '20px'
  },
  label: {
    display: 'block',
    marginBottom: '8px',
    fontWeight: 'bold',
    color: '#333'
  },
  input: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '16px',
    outline: 'none'
  },
  textarea: {
    width: '100%',
    padding: '12px',
    borderRadius: '8px',
    border: '1px solid #e5e7eb',
    fontSize: '16px',
    resize: 'vertical',
    minHeight: '120px',
    outline: 'none'
  },
  button: {
    backgroundColor: '#2563eb',
    color: 'white',
    padding: '14px',
    border: 'none',
    borderRadius: '8px',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
  buttonDisabled: {
    backgroundColor: '#94a3b8',
    cursor: 'not-allowed'
  },
  statusSuccess: {
    textAlign: 'center',
    color: '#16a34a',
    fontWeight: 'bold',
    marginBottom: '20px'
  },
  error: {
    color: '#dc2626',
    fontSize: '14px',
    marginTop: '5px'
  }
};

export default ContactPage;
