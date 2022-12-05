import "./hotel.css"
import Navbar from "../../components/navbar/Navbar"
import Header from "../../components/header/Header"
import MailList from "../../components/mailList/MailList"
import Footer from "../../components/footer/Footer"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"

const Hotel = () => {

  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);
  const photos = [
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/50308270.webp?k=63e2808321abe9856ea43a310d36145c81244dfe444f01093a5ba84d01911139&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/43011556.webp?k=7f692f51ba81f5b15011728c6605e0df99276dd1f4344b5a8618f42f0a705b60&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/220983799.webp?k=39b6f50a714fc3282abfc5353e1cc7a5dad301e988506f15e7fdbc9dea7aa628&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/214405466.webp?k=632e881c7c830bb3cf0d4f53f1259d3e7f2ccac89f3b38098083d2cf3d1ccc9b&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/139165414.webp?k=0d8f3c35fd427f56a8ba8d045bbfd801b746c2c8939cf28b707019fd6405e0e7&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/110812706.webp?k=47dc34d7194408d0ad506896f2111850e4fdaa9097825604dc90bbb07f1d28e6&o=&s=1"
    },
    {
      src: "https://cf.bstatic.com/xdata/images/hotel/square200/110812706.webp?k=47dc34d7194408d0ad506896f2111850e4fdaa9097825604dc90bbb07f1d28e6&o=&s=1"
    },

  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

      // this is for arrow functionality
  const handleMove = (direction) =>{
    let newSlideNumber;

    if(direction==="l"){
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    }else{
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;   
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
       <Navbar />
       <Header type="list" />

       <div className="hotelContainer">
           {open && <div className="slider">
              <FontAwesomeIcon icon={faCircleXmark} className="close" onClick={()=>setOpen(false)}/>
              <FontAwesomeIcon icon={faCircleArrowLeft} className="arrow" onClick={()=>handleMove("l")}/>
               <div className="sliderWrapper">
                  <img src={photos[slideNumber].src} alt="" className="sliderImg" />
               </div>
              <FontAwesomeIcon icon={faCircleArrowRight} className="arrow" onClick={()=>handleMove("r")} />
           </div>}
         <div className="hotelWrapper">
         <button className="bookNow">
            Reserve or Book Now!
         </button>
           <h1 className="hotelTitle">Grand Hotel</h1>
           <div className="hotelAddress">
              <FontAwesomeIcon icon={faLocationDot} />  
               <span>Elton st 125 New york</span>
              </div>

              <span className="hotelDistance">
                 Excellent location 500m from center
              </span>

              <span className="hotelPriceHighlight">
                Book a stay over $114 at this property and get a free airport taxi
              </span>

              <div className="hotelImages">
                {photos.map((photo, i) => (
                  <div className="hotelImgWrapper">
                     <img 
                        onClick={()=>handleOpen(i)} 
                        src={photo.src} 
                        alt="" className="hotelImg" 
                        />
                  </div>
                ))} 
              </div>

              <div className="hotelDetails">
                <div className="hotelDetailsTexts">
                 <h1 className="hotelTitle">Stay in the heart of Krakow</h1>
                   <p className="hotelDesc">
                   Centrally located, Hostal Montaloya is a 5-minute walk from Puerta del Sol Square, 
                   and only a 10-minute walk from Gran Via Avenue and Madrid’s main shopping district. 
                   Free Wi-Fi is available.

                   All air-conditioned rooms at Hostal Montaloya are simply decorated and offer a TV and a private bathroom.
                   
                   Tirso de Molina Metro Station is less than 1 minute walk from the guesthouse. 
                   Madrid’s main tourist attractions such as El Prado and Reina Sofia museums can all be reached within walking distance.
                   
                   Hostal Montaloya is also close to the famous Plaza Mayor Square. 
                   Here there is a variety of bars and restaurants serving local cuisine and a continental breakfast is available in a nearby cafe.
                   
                   Atocha Train Station is 1.6 km from Hostal Montaloya.
                   </p>
                </div>

                <div className="hotelDetailsPrice">
                 <h1>Perfect for a 9-night stay!</h1>
                 <span>
                    Located in the heart of Krakow, this property has and
                    excellent location score of 9.8!
                 </span>
                 <h2>
                     <b>$945</b> (9 nights)
                 </h2>
                 <button>Reserve or Book Now!</button>
            
                </div>
              </div>

       </div>
         <MailList />
         <Footer />
    </div>
  </div>
  )
}

export default Hotel 
