import React, { Component } from 'react'

class Form extends Component {
    constructor() {
        super()

        this.state = {
            ImageURL: '',
            ProductName: '',
            Price: ''
        }
    }    

    handleChange = e => {
        let { value, name } = e.target
            this.setState({
                [name] : value
            })
            // console.log(this.state);
    }

    handleCancel = () => {
        console.log(this.state)
        this.setState({
            ImageURL: '',
            ProductName: '',
            Price: ''
        })
    }

    handleAdd = () => {
        let {imageURL, productname, price} = this.state

        let newArticle = {
            imageURL, 
            productname, 
            price
        }

        this.props.create(newArticle)

        this.setState({
            imageURL, 
            productname, 
            price
        })
    }

    render() {
        return (
            <div>
                Form
                <h5>Image URL:</h5><input type='text' name='ImageURL' value={this.state.ImageURL} onChange={this.handleChange}/>
                <h5>Product Name:</h5><input type='text' name='ProductName' value={this.state.ProductName} onChange={this.handleChange}/>
                <h5>Price:</h5><input type='number' name='Price' value={this.state.Price} onChange={this.handleChange}/><p></p>
                <div className='formbuttons'>
                    <button id='button' onClick={this.handleCancel}>Cancel</button>
                    <button id='button' onClick={this.handleAdd}>Add to Inventory</button>
                </div>
            </div>
        )
    }
}

export default Form
