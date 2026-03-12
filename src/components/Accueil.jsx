const Accueil = () => {
  return (
    <header id="accueil">
      <div className="container header__container">
        <div className="header__left">
          <div className="header__left_div">
            <h1><span>YUKER</span> <span>Denis-Can</span></h1>
            <p>
              Je suis Deniz YUKER, passionné de Systèmes Embarqués et d'IoT. Actuellement en route vers un Master spécialisé, je me concentre sur le développement bas niveau et la robotique. À l’aise avec les environnements STM32 et ESP32, j’aime développer et créer des systèmes embarqués capables d’interagir concrètement avec leur environnement, en maîtrisant le code jusqu’au matériel.
              De mon temps libre, je pratique de la musculation pour m'entretenir, de la randonnée et j'aime voyager pour découvrir de nouvelles cultures.
            </p>
          </div>
        </div>
        <div className="header__right">
          <div className="header__right-bg"></div>
        </div>
      </div>
    </header>
  );
};

export default Accueil;