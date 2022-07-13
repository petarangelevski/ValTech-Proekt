import React, { Component } from 'react';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import "./Product.css"
function Product({ item }) {
    const { id } = useParams();
    const [data, setData] = useState([])
    useEffect(() => {
        fetchProduct();
    }, []);
    
    const fetchProduct = () => {
        axios
        .get(`https://picsum.photos/v2/list?page=2&limit=12&id=${id}`)
        .then((res) => {
            setData(res.data);
            console.log(res.data);
        })
        .catch((err) => console.log(err))
    }
    let navigate = useNavigate(); 
    const routeChange = () =>{ 
      let path = `/homepage`; 
      navigate(path);
    }

    return (
        <div className="products">
            {data.filter(items => items.id === id).map((items, index) => {
                return (
                    <div className='single__image__container'>
                        <div className="single__image__card" key={index}>
                            <div className="single__image">
                                <img src={items.download_url} alt="" style={{width: '100%', height: '100%'}} />
                            </div>
                            <div className="single__image__card__text">
                                <h1>Uploaded by</h1>
                                <p>{items.author}</p>
                            </div>
                            <button className='single__image__button' onClick={routeChange}>
                                <p className='single__image__button__text'>go back</p>
                            </button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
  }


export default Product;