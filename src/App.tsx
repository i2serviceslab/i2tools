import React, { useState } from 'react';
import { Language } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Approach } from './components/Approach';
import { TrackRecord } from './components/TrackRecord';
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
        {/* 2. Slide 1: Cover / Hero (You drill. We do the rest!) */}
        <Hero lang={lang} />

        {/* 3. Slides 2-3: Our Approach (Unified Value Proposition & Colombian Ground Reality) */}
        <Approach lang={lang} />

        {/* 4. Slide 4: Experience (6 metric circles: Clients, branches, team, ANM titles, banks, web) */}
        <TrackRecord lang={lang} />

        {/* 5. Slides 5-9: Areas of Expertise (Capabilities, authentic field photography & partner network) */}
        <PracticeAreas lang={lang} />

        {/* 6. Slide 10: Service Packages (Launch, Monthly Retainer, Ad-hoc) */}
        <Packages lang={lang} />

        {/* 7. Slide 12: Title Management (Buyer-side title acquisition & legal due diligence mandate) */}
        <TitleBrokerage lang={lang} />

        {/* 8. Slide 13: Direct Contact (Torre Davivienda, Email, Phone, Introduction Form) */}
        <ContactSection lang={lang} />
      </main>

      {/* 9. Institutional Footer */}
      <Footer lang={lang} onLanguageChange={setLang} />
    </div>
  );
};

export default App;
