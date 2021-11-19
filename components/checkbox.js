const Checkbox = ({id, className = "", checked, text, onChange}) => {
    const onKeyPress = ({which}) => {
        if (which !== 13) {
            return
        }

        onChange(!checked);
    }
    return (
        <div onKeyPress={onKeyPress}  aria-label={text} aria-checked={checked} role="checkbox" tabIndex={0} className={`filter-price__checkbox checkbox-control ${className}`}>
            <input aria-hidden="hidden" className="checkbox-control__input" id={id} type="checkbox" checked={checked}
                   onChange={({target: {checked}}) => onChange(checked)}/>
            <label className="checkbox-control__label" htmlFor={id}>
                {text}
            </label>
        </div>
    )
}

export default Checkbox;