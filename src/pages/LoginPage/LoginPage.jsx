import { Button } from "shared/Button"
import s from './loginPage.module.css';
import {Link} from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUserThunk } from "store/auth/thunk.auth";
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';
import { toast} from 'react-toastify';

export const LoginPage = () => {
    const [user, setUser] = useState({ email: '', password: '' });
    const [passwordBtn, setPasswordBtn] = useState('password');
    const dispatch = useDispatch();


    const handleInputChange = (e) => {
        setUser(prevState => { return { ...prevState,[e.target.name]:e.target.value } })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserThunk(user)).unwrap().then(()=> toast.success('Welcome!'))
    }
    const handlePasswordBtn = () => {
        setPasswordBtn(prevState=>  prevState === 'password'? 'text': 'password')
    }



    return (
        <div className={s.wrapper}>
            <div className={s.innerLeft}>
                <h1 className={s.title}>Welcome to Your <span className={s.logo}>PhoneBook</span></h1>
            </div>
            <div className={s.innerRight}>
                <form onSubmit={(e)=>handleFormSubmit(e)} className={s.form}>
                    <label>

                        <input className={s.input}
                            onChange={(e)=> handleInputChange(e)}
                            value={user.email}
                            type="mail"
                            name="email"
                            placeholder="E-mail"
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
                            placeholder="Password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters"
                            required />
                            <button onClick={handlePasswordBtn} className={s.eyeBtn} type="button">{passwordBtn === 'password'? <AiFillEyeInvisible className={s.eye }/>:< AiFillEye className={s.eye }/>} </button>
                    </label>
                    <Button className={s.btn} width={'100%'} height={40} type="submit" primary>Log In</Button>
                    <Link className={s.link} to='/register'>Haven't got an account yet?</Link>
                </form>
            </div>
        </div>
    )
}