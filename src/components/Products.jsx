import React, { useLayoutEffect } from 'react'
// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import react.svg

const Products = ({ foodArray }) => {
    return (
        <>
            {foodArray.map(foodItem => (
                <div key={foodItem.id} className="col-sm-3 d-flex align-items-stretch">
                    <div className="card mb-4" style={{ minHeight: "fit-content" }} >
                        <img src={foodItem.image} className="card-img-top img-thumbnail" alt={`Image for ${foodItem.name}`}
                            style={{ width: "200px", height: "200px" }} />
                        <div className="card-body d-flex flex-column">
                            <h5 className="card-title">{foodItem.name}</h5>
                            <p className="card-text">Price: ${foodItem.price}</p>
                        </div>
                        <div className='card-footer'>
                            <button className="btn btn-primary">Add to Cart</button>
                        </div>
                    </div>
                </div >
            ))}
        </>
    );
};

export default Products

