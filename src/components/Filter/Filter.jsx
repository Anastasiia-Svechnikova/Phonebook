import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import changeFilter from 'store/actions/filterActions';
import s from './filter.module.css';

export const Filter = () => {
    const filter = useSelector(state => state.filter, shallowEqual);
    const dispatch = useDispatch();
    return (
        <label className='label'>
            Find contacts by name
            <input
                onChange={(e)=> dispatch(changeFilter(e.currentTarget.value))}
                type="text"
                value={filter}
                placeholder='start typing the name...'
                className={s.input}
            ></input>
        </label>
    )
}
