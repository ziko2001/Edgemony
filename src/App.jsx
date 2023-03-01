import logo from './logo.png';
import './App.css';

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer-content">
        <div className="Footer-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="footer__text">
          <h1>Questo è un buco nero</h1>
        </div>
      </div>
      <div className="footer__bottom">
        <p>Footer della page</p>
      </div>
    </footer>
  );
};

export default Footer;
