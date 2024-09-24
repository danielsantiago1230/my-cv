// src/App.tsx
import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Landing from './components/Landing';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Landing Section */}
      <Landing />

      {/* Main CV Content */}
      <section id="cv-section">
        <Header />
        <main className="p-4 md:p-8 lg:p-12">
          <Experience />
          <Education />
        </main>
      </section>
    </div>
  );
};

export default App;
