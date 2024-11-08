export const ButtonLoading = ({ loading, onClick }) => {
    return (
      <button 
          onClick={onClick} 
          className={`load-more-btn ${loading ? 'loading' : ''}`} // Añadir clase 'loading' si está cargando
          disabled={loading} // Deshabilitar el botón mientras carga
      >   
          {loading ? 'Loading...' : 'Load 10 more books'}
      </button>
    );
  };
  