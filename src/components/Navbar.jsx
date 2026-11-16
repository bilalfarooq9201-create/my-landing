import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const links = [
  { href: '#features', label: 'Features' },
  { href: '#contact', label: 'Contact' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Primary">
        <a href="#top" className="navbar__brand">MyBrand</a>

        <button
          className="navbar__toggle"
          aria-expanded={open}
          aria-controls="nav-menu"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>

        <ul id="nav-menu" className={`navbar__links ${open ? 'is-open' : ''}`}>
          <li><ThemeToggle /></li>
          {links.map((l) => (
            
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}

          <li>
            <a className="btn" href="#contact">Get started</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}