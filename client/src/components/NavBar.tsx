import { Gamepad2, Github } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useScrollToSection } from '../hooks/useScrollToSection';
import { NavLink } from './NavLink';

export function NavBar() {
  const scrollToSection = useScrollToSection();

  return (
    <nav className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0">
      <Link
        to="/"
        className="flex items-center gap-2 text-2xl font-bold hover:text-purple-300 transition-colors duration-200"
      >
        <Gamepad2 className="w-8 h-8" />
        <span>Vibatar</span>
      </Link>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <NavLink onClick={() => scrollToSection('features')}>Features</NavLink>
        <NavLink onClick={() => scrollToSection('developers')}>Developers</NavLink>
        <Link to="/games" className="hover:text-purple-300 transition-colors duration-200">
          Games
        </Link>
        <a
          href="https://github.com/vibatar"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 hover:text-purple-300 transition-colors duration-200"
        >
          <Github className="w-4 h-4" />
          GitHub
        </a>
      </div>
    </nav>
  );
}
