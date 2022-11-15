import { BiPencil } from 'react-icons/bi';
import { TbTrashX } from 'react-icons/tb';
import { Button } from 'shared/Button';
import s from './mobileItem.module.css';

export const MobileItem = ({ editNumber, handleDelete, name, number }) => {
  return (
    <li className={s.item}>
          <div className={s.inner}>             
          <p className={s.name}>{name}</p>
      <p className={s.number}>{number}</p>
          </div>
          <div className={s.inner}>
              
      <Button width={40} secondary type="button" onClickHandler={editNumber}><BiPencil className={s.editIcon } /></Button>
      <Button primary type="button" width={40} onClickHandler={handleDelete}>
        <TbTrashX className={s.deleteIcon} />
      </Button>
          </div>
    </li>
  );
};
