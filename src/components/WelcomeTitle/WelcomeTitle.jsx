import s from './WelcomeTitle.module.css';

export const WelcomeTitle = () => {
    return (
         <h1 className={s.title}>Welcome to Your <span className={s.logo}>PhoneBook</span></h1>
    )
}