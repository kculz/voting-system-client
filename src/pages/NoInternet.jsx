import React from 'react';

const NoInternet = () => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <img
        src="https://cdn-icons-png.flaticon.com/512/84/84382.png"
        alt="No Internet"
        style={{
          width: '200px',
          height: '200px',
          marginBottom: '20px',
        }}
      />
      <h1 style={{ fontSize: '24px', fontWeight: 'bold' }}>
        No Internet Connection
      </h1>
      <p style={{ fontSize: '18px', color: '#666' }}>
        Please check your internet connection and try again.
      </p>
      <button
        style={{
          backgroundColor: '#4CAF50',
          color: '#fff',
          padding: '10px 20px',
          borderRadius: '5px',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() => window.location.reload()}
      >
        Reload
      </button>
    </div>
  );
};

export default NoInternet;