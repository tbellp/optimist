// Importar imágenes desde la carpeta media
import AboutUs from './assets/AboutUs';

import imgInicio1 from './media/resta/IMG_4962.jpeg';
import imgInicio2 from './media/resta/Lorenza.gif';
import imgInicio3 from './media/resta/IMG_3711.jpeg';

import imgAgro1 from './media/agro/IMG_3438.jpeg';
import imgAgro2 from './media/agro/IMG_4949.jpeg';
import imgAgro3 from './media/agro/IMG_3486.jpeg';

import imgB2B1 from './media/agro/IMG_3498.jpeg';
import imgB2B2 from './media/agro/IMG_4963.jpeg';
import imgB2B3 from './media/agro/IMG_3490.jpeg';

import imgComercial1 from './media/comercial/IMG_3264.jpeg';
import imgComercial2 from './media/comercial/IMG_3713.jpeg';
import imgComercial3 from './media/comercial/IMG_4778-C.png';

import imgIndus1 from './media/industria/IMG_4782.jpeg';
import imgIndus2 from './media/industria/IMG_4781.jpeg';
import imgIndus3 from './media/industria/IMG_3484.jpeg';

import imgContacto1 from './img/Frase1.png';

import { useEffect, useState } from 'react';
import NavbarEx from './components/NavbarEx';
import CarouselDinamic from './components/CarouselDinamic';
import Cards from './components/Cards';
import Testimonials from "./assets/Testimonials";
import Blog from "./blog/Blog";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ArticleDetail from "./blog/ArticleDetail";

export default function App() {
  const [vista, setVista] = useState('inicio');

  // Discriminación por origen (referer)
  useEffect(() => {
    const referrer = document.referrer.toLowerCase();

    if (referrer.includes("linkedin")) {
      setVista("b2b");
    } else if (referrer.includes("agro") || referrer.includes("agrícola")) {
      setVista("agro");
    } else {
      setVista("inicio");
    }
  }, []);

  const slidesData = {
    inicio: [
      {
        img: imgInicio1,
        alt: 'Sistema de climatización y enfriamiento ambiental con nebulización',
        title: 'Climatización Inteligente de Espacios',
        description: 'Nuestra tecnología de nebulización atomiza micro partículas de agua, maximizando la superficie de contacto para un enfriamiento evaporativo eficiente.'
      },
      {
        img: imgInicio2,
        alt: 'Sistema de neblina y bruma para purificación y limpieza del aire',
        title: 'Purificación y Climatización del Aire',
        description: 'Las micro gotas de neblina capturan partículas en suspensión, mejorando la calidad del aire mediante bruma de alta eficiencia.'
      },
      {
        img: imgInicio3,
        alt: 'Boquillas de nebulización para generación de niebla y garuga en terrazas',
        title: 'Sistemas de Niebla para Terrazas y Comercios',
        description: 'Boquillas de nebulización que generan garuga y bruma para climatización silenciosa, eliminando insectos voladores y mejorando el confort ambiental.'
      }
    ],
    agro: [
      {
        img: imgAgro1,
        alt: 'Nebulización y climatización para invernaderos y agroindustria',
        title: 'Climatización Agroindustrial',
        description: 'Sistemas de nebulización y enfriamiento para invernaderos, packings y recintos agrícolas. Control de clima para optimizar la producción.'
      },
      {
        img: imgAgro2,
        alt: 'Control de clima con neblina para reducción de patógenos en agro',
        title: 'Ambiente Controlado, Menor Riesgo Sanitario',
        description: 'La nebulización de bruma reduce patógenos en suspensión y ahuyenta insectos, protegiendo cultivos y animales.'
      },
      {
        img: imgAgro3,
        alt: 'Sistema de garuga y neblina para protección de cultivos e inversión agropecuaria',
        title: 'Protección de Inversiones Agropecuarias',
        description: 'Mantenga la humedad óptima con sistemas de garuga y neblina que mitigan el estrés térmico en cultivos y ganado.'
      }
    ],
    comercial: [
      {
        img: imgComercial1,
        alt: 'Climatización de terrazas y restaurantes con nebulización y bruma',
        title: 'Climatización Comercial para Terrazas y Restaurantes',
        description: 'Sistemas de neblina y bruma para climatización de terrazas, pasillos, azoteas y estacionamientos. Aumente la ocupación y ventas.'
      },
      {
        img: imgComercial2,
        alt: 'Enfriamiento con nebulización para gimnasios y recintos deportivos',
        title: 'Confort Climático en Recintos Deportivos y Comerciales',
        description: 'Nebulización de enfriamiento para gimnasios, estadios y canchas. Mejore la experiencia del cliente incluso en verano.'
      },
      {
        img: imgComercial3,
        alt: 'Climatización con bruma y garuga para verdulerías y pescaderías',
        title: 'Preservación de Alimentos con Climatización',
        description: 'Sistemas de bruma y garuga para verdulerías, florerías y pescaderías. Reduzca mermas y mantenga las propiedades organolépticas.'
      }
    ],
    b2b: [
      {
        img: imgB2B1,
        alt: 'Climatización con nebulización para criaderos y lecherías',
        title: 'Gestión Térmica para Producción Animal',
        description: 'Climatización con nebulización para criaderos y lecherías. Mitigue el estrés térmico y mejore indicadores productivos.'
      },
      {
        img: imgB2B2,
        alt: 'Sistemas de neblina y boquillas para productividad empresarial',
        title: 'Climatización que Incrementa la Productividad',
        description: 'Integramos tecnologías de nebulización y boquillas de alta presión para optimizar el clima en su operación.'
      },
      {
        img: imgB2B3,
        alt: 'Inversión estratégica en climatización y enfriamiento para competitividad',
        title: 'Inversión Estratégica en Climatización',
        description: 'Optimist® proporciona sistemas de enfriamiento y neblina que fortalecen la competitividad de su empresa.'
      }
    ],
    indust: [
      {
        img: imgIndus1,
        alt: 'Control de olores y climatización industrial con nebulización',
        title: 'Control Ambiental para la Industria del Reciclaje',
        description: 'Sistemas de nebulización para tratamiento de olores y partículas. Cumpla normativas ambientales con eficiencia.'
      },
      {
        img: imgIndus2,
        alt: 'Nebulización y bruma para control de contaminantes industriales',
        title: 'Gestión de Contaminantes y Corrosión',
        description: 'El control de humedad mediante bruma y garuga reduce contaminantes y partículas corrosivas en ambientes industriales.'
      },
      {
        img: imgIndus3,
        alt: 'Precooling y eficiencia energética con enfriamiento adiabático industrial',
        title: 'Precooling y Eficiencia Energética Industrial',
        description: 'Sistemas de enfriamiento adiabático para pre-enfriamiento de equipos. Reduzca costos energéticos con climatización inteligente.'
      }
    ],
    contacto: [
      {
        img: imgContacto1,
        alt: 'Contacto Optimist - Climatización y Nebulización',
        title: 'Contáctanos',
        description: 'Estamos listos para ayudarte a implementar Optimist® en tu negocio.'
      }
    ]
  };

  return (
    <>
    <Router>
      <NavbarEx onSelect={setVista} />
      <CarouselDinamic slides={slidesData[vista]} />

      <Cards vista={vista} />
    
      <main className="p-3">
        {vista === 'inicio' && <h2>Testimonios</h2>}
        {vista === 'aboutus' && <AboutUs />}
        {vista === 'agro' && <h2>Más protección con Optimist®</h2>}
        {vista === 'b2b' && <h2>Reduce el calor y mejora tu ROI</h2>}
        {vista === 'comercial' && <h2>Qué el calor no afecte tus ingresos</h2>}
        {vista === 'indust' && <h2>Protege a tu gente</h2>}
        {vista === 'contacto' && <h2>Contáctanos</h2>}
        

      </main>
     {/* <div>Testimonios para la vista: {vista}</div> //test si pasa la category*/}
    
      <Testimonials category={vista} />
      <Blog origen={vista} />
      
      
        <Routes>
          <Route path="/blog/:slug" element={<ArticleDetail />} />
          <Route path="/blog" element={<Blog origen="inicio" />} />
        </Routes>
      </Router>
      
    </>
    
  );
}
