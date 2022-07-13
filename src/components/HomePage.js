import axios from 'axios';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './HomePage.css';
import './Modal/Modal.css'

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
      let navigate = useNavigate();


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
                                
                                    <img onClick={((e) => navigate(`/image/${data.id}`))} className='images__homepage' src={data.download_url} alt="" />
                                <button onClick={toggleModal} className='hiden'>
                                <span className="delete__button">ADD TO ALBUM</span>
                                </button>
                                
                                {modal && (<div className="modal">
                                    <div className="hoverlay">
                                        <div className="modal__content">
                                            <div className="modal__headings">
                                                <p className='p1'>create new album</p>
                                                <p className="p2">Add to existing</p>
                                            </div>

                                                <p className='album__title'>Enter title here</p>

                                            <div className="modal__buttons">
                                            <button className='cancel__button' onClick={toggleModal}><span className="button1__text">cancel</span></button>
                                            <button className='save__button'><span className="button2__text">save</span></button>
                                            </div>
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
