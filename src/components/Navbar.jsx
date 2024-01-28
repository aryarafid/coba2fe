import React from 'react'

function Navbar() {
    return (
        <>
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid d-flex">
                    <a className="navbar-brand">Pizza store</a>
                    <form className='flex-fill' role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" style={{ width: "70%" }} />
                    </form>
                </div>
            </nav>
        </>
    )
}

export default Navbar