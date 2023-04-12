import { Search, Input, SearchIcon } from './SearchField.styled';

export const SearchField = ({value, queryString}) => {

    return (
        <Search >
                <Input type='text' value={value ?? ''} onChange={(evt) => queryString(evt.target.value)}/>
                <SearchIcon size={30}/>
        </Search>
    )
}
export default SearchField;