import Link from 'next/link';
import styles from '../styles/mainMenu.module.scss';

const MainMenu = () => (
  <aside className={styles.menu}>
    <h1 className="logo">
      <Link href="/">
        <a className="logo-link">ProjApp</a>
      </Link>
    </h1>
    <ul className={styles.nav}>
      <li className={styles.navItem}>
        <Link href="/daily-planner">
          <a>Daily Planner</a>
        </Link>
      </li>
      <li className={`${styles.navItem} ${styles.navItemActive}`}>
        <Link href="/">
          <a>Projects</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/scheduler">
          <a>Scheduler</a>
        </Link>
      </li>
      <li className={styles.navItem}>
        <Link href="/reports">
          <a>Reports</a>
        </Link>
      </li>
    </ul>
    <Link href="/settings">
      <a href="#" className={styles.settings}>
        <i className="fas fa-cog"></i>
      </a>
    </Link>
  </aside>
);

export default MainMenu;
