Prompt Técnico: Implementación de i18n en Portafolio Astro1. Objetivo GeneralRefactorizar el portafolio existente construido con Astro para soportar internacionalización (i18n), permitiendo a los usuarios cambiar entre Inglés y Español. La implementación debe incluir la detección de idioma en la primera visita, persistencia de la elección del usuario y un interruptor de idioma accesible.2. Estructura de Archivos y DatosActualizar Archivos de Datos: Reemplaza el contenido de tus archivos cv.json y cv_english.json con los siguientes JSON actualizados. La estructura se mantiene, pero el contenido ha sido optimizado para mayor impacto.Ubicación: src/data/Archivos:es.json (para Español)en.json (para Inglés)Estructura de Páginas (Rutas i18n): Astro no tiene un enrutador i18n incorporado, por lo que la lógica de renderizado se manejará en el componente de la página principal.3. Contenido JSON Actualizadoen.json (English - Updated & Optimized){
"basics": {
"name": "Oscar Santiago Vélez Muñoz",
"label": "Senior Software Engineer | Backend & Full-Stack Development",
"image": "",
"email": "osanvem@gmail.com",
"phone": "+57 3053483248",
"url": "https://portfolio-os-pi.vercel.app/",
"summary": "Results-driven Senior Software Engineer with 4+ years of experience specializing in backend development (Node.js, Python), full-stack solutions (React), and cloud architecture. Proven expertise in migrating monolithic systems to scalable microservices, developing robust SDKs, and engineering complex data extraction solutions. An accomplished technical leader and university-level educator with a track record of mentoring high-performing teams and driving the adoption of best practices in Agile and DevOps environments. Currently specializing in web scraping, Python, and the Cloudflare ecosystem.",
"location": {
"address": "",
"postalCode": "",
"city": "Cali",
"countryCode": "CO",
"region": "Valle del Cauca"
},
"profiles": [
{
"network": "LinkedIn",
"username": "oscar-santiago-velez-muñoz-875894115",
"url": "https://linkedin.com/in/oscar-santiago-velez-mu%C3%B1oz-875894115"
},
{
"network": "GitHub",
"username": "ossavemu",
"url": "https://github.com/ossavemu"
}
]
},
"work": [
{
"name": "ClientFy",
"position": "Software Architect (Freelance)",
"url": "",
"startDate": "2024-01-01",
"endDate": "Present",
"summary": "Led the successful migration of a monolithic enterprise application to a scalable microservices architecture. Implemented a robust CI/CD pipeline and DevOps culture, significantly reducing deployment times.",
"highlights": [
"Architected backend services using Node.js and NestJS.",
"Improved system performance and flexibility.",
"Enhanced value delivery to end-users."
]
},
{
"name": "Polux Apps",
"position": "Frontend Web Developer",
"startDate": "2021-06-01",
"endDate": "Present",
"summary": "Developed and maintained responsive, high-performance user interfaces for enterprise web applications using Vue.js. Deployed and managed services on Amazon Web Services (AWS).",
"highlights": [
"Integrated frontend components with backend services via REST APIs.",
"Optimized services for cost and performance on AWS."
]
},
{
"name": "Universidad del Valle",
"position": "University Professor",
"startDate": "2024-01-01",
"endDate": "Present",
"summary": "Instructed over 1,000 students in foundational and advanced courses on programming, web development, and software architecture. Designed curricula focused on emerging technologies like AI and cloud computing.",
"highlights": []
},
{
"name": "Universidad ICESI",
"position": "Educational Supervisor & Lead Developer",
"startDate": "2023-01-01",
"endDate": "2023-12-31",
"summary": "Spearheaded the complete lifecycle development of EdutekaLab, an educational platform with AI-powered tools. Led educational initiatives to improve academic performance through technology.",
"highlights": [
"Built with React, Node.js, and MySQL."
]
}
],
"education": [
{
"institution": "Google Creative Campus & Unicafam",
"url": "",
"area": "Specialization in Information Technologies",
"studyType": "Specialization",
"startDate": "2022",
"endDate": "2022",
"score": "",
"courses": []
},
{
"institution": "Universidad del Valle",
"area": "Philosophy",
"studyType": "Professional Degree",
"startDate": "2018",
"endDate": "2022"
},
{
"institution": "Universidad ICESI",
"area": "Social Sciences & Political Science",
"studyType": "Bachelor's Degree",
"startDate": "2016",
"endDate": "2021"
}
],
"projects": [
{
"name": "Enterprise Architectural Migration | ClientFy",
"summary": "Overhauled a legacy monolithic system to improve scalability and performance by leading the transition to a microservices architecture and implementing a full DevOps pipeline.",
"highlights": [],
"url": "",
"technologies": ["Node.js", "NestJS", "Docker", "AWS", "CI/CD"]
},
{
"name": "EdutekaLab | AI-Powered Educational Platform",
"summary": "Developed a comprehensive SaaS platform for educators, implementing features for lesson planning, rubric generation, and gamification using AI.",
"highlights": [],
"url": "",
"technologies": ["React", "Node.js", "MySQL", "AWS"]
}
],
"skills": [
{ "name": "Backend", "keywords": ["Python", "Node.js", "NestJS", "Express.js", "Prisma ORM"] },
{ "name": "Frontend", "keywords": ["React", "Vue.js", "JavaScript", "HTML5", "CSS3"] },
{ "name": "Databases", "keywords": ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
{ "name": "DevOps & Cloud", "keywords": ["AWS", "Cloudflare", "Docker", "NGINX", "CI/CD"] },
{ "name": "Web Scraping", "keywords": ["Data Extraction", "Automation Scripts"] }
]
}
es.json (Español - Actualizado y Optimizado){
"basics": {
"name": "Oscar Santiago Vélez Muñoz",
"label": "Ingeniero de Software Senior | Desarrollo Backend & Full-Stack",
"image": "",
"email": "osanvem@gmail.com",
"phone": "+57 3053483248",
"url": "https://portfolio-os-pi.vercel.app/",
"summary": "Ingeniero de Software Senior orientado a resultados con más de 4 años de experiencia, especializado en desarrollo backend (Node.js, Python), soluciones full-stack (React) y arquitectura en la nube. Experiencia comprobada en la migración de sistemas monolíticos a microservicios escalables, desarrollo de SDKs robustos y diseño de soluciones complejas de extracción de datos. Líder técnico y educador a nivel universitario con un historial de mentoría a equipos de alto rendimiento e impulso de mejores prácticas en entornos Agile y DevOps. Actualmente especializándome en web scraping, Python y el ecosistema de Cloudflare.",
"location": {
"address": "",
"postalCode": "",
"city": "Cali",
"countryCode": "CO",
"region": "Valle del Cauca"
},
"profiles": [
{
"network": "LinkedIn",
"username": "oscar-santiago-velez-muñoz-875894115",
"url": "https://linkedin.com/in/oscar-santiago-velez-mu%C3%B1oz-875894115"
},
{
"network": "GitHub",
"username": "ossavemu",
"url": "https://github.com/ossavemu"
}
]
},
"work": [
{
"name": "ClientFy",
"position": "Arquitecto de Software (Freelance)",
"url": "",
"startDate": "2024-01-01",
"endDate": "Actual",
"summary": "Lideré la migración exitosa de una aplicación empresarial monolítica a una arquitectura de microservicios escalable. Implementé un pipeline de CI/CD robusto y una cultura DevOps, reduciendo significativamente los tiempos de despliegue.",
"highlights": [
"Diseñé servicios backend usando Node.js y NestJS.",
"Mejoré el rendimiento y la flexibilidad del sistema.",
"Optimicé la entrega de valor a los usuarios finales."
]
},
{
"name": "Polux Apps",
"position": "Desarrollador Web Frontend",
"startDate": "2021-06-01",
"endDate": "Actual",
"summary": "Desarrollé y mantuve interfaces de usuario responsivas y de alto rendimiento para aplicaciones web empresariales usando Vue.js. Desplegué y gestioné servicios en Amazon Web Services (AWS).",
"highlights": [
"Integré componentes frontend con servicios backend mediante APIs REST.",
"Optimicé servicios para costo y rendimiento en AWS."
]
},
{
"name": "Universidad del Valle",
"position": "Docente Universitario",
"startDate": "2024-01-01",
"endDate": "Actual",
"summary": "Instruí a más de 1,000 estudiantes en cursos fundamentales y avanzados de programación, desarrollo web y arquitectura de software. Diseñé planes de estudio enfocados en tecnologías emergentes como IA y computación en la nube.",
"highlights": []
},
{
"name": "Universidad ICESI",
"position": "Supervisor Educativo y Desarrollador Principal",
"startDate": "2023-01-01",
"endDate": "2023-12-31",
"summary": "Lideré el ciclo de vida completo del desarrollo de EdutekaLab, una plataforma educativa con herramientas de IA. Dirigí iniciativas educativas para mejorar el rendimiento académico a través de la tecnología.",
"highlights": [
"Construido con React, Node.js y MySQL."
]
}
],
"education": [
{
"institution": "Google Creative Campus & Unicafam",
"url": "",
"area": "Especialización en Tecnologías de la Información",
"studyType": "Especialización",
"startDate": "2022",
"endDate": "2022",
"score": "",
"courses": []
},
{
"institution": "Universidad del Valle",
"area": "Filosofía",
"studyType": "Título Profesional",
"startDate": "2018",
"endDate": "2022"
},
{
"institution": "Universidad ICESI",
"area": "Ciencias Sociales y Ciencia Política",
"studyType": "Licenciatura",
"startDate": "2016",
"endDate": "2021"
}
],
"projects": [
{
"name": "Migración de Arquitectura Empresarial | ClientFy",
"summary": "Reestructuré un sistema monolítico heredado para mejorar la escalabilidad y el rendimiento, liderando la transición a una arquitectura de microservicios e implementando un pipeline DevOps completo.",
"highlights": [],
"url": "",
"technologies": ["Node.js", "NestJS", "Docker", "AWS", "CI/CD"]
},
{
"name": "EdutekaLab | Plataforma Educativa con IA",
"summary": "Desarrollé una plataforma SaaS integral para educadores, implementando funcionalidades para la planificación de lecciones, generación de rúbricas y gamificación mediante IA.",
"highlights": [],
"url": "",
"technologies": ["React", "Node.js", "MySQL", "AWS"]
}
],
"skills": [
{ "name": "Backend", "keywords": ["Python", "Node.js", "NestJS", "Express.js", "Prisma ORM"] },
{ "name": "Frontend", "keywords": ["React", "Vue.js", "JavaScript", "HTML5", "CSS3"] },
{ "name": "Bases de Datos", "keywords": ["PostgreSQL", "MySQL", "MongoDB", "Redis"] },
{ "name": "DevOps & Cloud", "keywords": ["AWS", "Cloudflare", "Docker", "NGINX", "CI/CD"] },
{ "name": "Web Scraping", "keywords": ["Extracción de Datos", "Scripts de Automatización"] }
]
} 4. Features a Implementar (Instrucciones Detalladas)Feature 1: Lógica de Internacionalización y Carga de DatosObjetivo: Crear un sistema centralizado que determine el idioma y cargue el archivo JSON correspondiente.Implementación (src/layouts/Layout.astro o similar):Crear un store o señal para el idioma: Utiliza una herramienta de manejo de estado para Astro como nanostores para mantener el idioma actual ('en' o 'es').// src/stores/languageStore.js
import { atom } from 'nanostores';
export const language = atom('en'); // 'en' is the default
Modificar el Layout principal: En tu Layout.astro, añade un script que se ejecute en el cliente para leer el localStorage y actualizar el store.---
// Layout.astro

---

<html lang="en">
  ...
  <script>
    import { language } from '../stores/languageStore';

    document.addEventListener('astro:page-load', () => {
      const savedLang = localStorage.getItem('language');
      if (savedLang && (savedLang === 'en' || savedLang === 'es')) {
        language.set(savedLang);
        document.documentElement.lang = savedLang;
      } else {
        // If no language is saved, default to 'en'
        language.set('en');
        document.documentElement.lang = 'en';
      }
    });

  </script>
</html>
Feature 2: Modal de Bienvenida para Selección de IdiomaObjetivo: Mostrar un modal a los nuevos usuarios para que elijan su idioma preferido.Implementación (Crear src/components/LanguageModal.astro):Estructura del Componente:---
// LanguageModal.astro
---
<div id="lang-modal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center">
  <div class="bg-white p-8 rounded-lg shadow-xl text-center">
    <h2 class="text-2xl font-bold mb-4">Select Your Language / Selecciona tu Idioma</h2>
    <div class="flex gap-4">
      <button id="lang-en" class="bg-blue-500 text-white px-6 py-2 rounded">English</button>
      <button id="lang-es" class="bg-green-500 text-white px-6 py-2 rounded">Español</button>
    </div>
  </div>
</div>

<script>
  import { language } from '../stores/languageStore';

  document.addEventListener('astro:page-load', () => {
    const modal = document.getElementById('lang-modal');
    const btnEn = document.getElementById('lang-en');
    const btnEs = document.getElementById('lang-es');

    const savedLang = localStorage.getItem('language');

    if (!savedLang) {
      modal.style.display = 'flex';
    }

    const selectLanguage = (lang) => {
      language.set(lang);
      localStorage.setItem('language', lang);
      document.documentElement.lang = lang;
      modal.style.display = 'none';
    };

    btnEn.addEventListener('click', () => selectLanguage('en'));
    btnEs.addEventListener('click', () => selectLanguage('es'));
  });
</script>

Integración: Añade <LanguageModal /> a tu Layout.astro.Feature 3: Botón para Cambiar de IdiomaObjetivo: Permitir a los usuarios cambiar el idioma en cualquier momento.Implementación (Crear src/components/LanguageSwitcher.astro):Estructura del Componente:---
// LanguageSwitcher.astro
import { useStore } from '@nanostores/preact'; // o el binding de tu framework
import { language } from '../stores/languageStore';

const lang = useStore(language);
const nextLang = lang === 'en' ? 'es' : 'en';
const buttonText = lang === 'en' ? 'Español' : 'English';

---

<button id="lang-switcher" class="px-4 py-2 border rounded">
  {buttonText}
</button>

<script define:vars={{ nextLang }}>
  import { language } from '../stores/languageStore';

  document.getElementById('lang-switcher').addEventListener('click', () => {
    language.set(nextLang);
    localStorage.setItem('language', nextLang);
    document.documentElement.lang = nextLang;
    // Forzar un re-render o recarga si es necesario, aunque con stores debería ser reactivo
    window.location.reload(); // Solución simple, se puede mejorar
  });
</script>

Integración: Coloca <LanguageSwitcher client:load /> en tu Header.astro o donde desees que aparezca.Feature 4: Renderizado de Contenido DinámicoObjetivo: Mostrar el contenido del JSON correcto según el idioma seleccionado.Implementación (src/pages/index.astro):---
import { useStore } from '@nanostores/preact';
import { language } from '../stores/languageStore';

import esData from '../data/es.json';
import enData from '../data/en.json';

// Este es un componente Preact/React para reactividad
import CVContent from '../components/CVContent.jsx';

---

<Layout title="Oscar Vélez Portfolio">
  <main>
    <!-- Pasamos ambos sets de datos al componente cliente -->
    <CVContent enData={enData} esData={esData} client:load />
  </main>
</Layout>
Componente Reactivo (src/components/CVContent.jsx):import { useStore } from '@nanostores/react';
import { language } from '../stores/languageStore';

export default function CVContent({ enData, esData }) {
const lang = useStore(language);
const data = lang === 'es' ? esData : enData;

// Si 'data' no está definido al inicio, muestra un loader o null
if (!data) return <div>Loading...</div>;

return (

<div>
<h1>{data.basics.name}</h1>
<p>{data.basics.label}</p>
{/_ ... Renderiza el resto del CV usando el objeto 'data' ... _/}
</div>
);
}

improve section with mac liquid glass
.glass-button {
padding: 0.75rem 1.5rem;
border-radius: 0.5rem; /_ Bordes redondeados _/
font-weight: bold;
color: #fff; /_ Color del texto _/
cursor: pointer;
transition: background 0.3s ease;

/_ --- Efecto Glassmorphism --- _/
background: rgba(255, 255, 255, 0.1); /_ Fondo semitransparente _/
backdrop-filter: blur(10px); /_ El efecto de desenfoque clave _/
-webkit-backdrop-filter: blur(10px); /_ Para compatibilidad con Safari _/
border: 1px solid rgba(255, 255, 255, 0.2); /_ Borde sutil _/
box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); /_ Sombra suave para dar profundidad _/
}

.glass-button:hover {
background: rgba(255, 255, 255, 0.2); /_ Un poco más opaco al pasar el mouse _/
}
