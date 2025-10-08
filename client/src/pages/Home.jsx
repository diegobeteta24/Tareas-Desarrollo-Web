import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Home = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      {/* Navbar con información del usuario */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1">Sistema de Usuarios</span>
          <div className="d-flex align-items-center">
            <span className="navbar-text text-white me-3">
              Bienvenido, <strong>{user?.nombre}</strong>
            </span>
            <button 
              className="btn btn-outline-light btn-sm" 
              onClick={handleLogout}
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
      </nav>

      {/* Contenido principal */}
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-header bg-primary text-white">
                <h3 className="mb-0">Información del Usuario</h3>
              </div>
              <div className="card-body p-4">
                <div className="row mb-3">
                  <div className="col-md-4">
                    <strong>Nombre:</strong>
                  </div>
                  <div className="col-md-8">
                    {user?.nombre}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <strong>DPI:</strong>
                  </div>
                  <div className="col-md-8">
                    {user?.dpi}
                  </div>
                </div>

                <div className="row mb-3">
                  <div className="col-md-4">
                    <strong>Email:</strong>
                  </div>
                  <div className="col-md-8">
                    {user?.email}
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-4">
                    <strong>ID de Usuario:</strong>
                  </div>
                  <div className="col-md-8">
                    {user?.id}
                  </div>
                </div>
              </div>
            </div>

            <div className="alert alert-success mt-4" role="alert">
              <h5 className="alert-heading">¡Sesión iniciada exitosamente!</h5>
              <p>Has iniciado sesión correctamente en el sistema. Tu información de usuario se está gestionando mediante React Context.</p>
              <hr />
              <p className="mb-0">Esta página está protegida y solo es accesible para usuarios autenticados.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
