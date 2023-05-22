import React from 'react'
import './Main.css'

import {BsClipboardCheck} from 'react-icons/bs'
import {HiOutlineLocationMarker} from 'react-icons/hi'

import img from '../../assets/img.jpg'
import img2 from '../../assets/img2.jpg'
import img3 from '../../assets/img3.jpg'
import img4 from '../../assets/img4.jpg'
import img5 from '../../assets/img5.jpg'
import img6 from '../../assets/img6.jpg'
import img7 from '../../assets/img7.jpg'
import img8 from '../../assets/img8.jpg'
import img9 from '../../assets/img9.jpg'

const  Data=[
  {
    id:1,
    imgSrc:img,
    destTitle:"Bora Bora",
    location:'Newzeland',
    grade:'cultural',
    fees:'$2000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

  {
    id:2,
    imgSrc:img2,
    destTitle:"Goa",
    location:'India',
    grade:'cultural',
    fees:'$1000',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

  {
    id:3,
    imgSrc:img3,
    destTitle:"Great Barrier Reef",
    location:'Australia',
    grade:'cultural relax' ,
    fees:'$2500',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

  {
    id:4,
    imgSrc:img4,
    destTitle:"Gunajuato",
    location:'Mexico',
    grade:'cultural relax',
    fees:'$1100',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

  {
    id:5,
    imgSrc:img5,
    destTitle:"Cappadocia",
    location:'Turkey',
    grade:'cultural relax',
    fees:'$800',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

  {
    id:6,
    imgSrc:img6,
    destTitle:"Kerala",
    location:'India',
    grade:'cultural and authentic',
    fees:'$700',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },

  {
    id:7,
    imgSrc:img8,
    destTitle:"Mumbai",
    location:'India',
    grade:'Modern',
    fees:'$1100',
    description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
  },
]


export default function Main() {
  return (
    <section className="main container section">
        <div className="secTitle">
          <h3 className="title">
            Most Visited destinations
          </h3>
        </div>

        <div className="secContent grid">

        {
          Data.map(({id,imgSrc,destTitle,location,grade,fees,description})=>{
              return(
                  <div key={id} className="singleDestination">
                    <div className="imageDiv">
                      <img src={imgSrc} alt={destTitle}></img>
                    </div>

                    <div className="cardInfo">
                        <h4 className="destTitle">
                          {destTitle}</h4>
                          <span className="continent flex">
                            <HiOutlineLocationMarker className="icon"/>
                            <span className="name">{location}</span>
                          </span>
                        
                        <div className="fees flex">
                            <div className="grade">
                              <span>{grade}<small>+1</small></span>
                            </div>
                            <div className="price">
                              <h5>{fees}</h5>
                            </div>
                        </div>


                        <div className="desc">
                          <p>{description}</p>
                        </div>


                        <button className="btn flex">
                          Details <BsClipboardCheck className="icon"/>                        
                        </button>

                    </div>

                  </div>
              )
          })
        }
        </div>

    </section>

  )
}
