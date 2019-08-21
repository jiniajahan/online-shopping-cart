import React from 'react'
import AddButton from './product-listing/add-btn'
import RemoveButton from './product-listing/remove-btn'

export default function ProductLisItem(props) {
    return <div className='product-list-item'>
        <h3>{props.product.name}</h3>
        <img height={100} title={props.product.title}
        src={'/products/1-groot.jpg'} />
        <div>{ props.product.description }</div>
        <div>${ props.product.price }</div>
        <div>
           <AddButton
               cartItem={props.cartItem}
               product={props.product}
               addToCart={props.addToCart}
           />
            {
                props.cartItem
            ?   <RemoveButton
                    cartItem={props.cartItem}
                    product={props.product}
                    removeFromCart={props.removeFromCart}
                />
            : null
            }
        </div>
    </div>

}