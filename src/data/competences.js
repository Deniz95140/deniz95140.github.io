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
import Git from '../assets/images/lang35.png';
import Bash from '../assets/images/lang34.png';
import Linux from '../assets/images/lang33.png';
import RaspberryPico from '../assets/images/lang32.png';
import ESP32 from '../assets/images/lang31.png';
import STM32 from '../assets/images/lang30.png';
import Arduino from '../assets/images/lang27.png';
import Cpp from '../assets/images/lang28.png';
import CLang from '../assets/images/lang29.png';
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
// === Vue groupÃƒÂ©e pour l'affichage par catÃƒÂ©gories ===
export const competenceGroups = [
  {
    title: 'Syst\u00E8mes embarqu\u00E9s',
    items: [
      { id: 'se1', name: 'Arduino', img: Arduino },
      { id: 'se2', name: 'STM32', img: STM32 },
      { id: 'se3', name: 'ESP32', img: ESP32 },
      { id: 'se4', name: 'Raspberry Pi Pico', img: RaspberryPico },
    ],
  },
  {
    title: 'Langages de programmation',
    items: [
      { id: 'lp1', name: 'C', img: CLang },
      { id: 'lp2', name: 'C++', img: Cpp },
      { id: 'lp3', name: 'Python', img: Python },
      { id: 'lp4', name: 'JavaScript', img: JS },
    ],
  },
  {
    title: 'Outils informatiques & environnement',
    items: [
      { id: 'oi1', name: 'Linux', img: Linux },
      { id: 'oi2', name: 'Bash', img: Bash },
      { id: 'oi3', name: 'Git', img: Git },
      { id: 'oi4', name: 'TensorFlow', img: Tensorflow },
      { id: 'oi5', name: 'PyTorch', img: PyTorch },
    ],
  },
];
