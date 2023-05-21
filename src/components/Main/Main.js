import React from 'react'
import './Main.css'
import img from '../../assets/img.jpg'

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

//   {
//     id:2,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:'Newzeland',
//     grade:'cultural',
//     fees:'$2000',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//   },

//   {
//     id:3,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:'Newzeland',
//     grade:'cultural',
//     fees:'$2000',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//   },

//   {
//     id:4,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:'Newzeland',
//     grade:'cultural',
//     fees:'$2000',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//   },

//   {
//     id:5,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:'Newzeland',
//     grade:'cultural',
//     fees:'$2000',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//   },

//   {
//     id:6,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:'Newzeland',
//     grade:'cultural',
//     fees:'$2000',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//   },

//   {
//     id:7,
//     imgSrc:img,
//     destTitle:"Bora Bora",
//     location:'Newzeland',
//     grade:'cultural',
//     fees:'$2000',
//     description:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.'
//   },
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
                  <div className="single"></div>
              )
          })
        }
        </div>

    </section>

  )
}
