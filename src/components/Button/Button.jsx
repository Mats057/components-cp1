import './Button.css'
import PropTypes from 'prop-types';

export const Button = ({texto}) => {
    return (
        <a className='btn'>{ texto }</a>
    )
}

Button.propTypes = {
    texto: PropTypes.string.isRequired
};