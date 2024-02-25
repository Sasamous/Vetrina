import { createSignal, createEffect } from 'solid-js';
import { A, useLocation } from '@solidjs/router';
import Logo from '../Logo/Logo';
import './Navbar.css';

const Navbar = () => {
  const [currentPage, setCurrentPage] = createSignal('');
  const [showMenu, setShowMenu] = createSignal(false);
  const location = useLocation();

  const [windowWidth, setWindowWidth] = createSignal(window.innerWidth);

  createEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  createEffect(() => {
    const currentPath = location.pathname;
    setCurrentPage(currentPath);
  });

  return (
    <nav class="navbar">
      <div style="flex: 1" class="hide-on-mobile"><Logo /></div>
      <button class="hamburger-menu" onClick={() => setShowMenu(!showMenu())}>☰</button>
      <ul class={"navbar-nav" + (showMenu() || windowWidth() >= 768 ? ' show-menu' : '')}>
        <li class={`nav-item ${currentPage() === '/' ? 'active' : ''}`}>
          <A href="/" onClick={() => setCurrentPage('/')}>Home</A>
        </li>
        <li class={`nav-item ${currentPage() === '/chi-siamo' ? 'active' : ''}`}>
          <A href="/chi-siamo" onClick={() => setCurrentPage('/chi-siamo')}>Chi Siamo</A>
        </li>
        <li class={`nav-item ${currentPage() === '/servizi' ? 'active' : ''}`}>
          <A href="/servizi" onClick={() => setCurrentPage('/servizi')}>Servizi</A>
        </li>
        <li class={`nav-item ${currentPage() === '/contatti' ? 'active' : ''}`}>
          <A href="/contatti" onClick={() => setCurrentPage('/contatti')}>Contatti</A>
        </li>
      </ul>
      <div style="flex: 1"></div>
    </nav>
  );
}

export default Navbar;