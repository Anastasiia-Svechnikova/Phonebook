import { NavLink, Outlet } from "react-router-dom";
  import { Suspense } from "react";
import s from "./sharedLayout.module.css"
import { AiFillHome} from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';
import { UserMenu } from "components/User-menu";



export const SharedLayout = () => {

    return (
        <>
            <UserMenu/>
            <div className={s.layout}>              
            <header className={s.aside}> 
                <nav>
                <ul className={s.menu}>
                    <li>
                        <NavLink end to="/" className={({ isActive }) => isActive? s.active: s.inactive}><AiFillHome className={s.icon}  /></NavLink>
                    </li>
                    <li>
                        <NavLink to="/contacts" className={({ isActive }) => isActive? s.active: s.inactive}><TiContacts className={s.icon}/></NavLink>
                    </li>
                </ul>
            </nav>
            </header>
                <div className={s.main}>
                    <main>
                        <Suspense fallback='Wait a moment....'>
                            <Outlet/>
                        </Suspense>
                    </main>
            </div>           
        </div>
        </>
        
    )
}
