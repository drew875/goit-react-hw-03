const SearchBox = ({ searchContact, onSearch }) => {
    return (
        <div>
            <label> Find by name
                <input
                    value={searchContact}
                    onChange={((e) => onSearch(e.target.value))}
                    placeholder="search contact" />
            </label>
        </div>
    )
}
export default SearchBox;