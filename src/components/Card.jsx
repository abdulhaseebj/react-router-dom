import React from 'react'
import { useNavigate } from 'react-router-dom'


const Card = ({ src, title, description, id, showBtn = false }) => {
    const navigate = useNavigate()
    function singleProductPage() {
        navigate(`/singleProduct/${id}`)
    }
    return (
        <div className="card card-compact mt-3 w-[250px] bg-base-100 shadow-xl">
            <figure><img src={src} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title text-lg">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    {showBtn ? <button onClick={singleProductPage} className="btn btn-primary">Buy Now</button> : null}
                </div>
            </div>
        </div>

    )
}

export default Card