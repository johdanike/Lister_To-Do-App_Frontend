import logo from './Lister__2_-removebg-preview.png'

interface NavBarProps {
    show?: boolean
}

export const NavBar = ({show}: NavBarProps) => {
    return <div className={show ? "SideNav active" : "SideNav"}>
        <img src={logo} alt="Logo" className="logo"/>

        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">Today</a></li>
            <li><a href="/">All</a></li>
            <li><a href="/">MyList</a></li>
            <li><a href="/">Completed</a></li>
            <li><a href="/">Trash</a></li>
        </ul>
    </div>
}