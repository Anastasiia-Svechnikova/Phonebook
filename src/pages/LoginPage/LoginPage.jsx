import { Button } from "shared/Button"
import s from './loginPage.module.css';
import {Link} from "react-router-dom";

export const LoginPage = ()=>{
    return (
        <div className={s.wrapper}>
            <div className={s.innerLeft}>
                <h1 className={s.title}>Welcome to Your <span className={s.logo}>PhoneBook</span></h1>
            </div>
            <div className={s.innerRight}>
                <form className={s.form}>
                    <label>

                        <input className={s.input}
                            type="mail"
                            name="mail"
                            placeholder="E-mail"
                            pattern="[a-z0-9]+@[a-z]+\.[a-z]{2,3}"
                            title="invalid password"
                        required/>
                    </label>
                    <label>

                        <input className={s.input}
                            type="text"
                            name="password"
                            placeholder="Password"
                            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{7,}"
                            title="Must contain at least one number and one uppercase and lowercase letter, and at least 5 or more characters"
                            required />
                            
                    </label>
                    <Button width={252} height={40} type="submit" secondary>Log In</Button>
                    <Link className={s.link} to='/register'>Haven't got an account yet?</Link>
                </form>
            </div>
        </div>
    )
}