import Link from 'next/link';

const MainMenu = () => (
  <aside className="mainMenu">
    <h1 className="logo">
      <Link href="/">
        <a className="logo-link">ProjApp</a>
      </Link>
    </h1>
    <ul className="mainMenu-nav">
      <li className="mainMenu-navItem">
        <Link href="/daily-planner">
          <a>Daily Planner</a>
        </Link>
      </li>
      <li className="mainMenu-navItem mainMenu-navItem-active">
        <Link href="/">
          <a>Projects</a>
        </Link>
      </li>
      <li className="mainMenu-navItem">
        <Link href="/scheduler">
          <a>Scheduler</a>
        </Link>
      </li>
      <li className="mainMenu-navItem">
        <Link href="/reports">
          <a>Reports</a>
        </Link>
      </li>
    </ul>
    <Link href="/settings">
      <a href="#" className="mainMenu-settings">
        <i className="fas fa-cog"></i>
      </a>
    </Link>
  </aside>
);

export default MainMenu;
