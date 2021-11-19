const List = ({items}) => {
    return (
        <div className="filter-list" id={id}>
            {
                items.map(({id, text}) => (
                    <a className="filter-list__item filter-list__item--selected">
                        {text}
                    </a>
                ))
            }
        </div>
    )
}

export List;