import React from 'react'
import foodArray from '../assets/data'
import { CartItems } from './CartItems'

function Cart() {
    return (
        <>
            <CartItems foodArray={foodArray} />
        </>
    )
}

export default Cart