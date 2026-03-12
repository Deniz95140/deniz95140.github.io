import ReactLogo from '../assets/images/lang10.png';
import SCSSLogo from '../assets/images/lang17.png';
import TSLogo from '../assets/images/lang9.png';
import PHPLogo from '../assets/images/lang1.png';
import JSLogo from '../assets/images/lang2.png';
import MYSQLogo from '../assets/images/lang15.png';
import CSSLogo from '../assets/images/lang3.png';
import PythonLogo from '../assets/images/lang4.png';
import RapportCCM from '../assets/images/Rapport_de_stage_CCM.pdf';
import RapportGabrielle from '../assets/images/Rapport_de_stage_Centre_Gabrielle.pdf';

export const experiences = [
  {
    id: 1,
    poste: 'D\u00E9veloppeur Full-Stack',
    contrat: 'Stage',
    entreprise: 'MFPASS - Centre de la Gabrielle',
    lieu: 'Claye-Souilly',
    date: 'Janvier 2024 - Mars 2024',
    description: [
      'D\u00E9veloppement d\u2019un site complet en PHP pour la gestion et la location de v\u00E9hicules.',
      'Conception de la base de donn\u00E9es MySQL pour la gestion des r\u00E9servations.',
      'Mise en place d\u2019interfaces utilisateur en HTML/CSS et JavaScript.',
    ],
    technos: [PHPLogo, JSLogo, MYSQLogo, CSSLogo],
    rapport: RapportGabrielle,
  },
  {
    id: 2,
    poste: 'D\u00E9veloppeur logiciel',
    contrat: 'Stage',
    entreprise: 'C.C.M.',
    lieu: 'Aulnay-sous-Bois',
    date: 'Mars 2025 - Juillet 2025',
    description: [
      'Conception et développement en Python (Tkinter) d’un simulateur de calculs métier pour l’estimation de projets, avec scripts d’automatisation pour la génération de rapports techniques.',
      'Développement d’une application mobile en React Native pour la simulation de coûts de chantier.',
      'Création d’un site web avec API Node.js / Express pour la collecte et le traitement de données opérationnelles.',
    ],
    technos: [ReactLogo, PythonLogo],
    rapport: RapportCCM,
  },
];
