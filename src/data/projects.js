import P1 from '../assets/images/project1.jpg';
import P2 from '../assets/images/project8.png';
import P3 from '../assets/images/project14.png';
import P4 from '../assets/images/project6.jpg';
import P5 from '../assets/images/project9.jpg';
import P6 from '../assets/images/project5.jpg';
import P7 from '../assets/images/project4.jpg';
import P8 from '../assets/images/project3.jpg';
import P10 from '../assets/images/project10.png';
import P11 from '../assets/images/project11.png';
import P12 from '../assets/images/project12.png';
import P13 from '../assets/images/project13.png';
import PHP from '../assets/images/lang1.png';
import JS from '../assets/images/lang2.png';
import Electron from '../assets/images/lang7.png';
import TS from '../assets/images/lang9.png';
import React from '../assets/images/lang10.png';
import PostgreSQL from '../assets/images/lang12.png';
import Tailwind from '../assets/images/lang13.svg';
import Node from '../assets/images/lang14.png';
import MySQL from '../assets/images/lang15.png';
import CSS from '../assets/images/lang3.png';
import Python from '../assets/images/lang4.png';
import PyTorch from '../assets/images/lang21.svg';
import NumPy from '../assets/images/lang18.png';
import Tensorflow from '../assets/images/lang20.svg';
import Pygame from '../assets/images/lang24.svg';
import Tkinter from '../assets/images/lang25.svg';
import Gymnasium from '../assets/images/lang26.svg';
import CLang from '../assets/images/lang29.png';
import Cpp from '../assets/images/lang28.png';
import Arduino from '../assets/images/lang27.png';
import STM32 from '../assets/images/lang30.png';
import ESP32 from '../assets/images/lang31.png';
export const projects = [
  {
    id: 1,
    title: 'Flappy Bird IA (PPO)',
    image: P1,
    github: 'https://github.com/Deniz95140/flappy-bird-ai-ppo',
    note: "Ce projet est une r\u00E9cr\u00E9ation de Flappy Bird avec entra\u00EEnement d'un agent PPO (Stable-Baselines3) sur 400 000 pas. Le d\u00E9p\u00F4t inclut le code, l'environnement de simulation et les checkpoints d'entra\u00EEnement.",
    stack: [Python, PyTorch, NumPy, Pygame, Gymnasium],
  },
  {
    id: 2,
    title: 'Reconnaissance de chiffres manuscrits (MNIST)',
    image: P2,
    github: 'https://github.com/Deniz95140/mnist-digit-recognizer',
    note: "Ce projet est un classifieur CNN pour chiffres manuscrits avec Keras/TensorFlow, accompagn\u00E9 d'une interface Tkinter pour dessiner et pr\u00E9dire en temps r\u00E9el.",
    stack: [Python, Tensorflow, NumPy, Tkinter],
  },
{
  id: 3,
  title: "Moteur d'alignement ADN (Needleman-Wunsch)",
  image: P3,
  github: 'https://github.com/Deniz95140/BioAlign',
  note: "Ce projet personnel impl\u00E9mente un moteur d'alignement de s\u00E9quences ADN en langage C (C99), bas\u00E9 sur l'algorithme de programmation dynamique de Needleman-Wunsch.",
  stack: [CLang],
},
{
  id: 4,
  title: 'Pac-Man Deep RL',
  image: P4,
  github: 'https://github.com/Deniz95140/pacman-deep-rl',
  // live: '',
  note: "Ce projet met en oeuvre du Deep Reinforcement Learning (avec Stable-Baselines3 et PyTorch) pour entra\u00EEner une IA \u00E0 jouer \u00E0 Pac-Man. L'agent apprend \u00E0 \u00E9viter les fant\u00F4mes et \u00E0 r\u00E9colter un maximum de pac-gommes.",
  stack: [Python, PyTorch, NumPy, Gymnasium],
},
/*  {
    id: 5,
    title: 'PokÃƒÂ©dex',
    image: P5,
    github: 'https://github.com/AhmedElSaa/Pokedexv1.3',
    live: 'https://ahmedelsaa.github.io/Pokedexv1.3/',
    note: "Ce projet est une application web qui permet de consulter les informations sur les PokÃƒÂ©mon. Il utilise l'API PokÃƒÂ©API pour rÃƒÂ©cupÃƒÂ©rer les donnÃƒÂ©es.",
    stack: [CSS, JS],
  }, 
  {
    id: 6,
    title: 'Netflix Clone',
    image: P6,
    github: 'https://github.com/AhmedElSaa/Netflix_v1',
    note: "Ce projet est un clone de la page d'identification de la plateforme de streaming Netflix. Il permet de se connecter ÃƒÂ  un compte Netflix fictif.",
    stack: [PHP, MySQL, CSS, JS],
  }, */
  {
    id: 7,
    title: 'DevConverTools', 
    image: P7,
    github: 'https://github.com/Deniz95140/devconvertools',
    live: 'https://devconvertools.vercel.app/fr',
    note: "Application web dÃ©veloppÃ©e avec Next.js et TypeScript proposant une boÃ®te Ã  outils pour dÃ©veloppeurs permettant de convertir et manipuler rapidement diffÃ©rents formats de donnÃ©es (JSON, YAML, CSV, XML, Base64, JWT, etc.) directement dans le navigateur. Interface simple avec drag & drop, copie des rÃ©sultats et utilitaires techniques (gÃ©nÃ©rateurs, encodeurs, validateurs).",
    stack: [TS, CSS],
  },/*
  {
    id: 8,
    title: 'Hotel Booki',
    image: P8,
    github: 'https://github.com/AhmedElSaa/Hotel_Booki',
    live: 'https://ahmedelsaa.github.io/Hotel_Booki/',
    note: 'Ce projet est un site web pour un comparateur de prix dÃ¢â‚¬â„¢hÃƒÂ´tels. Il permet de rechercher des hÃƒÂ´tels, de comparer les prix et de filtrer les rÃƒÂ©sultats selon diffÃƒÂ©rents critÃƒÂ¨res.',
    stack: [CSS, JS],
  },
  {
    id: 9,
    title: 'ToDo List',
    image: P10,
    github: 'https://github.com/AhmedElSaa/ToDoList',
    live: 'https://to-do-list-psi-six-77.vercel.app/',
    note: 'Ce projet est une application de gestion de tÃƒÂ¢ches. Il permet de crÃƒÂ©er, modifier et supprimer des tÃƒÂ¢ches, ainsi que de les marquer comme terminÃƒÂ©es.',
    stack: [React, Tailwind, JS],
  }, 
  {
    id: 10,
    title: 'Boxy Generator',
    image: P11,
    github: 'https://github.com/AhmedElSaa/Boxy',
    live: 'https://boxy-ruddy.vercel.app/',
    note: "Ce projet est un gÃƒÂ©nerateur de box-shadow. Il permet de crÃƒÂ©er des box-shadows personnalisÃƒÂ©s en ajustant les paramÃƒÂ¨tres tels que la couleur, la taille et l'angle.",
    stack: [React, Tailwind, TS],
  },*/
  {
    id: 11,
    title: 'Lucarne',
    image: P12,
    github: 'https://github.com/Deniz95140/Lucarne-App',
    note: "Application desktop construite avec Electron et TypeScript pour explorer et filtrer des donn\u00E9es football (recherche, tri, tags, popularit\u00E9).",
    stack: [Node, Electron, Tailwind, TS],
  },
  {
    id: 12,
    title: 'Supervision climatique STM32',
    image: P13,
    github: 'https://github.com/Deniz95140/Station-Surveillance-STM32',
    live :'https://wokwi.com/projects/457432148897690625',
    note: "Syst\u00E8me de mesure temp\u00E9rature/humidit\u00E9 sur carte STM32 Nucleo avec affichage LCD I2C. L'\u00E9tat environnemental est interpr\u00E9t\u00E9 automatiquement et remonte en direct avec alertes LEDs/buzzer.",
    stack: [Cpp, STM32],
  },
  {
    id: 13,
    title: "Syst\u00E8me de Radar Embarqu\u00E9",
    image: P11,
    github: 'https://github.com/Deniz95140/Systeme-Radar-Embarque-CPP',
    live : 'https://www.tinkercad.com/things/iMqW6xOeKnG-systeme-radar-embarque',
    note: "Prototype de surveillance de distance avec capteur ultrason HC-SR04, afficheur LCD, buzzer et LEDs d'\u00E9tat. Le syst\u00E8me d\u00E9tecte la proximit\u00E9 d'un obstacle et adapte les alertes visuelles/sonores en temps r\u00E9el.",
    stack: [Cpp, Arduino],
  },
  {
    id: 14,
    title: 'Station IoT Wi-Fi ESP32',
    image: P10,
    github: 'https://github.com/Deniz95140/Syst-me-de-Domotique-IoT-esp32',
    live: 'https://wokwi.com/projects/457433600796178433',
    note: "Station IoT basÃ©e sur ESP32 permettant de surveiller la tempÃ©rature et lâ€™humiditÃ© en temps rÃ©el et de contrÃ´ler des actionneurs (LED et buzzer). Le systÃ¨me propose un double mode de contrÃ´le : un dashboard web accessible via Wi-Fi et une interface console via liaison sÃ©rie (UART) pour le diagnostic et la maintenance, avec affichage des donnÃ©es sur Ã©cran LCD.",
    stack: [Cpp, ESP32],
  }
];



