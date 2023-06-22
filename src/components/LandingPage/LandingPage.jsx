import React from 'react';

const LandingPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <nav className="bg-white shadow-lg">
        <div className="container mx-auto px-4">
        </div>
      </nav>
      <header className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
            Bienvenido a nuestra Landing Page
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Aquí puedes mostrar información relevante y convincente sobre tu producto o servicio.
          </p>
        </div>
      </header>
      <section className="bg-gray-200 py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Características destacadas
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Característica 1</h3>
              <p className="text-gray-600">
                Descripción de la característica 1. Puedes incluir imágenes, íconos, etc.
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Característica 2</h3>
              <p className="text-gray-600">
                Descripción de la característica 2. Puedes incluir imágenes, íconos, etc.
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Característica 3</h3>
              <p className="text-gray-600">
                Descripción de la característica 3. Puedes incluir imágenes, íconos, etc.
              </p>
            </div>
            <div className="bg-white rounded shadow-md p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Característica 4</h3>
              <p className="text-gray-600">
                Descripción de la característica 4. Puedes incluir imágenes, íconos, etc.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4">
          <p className="text-center">
            &copy; {new Date().getFullYear()} Mi Empresa. Todos los derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
