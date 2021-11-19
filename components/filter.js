import React, {useRef, useState} from 'react';
import { ArrowDownIcon } from './icons';

const Filter = ({title, element}) => {
    const [open, setOpen] = useState(false);
    const button = useRef(null);
    let top = null;
    let left = null;

    if (open) {
        top = button.current.offsetTop + button.current.offsetHeight;
        left = button.current.offsetLeft;
    }

    return (
        <>
            <button aria-label={'FIlter of ' + title} className="drop-container" onClick={() => setOpen(!open)} ref={button}>
                {title}
                <ArrowDownIcon className="drop-container__icon" />
            </button>

            {open &&
            <div style={{
                top, left
            }}
                 className="filters-collapsible-panel">
                <div className="filters-collapsible-panel__body">
                    {element}
                </div>
                <div className="filters-collapsible-panel__footer">
                    <button onClick={() => setOpen(false)}>Apply</button>
                </div>
            </div>
            }
        </>
    )
}

export default Filter;