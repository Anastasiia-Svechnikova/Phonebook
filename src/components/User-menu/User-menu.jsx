import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from 'store/auth/thunk.auth';
import s from './user-menu.module.css';
import { BiExit } from 'react-icons/bi';
import { selectUser } from "store/selectors";
import { Link } from "react-router-dom";
import { useMediaQuery } from 'react-responsive'


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const userName = user && user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()
    const isMobile= useMediaQuery({
    query: '(max-width: 600px)'
     })
    const handleExit = () => {
        dispatch(logoutUserThunk())       
    }
    return (
        <header className={s.bar}>
            <Link to='/' className={s.logo}>{isMobile ? 'PB': "Phonebook"}</Link>
            <p className={s.user}>Welcome <span className={s.name}>  {userName}</span></p>
                <button  type="button" onClick={handleExit} className={s.exit}><BiExit className={ s.exitIcon} />  Exit</button>
        </header>
    )
}