import axios from "axios";
import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./HomePage.css";
import "./Album.css";
import gsap from "gsap";
function Album() {
  const [item, setItem] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://picsum.photos/v2/list?page=2&limit=12"
      );
      setItem(result.data);
      console.log(item);
    };
    fetchData();
  }, []);

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/homepage`;
    navigate(path);
  };

  const boxRef = useRef();
  const [active, setActive] = useState(true);
  
  const removeItem = (value) => {
    setItem(prev => prev.filter(item => item !== value));
  }
  
  const remove = (item, target) => {
    gsap.to(target, {
      opacity: 0,
      onComplete: () => removeItem(item)
    });
  };
 
  return (
    <div className="album">
      <div className="album__heading">
        <p className="album__p">My Album One</p>
        <p className="album__date">Date created: 29th November 2021</p>
      </div>
      <div className="images__album__container">
        {item.map((data) => {
          return (
            <>
              <div className='image__album__card' key={data.id}>
                <img key={data.id}  className={`images__album`} src={data.download_url} alt="" onClick={(e) => remove(item, e.currentTarget)}/>
                <button className="hide"><span className="delete__button">remove</span></button>
              </div>
            </>
          );
        })}
      </div>
      <div className="album__buttons">
        <button className="album__button1" onClick={routeChange}>
          <span className="button1__text">Go back</span>
        </button>
        <button className="album__button2">
          <span className="button2__text">save</span>
        </button>
      </div>
    </div>
  );
}

export default Album;
