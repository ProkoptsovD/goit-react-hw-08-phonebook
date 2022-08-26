import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import NavTab from './NavTab/NavTab.component';
import { TabList, TabListItem } from './Navbar.styled';

const Navbar = ({ tabs }) => {
    return (
        <Box
            component='nav'
        >
            {
                tabs ? <TabList>
                            {
                                tabs.map(({ name, href }) => (
                                    <TabListItem key={ name }>
                                        <NavTab
                                            text={ name }
                                            to={ href }
                                        />
                                    </TabListItem>
                                ))
                            }
                        </TabList>
                    : null
            }
        </Box>
    )
}

Navbar.propTypes = {
    tabs: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            href: PropTypes.string,
        })
    )
}

export default Navbar;