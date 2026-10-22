import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ValueProposition } from './components/ValueProposition';
import { Approach } from './components/Approach';
import { TrackRecord } from './components/TrackRecord';
import { Structure } from './components/Structure';
import { PracticeAreas } from './components/PracticeAreas';
import { Packages } from './components/Packages';
import { TitleBrokerage } from './components/TitleBrokerage';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ScrollProgress } from './components/ScrollProgress';

export const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('en');

  return (
    <div className="min-h-screen bg-[#071328] text-slate-100 font-sans antialiased selection:bg-[#00C2FF] selection:text-[#071328]">
      {/* Precision Scroll Reading Progress */}
      <ScrollProgress />

      {/* 1. Sticky Navigation with Real Logo and EN/ES Toggle */}
      <Navbar lang={lang} setLang={setLang} />

      <main>
        {/* 2. Slide 1: Cover / Hero (Services Portfolio - You drill. We do the rest!) */}
        <Hero lang={lang} />

        {/* 3. Slide 2: Value Proposition (White Editorial Section + Office Photo + Quote) */}
        <ValueProposition lang={lang} />

        {/* 4. Slide 3: Our Approach (Focus on exploration & capital + 2 cards) */}
        <Approach lang={lang} />

        {/* 5. Slide 4: Why Trust Us (6 circular dashed metric rings + 18m drilling record) */}
        <TrackRecord lang={lang} />

        {/* 6. Slide 5: Structure (How we're organized + 5 pillars + Allied consultants) */}
        <Structure lang={lang} />

        {/* 7. Slides 6-9: Practice Areas (White Editorial Sections with extracted photos & cyan squares) */}
        <PracticeAreas lang={lang} />

        {/* 8. Slide 10: Service Packages (Launch, Monthly, Ad-hoc 3-gradient cards) */}
        <Packages lang={lang} />

        {/* 9. Slide 12: Title Brokerage & 7-Step Process (Cyan banner with yellow star) */}
        <TitleBrokerage lang={lang} />

        {/* 10. Slide 13: Thank you & Contact (Address, Email, Phone, Torre Davivienda) */}
        <ContactSection lang={lang} />
      </main>

      {/* 11. Institutional Footer */}
      <Footer lang={lang} onLanguageChange={setLang} />
    </div>
  );
};

export default App;
