import PropTypes from 'prop-types';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { StyledLink } from "./BackLink.styled";

const BackLink = ({ to }) => {
    return (
        <StyledLink href={to}>
            <ArrowBackIcon />
        </StyledLink>
    );
};

BackLink.propTypes = {
    to: PropTypes.string,
}

export default BackLink;