import ReactLogo from '../assets/images/lang10.png';
import SCSSLogo from '../assets/images/lang17.png';
import TSLogo from '../assets/images/lang9.png';
import PHPLogo from '../assets/images/lang1.png';
import JSLogo from '../assets/images/lang2.png';
import MYSQLogo from '../assets/images/lang15.png';
import CSSLogo from '../assets/images/lang3.png';
import PythonLogo from '../assets/images/lang4.png';
export const experiences = [
  {
    id: 1,
    poste: 'Développeur Full Stack PHP',
    contrat: 'Stage',
    entreprise: 'MFPASS - Centre de la Gabrielle',
    lieu: 'Claye-Souilly',
    date: 'Janvier 2024 - Mars 2024',
    description: [
      'Développement d’un site complet en PHP pour la gestion et la location de véhicules',
      'Conception de la base de données MySQL pour la gestion des réservations et du parc',
      'Mise en place d’interfaces utilisateur en HTML/CSS et JavaScript',
    ],
    technos: [PHPLogo, JSLogo, MYSQLogo, CSSLogo],
  },
  {
    id: 2,
    poste: 'Développeur Full-Stack & Data Analytics',
    contrat: 'Stage',
    entreprise: 'C.C.M.',
    lieu: 'Aulnay-sous-Bois',
    date: 'Mars 2025 - Juillet 2025',
    description: [
      'Développement d’un site vitrine en React.js avec un backend Node/Express',
      'Mise en place d’une collecte de métriques (trafic, géolocalisation, langue) et visualisation via Chart.js',
      'Création d’une application de simulation de coût chantier (Python Tkinter & React Native)',
    ],
    technos: [ReactLogo, PythonLogo],
  },


];
