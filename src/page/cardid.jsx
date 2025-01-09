import React from 'react'
import ifoto from "../image/ok.png"
import "../styles/cardid.css"
import { IoMdStar } from "react-icons/io";
const Cardid = () => {
   return (
      <div className="card1">
         <div className="cardid">
            <div className="cardinfo">
               <div className='right'> <img src={ifoto} alt="" /></div>
               <div className='left'> <span><h1>Muhibur Rahman</h1></span>
                  <span className='icon'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span></div>
            </div>
            <div className="desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium obcaecati
               architecto nisi dicta deserunt ab pariatur enim sit iusto at.</div>
         </div>
         <div className="cardid">
            <div className="cardinfo">
               <div className='right'> <img src={ifoto} alt="" /></div>
               <div className='left'> <span><h1>Dr Olivier N</h1></span>
                  <span className='icon'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span></div>
            </div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex non repudiandae illum maiores
               tempora dignissimos impedit! Voluptatem est id assumenda.</div>
         </div>
         <div className="cardid">
            <div className="cardinfo">
               <div className='right'> <img src={ifoto} alt="" /></div>
               <div className='left'> <span><h1>RG k sam</h1></span>
                  <span className='icon'><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /><IoMdStar /></span></div>
            </div>
            <div className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla dignissimos
               ullam error modi a facere ea ipsam nemo quod aliquam.</div>
         </div>

      </div>
   )
}
export default Cardid                                                                                               