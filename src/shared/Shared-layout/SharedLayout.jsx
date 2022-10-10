import { NavLink, Outlet } from "react-router-dom";
import s from "./sharedLayout.module.css"
import { AiFillHome} from 'react-icons/ai';
import { TiContacts} from 'react-icons/ti';


export const SharedLayout = () => {
    return (
        <>
            <header className={s.bar}>
                <span className={s.logo}>Phonebook</span>
                <ul className={s.authList}>
                    <li>Log in</li>
                    <li>Log out</li>
                </ul>
            </header>
        <div className={s.layout}>
            <div className={s.aside}> 
                <nav>
                <ul className={s.menu}>
                    <li>
                        <NavLink end to="/" className={({ isActive }) => isActive? s.active: s.disactive}><AiFillHome className={s.icon}  /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={({ isActive }) => isActive? s.active: s.disactive}><TiContacts className={s.icon}/></NavLink>
                    </li>
                </ul>
            </nav>
            </div>
                <div className={s.main}>
                    <main>

                <Outlet/>
                    </main>
            </div>           
        </div>
        </>
        
    )
}
