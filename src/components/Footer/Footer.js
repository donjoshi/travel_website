import React from 'react'
import './Footer.css'
import video2 from '../../assets/video2.mp4'
import { FiSend } from "react-icons/fi";
import { MdTravelExplore } from "react-icons/md";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillYoutube } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import {FaTripadvisor} from "react-icons/fa";
import { FiChevronRight } from "react-icons/fi";

export default function Footer() {
  return (
    <section className="footer ">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="secContent container">
        <div className="contactDiv flex">
          <div className="text">
            <small>Keep In Touch</small>
            <h2>Travel With Us</h2>
          </div>

          <div className="inputDiv flex">
            <input type="text" placeholder="enter email address" ></input>
            <button className="btn flex" type="submit" >
              Send<FiSend className="icon"/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
            <div className="footerIntro flex">
              <div className="logoDiv">
                <a href="#" className="logo flex">
                  <MdTravelExplore className="icon"/> Travel
                </a>
              </div>

              <div className="footerParagraph">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum. Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quisquam, voluptatum.

              </div>

              <div className="footerSocials">
                <AiOutlineTwitter className="icon"/>
                <AiFillYoutube className="icon"/>
                <AiFillInstagram className="icon"/>
                <FaTripadvisor className="icon"/>
              </div>

            </div>

            <div className="footerLinks grid">              
              <div className="linkGroup">
                <span className="groupTitle">Our Agency</span>

                <li className='footerList flex'>
                  <FiChevronRight className="icon"/>
                  Services
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className="icon"/>
                  Insurance
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className="icon"/>
                  Agency
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className="icon"/>
                  Tourism
                </li>
                <li className='footerList flex'>
                  <FiChevronRight className="icon"/>
                  Payment
                </li>

              </div>

            </div>

        </div>

      </div>

    </section>
  )
}
