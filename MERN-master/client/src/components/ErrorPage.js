import React from 'react';

const ErrorPage = () => {
  const styles = {
    container: {
      backgroundColor: '#f0f0f0',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
    },
    title: {
      fontSize: '48px',
      fontWeight: 'bold',
      color: '#444444',
      marginBottom: '20px',
    },
    message: {
      fontSize: '24px',
      color: '#666666',
      textAlign: 'center',
      maxWidth: '500px',
      marginBottom: '40px',
    },
    button: {
      backgroundColor: '#007bff',
      color: '#ffffff',
      fontSize: '16px',
      padding: '10px 20px',
      borderRadius: '5px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.4)',
      cursor: 'pointer',
    },
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Oops!</div>
      <div style={styles.message}>Sorry, the page you're looking for doesn't exist.</div>
      <button style={styles.button} onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default ErrorPage;
