import React from 'react';
import Image from 'next/image';
import { HeartOffIcon } from '../icons';

// eslint-disable-next-line react/prop-types
let index = 0
const Catalog = ({ name, brand, src, meta, price, tabindex }) => {
    return (
        <button tabIndex={tabindex} className='product-preview' key={name}>
            <div className='product-preview__cta-wrapper '>
                <Image
                    className='product-preview__image'
                    src={src}
                    alt={`${brand} ${name}`}
                    layout='fill'
                />
                <div className='product-preview__like-btnt '>
                    <HeartOffIcon className='product-preview__like-btn__icon-heart' />
                </div>
            </div>
            <div className='product-preview__info-wrapper'>
                <p className='product-preview__brand'>{brand}</p>
                <p className='product-preview__name'>{name}</p>
                <p className='product-preview__meta  js-product-shipping-cost'>
                    {meta}
                </p>
                <p className='product-preview__price-wrapper'>
                    <span className='product-preview__price'>{price}</span>
                </p>
            </div>
        </button>
    );
}

export default Catalog;