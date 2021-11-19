import React, {useState} from 'react';
import MultiRangeSlider from './multi-range-slider';
import Checkbox from './checkbox';

const FilterPrice = ({minValue, maxValue, minRange, maxRange, onChange}) => {
    const [sale, setSale] = useState(false);
    const [freeShipping, setFreeShipping] = useState(false);
    const [min, setMin] = useState(minValue);
    const [max, setMax] = useState(maxValue);

    const onSliderChange = ({min, max}) => {
        setMin(min);
        setMax(max);
    }

    const onInputMinChange = ({target: {value}}) => {
        if (value < minRange) {
            setMin(minRange);
            return
        }
        setMin(value)
    }

    const onInputMaxChange = ({target: {value}}) => {
        if (value > maxRange) {
            setMax(maxRange);
            return;
        }
        setMax(value);
    }

    return (
        <div className="filter-price">
            <div className="filter-price__inputs-container">
                <div className="filter-price__input-wrapper" data-currency="$">
                    <input id="filter-price_input-min" type="number" className="filter-price__input"
                           value={min} onChange={onInputMinChange}/>
                </div>

                <div className="filter-price__input-wrapper" data-currency="$">
                    <input id="filter-price_input-max" type="number" className="filter-price__input"
                           value={max} onChange={onInputMaxChange}/>
                </div>
            </div>


            <div className="filter-price__slider-container">
                <MultiRangeSlider minValue={parseInt(min)} maxValue={parseInt(max)} minRange={minRange}
                                  maxRange={maxRange} onChange={onSliderChange}/>
            </div>

            <Checkbox id={'sale'} className="filter-price__checkbox" checked={sale} text={"Sale"}
                      onChange={value => setSale(value)}/>
            <Checkbox id={'freeShipping'} className="filter-price__checkbox" checked={freeShipping}
                      text={"Free Shipping"}
                      onChange={value => setFreeShipping(value)}/>
        </div>
    )
}

export default FilterPrice;