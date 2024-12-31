
import './App.css';
import {GiHamburgerMenu } from "react-icons/gi";
import {NavBar} from "./components/NavBar.tsx";
import {useState} from "react";

export const App = () => {
    const [showNav, setShowNav] = useState(false)
    return <div className="App">
        <header><GiHamburgerMenu onClick={() => setShowNav(!showNav)}
        />
        </header>

        <NavBar show={showNav}/>
    </div>

}