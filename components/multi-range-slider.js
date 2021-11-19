import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';

const MultiRangeSlide = ({minValue, maxValue, minRange, maxRange, onChange}) => {
    const [min, setMin] = useState(minValue)
    const [max, setMax] = useState(maxValue);
    const left = ((min - minRange) / ((maxRange - minRange) / 100)) + '%';
    const right = ((maxRange - max) / ((maxRange - minRange) / 100)) + '%';
    const [focusedMin, setFocuseMin] = useState(false);
    const [focusedMax, setFocuseMax] = useState(false);
    useEffect(() => setMin(minValue), [minValue]);
    useEffect(() => setMax(maxValue), [maxValue]);

    const onChangeMin = ({target: {value}}) => {
        const newValue = Math.min(value, max - 1);
        setMin(newValue);
        onChange({min: newValue, max});
        // this._minInputNode.toggleClass('multi-range-slider__input--top', percent > 50);
    }

    const onChangeMax = ({target: {value}}) => {
        const newValue = Math.max(value, min + 1);
        setMax(newValue);
        onChange({min, max: newValue});

//         this._maxInputNode.toggleClass('multi-range-slider__input--top', percent > 50);
    }

    return (
        <div className="multi-range-slider">
            <input type="range"
                   className="multi-range-slider__input multi-range-slider__input--min"
                   min={minRange}
                   max={maxRange}
                   value={min}
                   onChange={onChangeMin}
                   onFocus={() => setFocuseMin(true)}
                   onBlur={() => setFocuseMin(false)}
            />
            <input type="range" className="multi-range-slider__input multi-range-slider__input--max"
                   min={minRange}
                   max={maxRange}
                   value={max}
                   onChange={onChangeMax}
                   onFocus={() => setFocuseMax(true)}
                   onBlur={() => setFocuseMax(false)}
            />

            <div className="multi-range-slider__control">
                <div className="multi-range-slider__track"/>
                <div className="multi-range-slider__range" style={{right, left}}/>
                <div className={`multi-range-slider__thumb  multi-range-slider__thumb--left ${focusedMin ? 'multi-range-slider__thumb--focused' : ''}`} style={{left}}/>
                <div className={`multi-range-slider__thumb  multi-range-slider__thumb--right ${focusedMax ? 'multi-range-slider__thumb--focused' : ''}`} style={{right}}/>
            </div>
        </div>

    )
}

MultiRangeSlide.propTypes = {
    minValue: PropTypes.number.isRequired,
    maxValue: PropTypes.number.isRequired,
    minRange: PropTypes.number.isRequired,
    maxRange: PropTypes.number.isRequired,
    onChange: PropTypes.func.isRequired,
}

export default MultiRangeSlide
