const Accueil = () => {
  return (
    <header id="accueil">
      <div className="container header__container">
        <div className="header__left">
          <div className="header__left_div">
            <h1><span>YUKER</span> <span>Denis-Can</span></h1>
            <p>
              Je suis Deniz YUKER, j'ai 21 ans et je me prépare à intégrer un master en intelligence artificielle. Passionné par le machine learning et la data, je consacre mon temps à faire des projets en python et à l’expérimentation de ces modèles (TensorFlow / PyTorch).
              De mon temps libre, je pratique de la musculation pour m'entretenir, de la randonnée et j'aime voyager pour découvrir de nouvelles cultures. J'ai été un ancien membre d'un club de cybersécurité nommée CyberV.
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