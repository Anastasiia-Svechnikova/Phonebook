import s from './authorization.module.css';
import { Button } from "shared/Button"
import {Link} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk, registerUserThunk } from "store/auth/thunk.auth";
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive'
import { WelcomeTitle } from 'components/WelcomeTitle';



export const Authorization = ({ isLogin, isRegister }) => {
    const initialUserState = isLogin? { email: '', password: '' } : { name: '', email: '', password: '' }

    const [user, setUser] = useState(initialUserState);
    const [passwordBtn, setPasswordBtn] = useState('password');
    const dispatch = useDispatch();
    const content = isLogin ?
        {
            navigatePath: '/register',
            passwordPlaceholder: 'Password',
            emailPlaceholder: 'E-mail'
        } :
        {
            navigatePath: '/login',
            passwordPlaceholder: "Min 5 symbols, 1 Num, 1 Upper",
            emailPlaceholder: 'example@mail.com'
        }
    
    const isMobile= useMediaQuery({
    query: '(max-width: 767px)'
    })
    
    const handleInputChange = (e) => {
        setUser(prevState => { return { ...prevState,[e.target.name]:e.target.value } })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        if (isLogin) {         
            dispatch(loginUserThunk(user)).unwrap().then(()=> toast.success('Welcome!'))
        } else {
              dispatch(registerUserThunk(user)).unwrap().then(()=> toast.success('Welcome!'))
        }
    }
    const handlePasswordBtn = () => {
        setPasswordBtn(prevState=>  prevState === 'password'? 'text': 'password')
    }



    return (
        <div className={s.wrapper}>
           {!isMobile && <div className={s.innerLeft}>
                <WelcomeTitle/>
            </div>}
            <div className={s.innerRight}>
                <form onSubmit={(e) => handleFormSubmit(e)} className={s.form}>
                    {isMobile && <WelcomeTitle />}
                    {isRegister && <label>
                        <input className={s.input}
                            onChange={(e)=> handleInputChange(e)}
                            value={user.name}
                            type="name"
                            name="name"
                            placeholder="Name"
                            
                        required/>
                    </label>}

                    <label>
                        <input className={s.input}
                            onChange={(e)=> handleInputChange(e)}
                            value={user.email}
                            type="mail"
                            name="email"
                            placeholder={content.emailPlaceholder}
                            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                            title="example@mail.com"
                        required/>
                    </label>
                    <label className={s.password}>

                        <input className={s.input}
                            onChange={(e)=> handleInputChange(e)}
                              value={user.password}
                            type={passwordBtn}
                            name="password"
                            placeholder={content.passwordPlaceholder}
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters"
                            required />
                            <button onClick={handlePasswordBtn} className={s.eyeBtn} type="button">{passwordBtn === 'password'? <AiFillEyeInvisible className={s.eye }/>:< AiFillEye className={s.eye }/>} </button>
                    </label>
                    <Button className={s.btn} width={'100%'} height={40} type="submit" primary>{isLogin ? 'Log in': 'Register' }</Button>
                    <Link className={s.link} to={content.navigatePath}>{isLogin ? "Haven't got an account yet?": 'Already have an account?' } </Link>
                </form>
            </div>
        </div>
    )
}