import s from './instructions.module.css'

export const Instructions = () => {
    return (
        <div className={s.wrapper}>
            <p className={s.wrapperText}>Oops... It's empty here!</p>
            <p>You can add your first contact using the form above</p>
        </div>
    )
}