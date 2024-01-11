import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Card from '../../components/Card';

function Product() {
    const [data , setData] = useState([])
    useEffect(() => {
        axios.get('https://fakestoreapi.com/products')
            .then((res) => {
                console.log(res.data);
                setData(res.data)
            })
            .catch((err) => {
                console.log(err);
            })
    }, [])
    return (
        <>
       <div className='flex justify-evenly flex-wrap mt-7 '>
       {data.length > 0 ? data.map((item)=>{
            return <Card title={item.title} src={item.image} id={item.id} showBtn={true}/>
        }): <h1>Loading...</h1>}
       </div>
        </>
    )
}

export default Product