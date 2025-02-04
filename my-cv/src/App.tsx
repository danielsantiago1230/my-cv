import React from 'react';
import Header from './components/Header';
import Experience from './components/Experience';
import Education from './components/Education';
import Landing from './components/Landing';
import Foater from './components/Foater';
import ProfessionalSummary from './components/ProfessionalSummary';
import Skills from './components/Skills';
import { differenceInMonths, differenceInYears } from 'date-fns';


const App: React.FC = () => {
  const startDate = new Date(2022, 4); // May 2022 (month is 0-indexed)
  const currentDate = new Date();

  const years = differenceInYears(currentDate, startDate);
  const months = differenceInMonths(currentDate, startDate) % 12;

  return (
    <div className="min-h-screen bg-gradient-to-r from-brand-dark to-brand-accent-dark text-white">
      {/* Landing Section */}
      <Landing />

      {/* Main CV Content */}
      <section id="cv-section">
        <Header />
        <main className="p-4 md:p-8 lg:p-12">
        <ProfessionalSummary years={years} />
          <Skills />
          <Experience years={years} months={months} />
          <Education />
        </main>
        <Foater />
      </section>
    </div>
  );
};

export default App;
