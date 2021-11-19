const Checkbox = ({id, className = "", checked, text, onChange}) => {
    return (
        <div className={`filter-price__checkbox checkbox-control ${className}`}>
            <input className="checkbox-control__input" id={id} type="checkbox" checked={checked}
                   onChange={({target: {checked}}) => onChange(checked)}/>
            <label className="checkbox-control__label" htmlFor={id}>
                {text}
            </label>
        </div>
    )
}

export default Checkbox;