import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from 'store/auth/thunk.auth';
import s from './user-menu.module.css';
import { BiExit } from 'react-icons/bi';
import { selectUser } from "store/selectors";
import { Link } from "react-router-dom";



export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    // const email = user ? user.email : ''
    const userName = user && user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()

    const handleExit = () => {
        dispatch(logoutUserThunk())       
    }
    return (
        <header className={s.bar}>
            <Link to='/' className={s.logo}>Phonebook</Link>
            <p className={s.user}>Welcome,<span className={s.name}>  {userName}</span></p>
            {/* <span className={s.email}>{email}</span> */}
                <button  type="button" onClick={handleExit} className={s.exit}><BiExit className={ s.exitIcon} />  Exit</button>
        </header>
    )
}