import { Button } from "shared/Button"
import s from './registerPage.module.css';
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; 
import { useState } from "react";
// import API from "services/api/contacts.api";
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible} from 'react-icons/ai';
import { useDispatch } from "react-redux";
import { registerUserThunk } from "store/auth/thunk.auth";



export const RegisterPage = () => {
    const [user, setUser] = useState({ name: '', email: '', password: '' });
    const [passwordBtn, setPasswordBtn] = useState('password');
    const dispatch = useDispatch();
    // const navigate = useNavigate()


    const handleInputChange = (e) => {
        setUser(prevState => { return { ...prevState,[e.target.name]:e.target.value } })
    }
    const handleFormSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserThunk(user)).unwrap().then(console.log)
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
                            value={user.name}
                            type="name"
                            name="name"
                            placeholder="Name"
                            
                        required/>
                    </label>

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
                    <Button width={252} height={40} type="submit" secondary> Register</Button>
                     <Link className={s.link} to='/login'>Already have an account?</Link>
                </form>
            </div>
        </div>
    )
}