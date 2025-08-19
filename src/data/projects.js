import P1 from '../assets/images/project1.jpg';
import P2 from '../assets/images/project8.png';
import P3 from '../assets/images/project2.jpg';
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
export const projects = [
  {
    id: 1,
    title: 'Flappy Bird IA (PPO)',
    image: P1,
    github: 'https://github.com/Deniz95140/flappy-bird-ai-ppo',
    note: "Ce projet est une recréation du jeu Flappy Bird avec Pygame et Gymnasium. Il intègre un agent PPO, entraîné pendant 400 000 pas avec Stable-Baselines3. Le code source ainsi que les checkpoints d’entraînement sont fournis.",
    stack: [Python, PyTorch, NumPy, Pygame, Gymnasium],
  },
  {
    id: 2,
    title: 'Reconnaissance de chiffres manuscrits (MNIST)',
    image: P2,
    github: 'https://github.com/Deniz95140/mnist-digit-recognizer',
    note: 'Ce projet est un classifieur de chiffres manuscrits basé sur un CNN développé avec Keras (99 % d’exactitude). Il est accompagné d’une interface Tkinter permettant à l’utilisateur de dessiner un chiffre que le modèle prédit instantanément. Le notebook d’entraînement ainsi que le code de l’application sont inclus.',
    stack: [Python, Tensorflow, NumPy, Tkinter],
  },
{
  id: 3,
  title: 'CartPole DQN',
  image: P3,
  github: 'https://github.com/Deniz95140/cartpole-dqn-pytorch',
  note: 'Ce projet est une implémentation de l’algorithme Deep Q-Learning (DQN) avec PyTorch. Il permet à une IA d’apprendre à résoudre l’environnement CartPole-v1 en maintenant une barre en équilibre sur un chariot.',
  stack: [Python, PyTorch, NumPy, Gymnasium],
},
{
  id: 4,
  title: 'Pac-Man Deep RL',
  image: P4,
  github: 'https://github.com/Deniz95140/pacman-deep-rl',
  // live: '',
  note: 'Ce projet met en œuvre du Deep Reinforcement Learning (avec Stable-Baselines3 et PyTorch) pour entraîner une IA à jouer à Pac-Man. L’agent apprend à éviter les fantômes et à récolter un maximum de pac-gommes.',
  stack: [Python, PyTorch, NumPy, Gymnasium],
},
/*  {
    id: 5,
    title: 'Pokédex',
    image: P5,
    github: 'https://github.com/AhmedElSaa/Pokedexv1.3',
    live: 'https://ahmedelsaa.github.io/Pokedexv1.3/',
    note: "Ce projet est une application web qui permet de consulter les informations sur les Pokémon. Il utilise l'API PokéAPI pour récupérer les données.",
    stack: [CSS, JS],
  }, 
  {
    id: 6,
    title: 'Netflix Clone',
    image: P6,
    github: 'https://github.com/AhmedElSaa/Netflix_v1',
    note: "Ce projet est un clone de la page d'identification de la plateforme de streaming Netflix. Il permet de se connecter à un compte Netflix fictif.",
    stack: [PHP, MySQL, CSS, JS],
  }, */
  {
    id: 7,
    title: 'PerformVision',
    image: P7,
    github: 'https://github.com/AhmedElSaa/PerformVision',
    note: "Ce projet est un site web pour une entreprise fictive de formations en ligne. Il permet de consulter les formations disponibles, de s'inscrire et de gérer son compte.",
    stack: [PHP, PostgreSQL, CSS, JS],
  },/*
  {
    id: 8,
    title: 'Hotel Booki',
    image: P8,
    github: 'https://github.com/AhmedElSaa/Hotel_Booki',
    live: 'https://ahmedelsaa.github.io/Hotel_Booki/',
    note: 'Ce projet est un site web pour un comparateur de prix d’hôtels. Il permet de rechercher des hôtels, de comparer les prix et de filtrer les résultats selon différents critères.',
    stack: [CSS, JS],
  },
  {
    id: 9,
    title: 'ToDo List',
    image: P10,
    github: 'https://github.com/AhmedElSaa/ToDoList',
    live: 'https://to-do-list-psi-six-77.vercel.app/',
    note: 'Ce projet est une application de gestion de tâches. Il permet de créer, modifier et supprimer des tâches, ainsi que de les marquer comme terminées.',
    stack: [React, Tailwind, JS],
  }, 
  {
    id: 10,
    title: 'Boxy Generator',
    image: P11,
    github: 'https://github.com/AhmedElSaa/Boxy',
    live: 'https://boxy-ruddy.vercel.app/',
    note: "Ce projet est un génerateur de box-shadow. Il permet de créer des box-shadows personnalisés en ajustant les paramètres tels que la couleur, la taille et l'angle.",
    stack: [React, Tailwind, TS],
  },*/
  {
    id: 11,
    title: 'Lucarne',
    image: P12,
    github: 'https://github.com/AhmedElSaa/Lucarne',
    note: "Ce projet est un génerateur de box-shadow. Il permet de créer des box-shadows personnalisés en ajustant les paramètres tels que la couleur, la taille et l'angle.",
    stack: [Node, Electron, Tailwind, TS],
  },/*
  {
    id: 12,
    title: 'Chatbot',
    image: P13,
    github: 'https://github.com/AhmedElSaa/Chatbot',
    note: 'Ce projet est un chatbot développé en Python. Il utilise la bibliothèque NLTK pour le traitement du langage naturel et permet de répondre à des questions sur divers sujets.',
    stack: [Python],
  }, */
];
