import React, {useEffect, useState} from 'react';

const SearchInput = ({onChange, value}) => {
    const [val, setVal] = useState(value);
    
    useEffect(() => {
        onChange(val)
    }, [val]);

    const onInputChange = ({target: {value}}) => setVal(val);

    const onClearButtonClick = () => setVal("");

    return (
        <div className="filter-search">
            <input className="filter-search__input" type="text" value={val}
                   onChange={onInputChange}/>
            <button className="filter-search__clear-button"></button>
        </div>
    )
}