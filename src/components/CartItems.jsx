import React from 'react'

export const CartItems = ({ foodArray }) => {
    return (
        <>
            {foodArray.map(foodItem => (
                <div className="card mb-3 ms-4"
                // style={{ maxWidth: "540px" }}
                >
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={foodItem.image} className="img-fluid rounded-start" alt="..." style={{
                                height: "100%"
                            }} />
                        </div>
                        <div className="col-md-6">
                            <div className="card-body">
                                <h5 className="card-title">{foodItem.name}</h5>
                                <p className="card-text">{foodItem.price}</p>
                                <input type="textarea" className='text-break' style={{ width: '100%', height: "50px" }} />
                            </div>
                        </div>
                        <div className='col-md-2 m-auto'>
                            <button type="button" class="btn btn-success">+</button>
                            <p>0</p>
                            <button type="button" class="btn btn-danger">-</button>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}
