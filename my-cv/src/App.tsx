import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <main className="p-4">
        <Experience />
        <Education />
      </main>
    </div>
  );
};

export default App;
