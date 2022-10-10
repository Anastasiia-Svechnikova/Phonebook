import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { setFilterAction } from 'store/filter/slice.filter';
import s from './filter.module.css';


export const Filter = () => {
    const filter = useSelector(state => state.filter, shallowEqual);
    const dispatch = useDispatch();
    return (

        <label className={s.label}>
            Filter:
            <input
                onChange={(e)=> dispatch(setFilterAction(e.currentTarget.value))}
                type="text"
                value={filter}
                placeholder='   start typing the name...'
                className={s.input}
            ></input>
        </label>
    )
}
