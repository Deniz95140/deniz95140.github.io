const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="container contact__container">
          <div className="contact__left">
            <h2>CONTACT</h2>
            <p>
              Restons en contact ! Retrouvez-moi sur LinkedIn, GitHub, ou contactez-moi par email et
              par téléphone.
            </p>
            <ul className="contact__socials">
              <li>
                <a href="https://github.com/Deniz95140" target="_blank" rel="noreferrer">
                  <i className="uil uil-github"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/denis-can-yuker-83a09b344/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="uil uil-linkedin"></i>
                </a>
              </li>
              <li>
                <a href="mailto:denizyukerpro@gmail.com" target="_blank" rel="noreferrer">
                  <i className="uil uil-post-stamp"></i>
                </a>
              </li>
              <li>
                <a href="tel:+33699629979" target="_blank" rel="noreferrer">
                  <i className="uil uil-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <footer>
        <small> Denis-Can YUKER © 2025 Tous droits réservés.</small>
      </footer>
    </>
  );
};

export default Contact;
