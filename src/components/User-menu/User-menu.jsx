import { useDispatch, useSelector } from "react-redux";
import { logoutUserThunk } from 'store/auth/thunk.auth';
import s from './user-menu.module.css';
import { BiExit } from 'react-icons/bi';
import { selectUser } from "store/selectors";


export const UserMenu = () => {
    const dispatch = useDispatch();
    const user = useSelector(selectUser)
    const email = user ? user.email : ''
    
    const handleExit = () => {
        dispatch(logoutUserThunk())       
    }
    return (
        <div className={s.bar}>
            <span className={s.logo}>Phonebook</span>
            <span className={s.email}>{email}</span>
                <button  type="button" onClick={handleExit} className={s.exit}><BiExit className={ s.exitIcon} />  Exit</button>
        </div>
    )
}