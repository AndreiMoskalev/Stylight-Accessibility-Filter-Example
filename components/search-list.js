import SearchInput from './search-input';
import List from './list';

const SearchList = (items) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className="search-list">
            <SearchInput onChange={onSearchChange} value={searchValue}/>
            <List items={items}/>
        </div>
    )
}