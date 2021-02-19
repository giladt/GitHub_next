import Link  from "next/link";
import style from './Navbar.module.css';
import { Image } from "@chakra-ui/react"


function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className= {style["navbar-container"]}>
        <Link href="/">
          <a className={style["navbar-logo"]}> 
           <Image src="/images/title.png" alt="gr8hub" mb={8} />
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
