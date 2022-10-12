import PropTypes from 'prop-types';
import classNames from 'classnames';
import s from './button.module.css';


export const Button = ({ type, primary = false, secondary = false, onClickHandler = null, children, width = null, height = null }) => {

    return (
        <button className={classNames(s.btn, {
            [s.primary]: primary && !secondary,
            [s.secondary]: secondary,
        })}
            style={{width: width, height: height}}
            type={type}
            onClick={onClickHandler}>{children}
        </button>
    )
}

Button.propTypes = {
    type: PropTypes.string.isRequired,
    primary: PropTypes.bool,
    secondary:PropTypes.bool,
    onClickHandler: PropTypes.func,
    children: PropTypes.node.isRequired,
}