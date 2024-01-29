import React from 'react'
// import Products from '../components/Products'
import Cart from '../components/Cart.jsx'
import foodArray from '../assets/data'
import Products from '../components/Products.jsx'

function MainPage() {
    return (
        <>
            <div className='row m-4'>
                <div className='col-9 border-end overflow-auto'>
                    <div className='row m-4' >
                        <Products foodArray={foodArray} />
                    </div>
                </div>
                <div className='col-3 overflow-scroll'>
                    <Cart />
                </div>
            </div>

        </>
    )
}

export default MainPage