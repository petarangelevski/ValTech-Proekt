import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';


function HomePage() {
    const [item, setItem] = useState([]);
    const [itemImage, setItemImage] = useState();
    const [modal, setModal] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios(
                "https://picsum.photos/v2/list?page=2&limit=12"
            );
            setItem(result.data)
        };
        fetchData();
      }, []);

      const toggleModal = () => {
        setModal(!modal)
      }
  return (
    <div className="HomePage">                      
        <div className='images__homepage__container'>
                        {item.map((data) => {
                            return ( 
                                <>
                                <div className='images__homepage_card' key={data.id}>
                                <a className='link' href={`/image/${data.id}`}>
                                    <img className='images__homepage' src={data.download_url} alt="" />
                                <button onClick={toggleModal} className='hiden'>
                                <span className="delete__button">ADD TO ALBUM</span>
                                </button>
                                </a>
                                {modal && (<div className="modal">
                                    <div className="hoverlay">
                                        <div className="modal-content">
                                            <h2>w</h2>
                                            <p>w</p>
                                            <button onClick={toggleModal}>close</button>
                                            <button>save</button>
                                        </div>
                                    </div>
                                </div>)}
                                </div>
                                </>
                            )
                        })}
        </div>

    </div>
  );
}

export default HomePage;
