const Footer = () => {
  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className="footer-container">
      <div className="footer-contactUs">
        <h4 className="footer-title">¡Contáctanos!</h4>
      </div>
      <p className="footer-item">4205-6534</p>
      <div className="footer-links">
        <p className="footer-link">Términos y condiciones</p>
        <p className="footer-link">Envíanos un email</p>
      </div>
      <div className="footer-toTop">
        <p onClick={scrollUp}>Ir arriba</p>
      </div>
    </div>
  );
};

export default Footer;
