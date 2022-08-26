import PropTypes from 'prop-types';
import { Btn } from './Button.styled';

const Button = ({ children, onClick, ...restProps }) => {
    return (
        <Btn
            onClick={onClick}
            {...restProps}
        >
            {children}
        </Btn>
    )
};

Button.propTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func
}

export default Button;