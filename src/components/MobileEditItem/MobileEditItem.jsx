import { BsCheckSquareFill } from "react-icons/bs"
import { Button } from "shared/Button"
import s from "./mobileEditItem.module.css"

export const MobileEditItem = ({handleEditSubmit, onInputChange, name, number}) => {
    return (
        <form className={s.form} onSubmit={handleEditSubmit}>
      <label>
        <input
          onChange={onInputChange}
          value={name}
          className={s.input}
          type="text"
          name="name"
        />
      </label>
      <label>
        <input
          onChange={onInputChange}
          value={number}
          className={s.input}
          type="tel"
          name="number"
        />
            </label>
            <div className={s.btnWrapper}>

      <Button type="submit" width={40} secondary>
        {' '}
        <BsCheckSquareFill className={s.done} />
      </Button>
            </div>
    </form>
    )
}