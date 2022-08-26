import { useSelector, useDispatch } from 'react-redux';
import { Input } from 'components/ContactForm/ContactForm.styled';
import { filterSelectors } from 'redux/filter/filter.selectors';
import { filterActions } from 'redux/filter/filter.slice';

const Filter = () => {
    const dispatch = useDispatch();
    const filter = useSelector(filterSelectors.getFilter);

    return (
        <>
            <Input
                id="filter"
                type="text"
                name="filter"
                onChange={(e) => dispatch(filterActions.setFilter(e.target.value))}
                value={ filter }
                label="Search contacts by name"
            />
        </>
    )
}

export default Filter;