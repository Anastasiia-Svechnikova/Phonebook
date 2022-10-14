import { useSelector } from "react-redux";
import { Section } from "shared/Section";
import { selectUser } from "store/selectors";
import s from './homePage.module.css';

export const HomePage = () => {
    const user = useSelector(selectUser)
    const userName = user && user.name[0].toUpperCase() + user.name.slice(1).toLowerCase()
    return (
        <Section>
            <h1 className={s.title}>Welcome, <span className={s.logo}>{ userName}</span> </h1>
        </Section>
    )
}