import React, { useState } from "react";
import s from "./form.module.css";
import { toast} from 'react-toastify';
import { Button } from "../../shared/Button";
import { useDispatch, useSelector } from 'react-redux';
import { addContactThunk } from "store/contacts/thunk.contacts";
import { BsFillPersonPlusFill } from 'react-icons/bs';
import { selectAllContacts } from "store/selectors";



export const Form =()=> {
    const [contact, setContact] = useState({name: '', number: ''})

    const contacts = useSelector(selectAllContacts)
    const dispatch = useDispatch();

    const onInputChange = e => {
        setContact(prevState => {
            return {...prevState, [e.target.name] : e.target.value}
        })
    }
    
    const onFormSubmit = e => {
        e.preventDefault();
        const newContact = contact
        
        if (contacts.some(({ name }) => name === newContact.name)) {
            toast.warn(`${newContact.name} is already in contacts!`, {
               autoClose: 4000,
hideProgressBar: true,
           });
            return;
        }
        dispatch(addContactThunk(newContact))
        formReset();
    }
    const formReset = () => {
        setContact({name: '', number: ''})
    }

    return (          
        <div className={s.wrapper}>
            <form className={s.form} onSubmit={onFormSubmit}>  
                <label className={s.label}>
                    Name 
                    <input onChange={onInputChange}
                        value={contact.name}
                        className={s.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        required
                    />
                </label>
                <label className={s.label}>
                    Number 
                    <input
                        onChange={onInputChange}
                        value={contact.number}
                        className={s.input}
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        required
                    />
                </label>
                <Button type="submit" width={130} primary ><BsFillPersonPlusFill/> Add contact</Button>
            </form>
        </div>
    )
}







