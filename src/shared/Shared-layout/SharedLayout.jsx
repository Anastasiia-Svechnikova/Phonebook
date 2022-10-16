import { NavLink, Outlet } from "react-router-dom";
  import { Suspense } from "react";
import s from "./sharedLayout.module.css"
import { AiFillHome} from 'react-icons/ai';
import { TiContacts } from 'react-icons/ti';
import { BiExit } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { logoutUserThunk } from "store/auth/thunk.auth";



export const SharedLayout = () => {
    const dispatch = useDispatch();
    
    const handleExit = () => {
        dispatch(logoutUserThunk())       
    }

    return (
        <>
            <header className={s.bar}>
                <span className={s.logo}>Phonebook</span>
                    <button  type="button" onClick={handleExit} className={s.exit}><BiExit className={ s.exitIcon} />  Exit</button>
            </header>
        <div className={s.layout}>
            <div className={s.aside}> 
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
            </div>
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
