import { useSelector, useDispatch } from 'react-redux';
import { setFilterAction } from 'store/filter/slice.filter';
import { selectFilter } from 'store/selectors';
import s from './filter.module.css';
import { BiSearch } from 'react-icons/bi';

import Select from '@mui/material/Select';

import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';

import InputLabel from '@mui/material/InputLabel';


export const Filter = () => {
  const age = 'ten';
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  return (
    <>
      <label className={s.label}>
        <BiSearch className={s.search} />
        <input
          onChange={e => dispatch(setFilterAction(e.currentTarget.value))}
          type="text"
          value={filter}
          placeholder="   start typing the name..."
          className={s.input}
        ></input>
      </label>

      <FormControl>
        <InputLabel sx={{ fontSize: 13, color: '#ff33ff' }} id="demo-simple-select-label">
          Sort
        </InputLabel>
        <Select
          sx={{
            width: 300,
            height: 30,
          }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          // onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem
            sx={{
              backgroundColor: '#ef061aed3',
            }}
            value={30}
          >
            Thirty
          </MenuItem>
        </Select>
      </FormControl>
    </>
  );
};
