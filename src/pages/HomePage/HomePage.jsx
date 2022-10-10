import { Section } from "shared/Section";
import s from './homePage.module.css';

export const HomePage = () => {
    return (
        <Section>
            <h1 className={s.title}>Welcome to Your <span className={s.logo}>PhoneBook</span></h1>
        </Section>
    )
}