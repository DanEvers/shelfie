import React from 'react'

function Product(props) {
    const {imageurl, productname, price} = props.inventory
        return (
            <div>
                Product
                <img src={imageurl} alt="alt text"/>
                <p>{productname}</p>
				<p>{price} </p>
            </div>
        )
    }

export default Product
