import Link  from "next/link";
import style from './Navbar.module.css';


function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className= {style["navbar-container"]}>
        <Link href="/">
          <a className={style["navbar-logo"]}>
            <img src="/images/gr8hub.png" alt="gr8hub"/>
          </a> 
        </Link>
        <ul>
            <li className={style["nav-item"]}>
              <Link href="/mentor-werden">
                <a>Mentor werden</a>
              </Link>
            </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
