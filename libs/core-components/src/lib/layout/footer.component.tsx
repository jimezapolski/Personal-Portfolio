import Link from 'next/link';

export const Footer = () => {
  return (
    <footer className="footer-area">
      <div className="container">
        <div className="footer-content text-center">
          <Link href="/" className="logo">
            <img src="/assets/logo/logo.png" alt="Logo" />
          </Link>
          <ul className="footer-menu">
            <li>
              <Link href="/">Inicio</Link>
            </li>
            <li>
              <Link href="/bio">Sobre Mí</Link>
            </li>
            <li>
              <Link href="/portfolio">Proyectos</Link>
            </li>
            <li>
              <Link href="/contact">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
