import React from 'react';
import { AppleNavbar } from './components/apple/AppleNavbar';
import { AppleHero } from './components/apple/AppleHero';
import { AppleLinesBento } from './components/apple/AppleLinesBento';
import { AppleColdChain } from './components/apple/AppleColdChain';
import { AppleAdvisors } from './components/apple/AppleAdvisors';
import { AppleContact } from './components/apple/AppleContact';
import { AppleFooter } from './components/apple/AppleFooter';
import { WhatsAppFloatingButton } from './components/WhatsAppFloatingButton';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-[#1D1D1F] font-sans antialiased selection:bg-[#0071E3] selection:text-white">
      {/* Navbar Minimalista Apple de 48px */}
      <AppleNavbar />

      <main>
        {/* Hero Apple: Titular monumental, foto gigante de bodega y modal de video */}
        <AppleHero />

        {/* Bento Grid: 5 Líneas de distribución con fotos reales y enlaces limpios */}
        <AppleLinesBento />

        {/* Cadena de Frío e Infraestructura: Especificaciones tipo Apple Keynote */}
        <AppleColdChain />

        {/* Equipo Comercial: 6 asesores con fotos reales y contacto 1 a 1 */}
        <AppleAdvisors />

        {/* Contacto & Despacho: Sede Garibaldi y formulario simplificado */}
        <AppleContact />
      </main>

      {/* Footer Minimalista Institucional */}
      <AppleFooter />

      {/* Botón Flotante Discreto */}
      <WhatsAppFloatingButton />
    </div>
  );
};

export default App;
