import React from "react";
import PropTypes from 'prop-types';
import {Button} from "../../shared/Button";
import s from './contacts-item.module.css';


export const ContactsItem = ({name, phone, deleteHandler}) =>{
    const onItemMouseOver = (e) => {
        e.currentTarget.classList.toggle(s.focus);
    }
     const onItemMouseleave = (e) => {
        e.currentTarget.classList.toggle(s.focus);
    }
    return (
        <li onMouseOut={onItemMouseleave} onMouseOver={onItemMouseOver} className={s.item}>
            <span className={s.name}>{name}:</span>
            <span className='contact-num'>{phone}</span>
            <Button  dlt type="button" onClickHandler={deleteHandler}>Delete</Button>
        </li>
    )
}
ContactsItem.propTypes = {
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    deleteHandler: PropTypes.func.isRequired,
}