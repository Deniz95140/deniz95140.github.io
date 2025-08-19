import PHP from '../assets/images/lang1.png';
import JS from '../assets/images/lang2.png';
import SCSS from '../assets/images/lang17.png';
import Python from '../assets/images/lang4.png';
import Java from '../assets/images/lang5.png';
import Redis from '../assets/images/lang6.png';
import Electron from '../assets/images/lang7.png';
import jQuery from '../assets/images/lang8.png';
import TS from '../assets/images/lang9.png';
import React from '../assets/images/lang10.png';
import PostgreSQL from '../assets/images/lang12.png';
import Tailwind from '../assets/images/lang13.svg';
import Node from '../assets/images/lang14.png';
import MySQL from '../assets/images/lang15.png';
import Mongo from '../assets/images/lang16.png';
import NumPy from '../assets/images/lang18.png';
import PowerBI from '../assets/images/lang19.png';
import Tensorflow from '../assets/images/lang20.svg';
import PyTorch from '../assets/images/lang21.svg';
import ScikitLearn from '../assets/images/lang22.svg';
import Pandas from '../assets/images/lang23.png';
import Pygame from '../assets/images/lang24.svg';
import Tkinter from '../assets/images/lang25.svg';
import Gymnasium from '../assets/images/lang26.svg';
export const competences = [
  { id: 1, name: 'PHP', img: PHP },
  { id: 2, name: 'JavaScript', img: JS },
  { id: 3, name: 'SCSS', img: SCSS },
  { id: 4, name: 'Python', img: Python },
  { id: 5, name: 'Java', img: Java },
  { id: 6, name: 'Redis', img: Redis },
  { id: 7, name: 'ElectronJS', img: Electron },
  { id: 8, name: 'jQuery', img: jQuery },
  { id: 9, name: 'TypeScript', img: TS },
  { id: 10, name: 'React', img: React },
  { id: 11, name: 'PostgreSQL', img: PostgreSQL },
  { id: 12, name: 'Tailwind', img: Tailwind },
  { id: 13, name: 'Node.js', img: Node },
  { id: 14, name: 'MySQL', img: MySQL },
  { id: 15, name: 'MongoDB', img: Mongo },
  { id: 16, name: 'NumPy', img: NumPy },
  { id: 17, name: 'PowerBI', img: PowerBI },
  { id: 18, name: 'Tensorflow', img: Tensorflow },
  { id: 19, name: 'PyTorch', img: PyTorch },
  { id: 20, name: 'Scikit-Learn', img: ScikitLearn },
  { id: 21, name: 'Pandas', img: Pandas },
  { id: 22, name: 'Pygame', img: Pygame },
  { id: 23, name: 'Tkinter', img: Tkinter },
  { id: 22, name: 'Gymnasium', img: Gymnasium },
];
// === Vue groupée pour l'affichage par catégories ===
export const competenceGroups = [
  {
    title: 'IA & Data',
    items: [
      { id: 'ia1', name: 'Python', img: Python },
      { id: 'ia2', name: 'PyTorch', img: PyTorch },
      { id: 'ia3', name: 'TensorFlow', img: Tensorflow },
      { id: 'ia4', name: 'Scikit-Learn', img: ScikitLearn },
      { id: 'ia5', name: 'NumPy', img: NumPy },
      { id: 'ia6', name: 'Pandas', img: Pandas },
      { id: 'ia7', name: 'Gymnasium', img: Gymnasium },
      { id: 'ia8', name: 'Pygame', img: Pygame },
      { id: 'ia9', name: 'Tkinter', img: Tkinter },
    ],
  },
  {
    title: 'Web Front-End',
    items: [
      { id: 'fe1', name: 'JavaScript', img: JS },
      { id: 'fe2', name: 'TypeScript', img: TS },
      { id: 'fe3', name: 'React', img: React },
      { id: 'fe4', name: 'SCSS', img: SCSS },
      { id: 'fe5', name: 'Tailwind', img: Tailwind },
      { id: 'fe6', name: 'jQuery', img: jQuery },
    ],
  },
  {
    title: 'Back-End & Bases de données',
    items: [
      { id: 'be1', name: 'Node.js', img: Node },
      { id: 'be2', name: 'PHP', img: PHP },
      { id: 'be3', name: 'MySQL', img: MySQL },
      { id: 'be4', name: 'PostgreSQL', img: PostgreSQL },
      { id: 'be5', name: 'MongoDB', img: Mongo },
      { id: 'be6', name: 'Redis', img: Redis },
    ],
  },
  {
    title: 'Outils & Data Viz',
    items: [
      { id: 'tool1', name: 'PowerBI', img: PowerBI },
      { id: 'tool2', name: 'ElectronJS', img: Electron },
    ],
  },
  {
    title: 'Autres',
    items: [
      { id: 'oth1', name: 'Java', img: Java },
    ],
  },
];
