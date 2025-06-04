import { useState } from 'react';
import styles from './Navbar.module.css';
import StarBorder from '../StarBorder/StarBorder';
import Logo from '../../assets/brand.svg';
interface MenuItem {
  id: string;
  label: string;
  description: string;
}

const menuItems: MenuItem[] = [
  { id: 'about', label: 'About us', description: 'Learn more about our company and mission.' },
  { id: 'services', label: 'Services', description: 'Discover the services we offer to our clients.' },
  { id: 'use-cases', label: 'Use Cases', description: 'See how our product is used across industries.' },
  { id: 'pricing', label: 'Pricing', description: 'Check out our affordable pricing plans.' },
  { id: 'blog', label: 'Blog', description: 'Read the latest news and articles on our blog.' }
];

const Navbar = () => {
  const [activeId, setActiveId] = useState<string | null>(null);

  const handleClick = (id: string) => {
    setActiveId(prev => (prev === id ? null : id));
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.container}>
        <img src={Logo} alt="logo" />
        <ul className={styles.menu}>
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={activeId === item.id ? styles.activeBorder : ''}
              onClick={() => handleClick(item.id)}
            >
              <StarBorder as="div" className="custom-class" color="cyan" speed="5s">
                <a href={`#${item.id}`}>{item.label}</a>
              </StarBorder>

              {activeId === item.id && (
                <p className={styles.description}>{item.description}</p>
              )}
            </li>
          ))}
        </ul>
        <button className={styles.quoteButton}>Request a quote</button>
      </div>
    </nav>
  );
};

export default Navbar;
