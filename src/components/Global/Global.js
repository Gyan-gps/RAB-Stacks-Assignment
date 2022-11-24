import React from 'react'
import './Global.css'
import global from '../../assets/Huge Global.svg'
import mg from '../../assets/Mask Group.svg'
import mg1 from '../../assets/Mask Group (1).svg'
import mg2 from '../../assets/Mask Group (2).svg'
import mg3 from '../../assets/Mask Group (3).svg'
import mg4 from '../../assets/Mask Group (4).svg'

const mask = [mg, mg1, mg2, mg3, mg4]

const Global = () => {
  return (
    <section id="global">
      <div>
            <h1>Huge Global Network of<br/> Fast VPN</h1>
            <p>See LaslesVPN everywhere to make it easier for<br/> you when you move locations.</p>
      </div>
      <div>
        <img src={global} alt={global} height="auto" width="90%"/>
      </div>

      <ul className='g-list'>
        {
            mask.map((e,i)=>{
                return<li key={i}>
                    <img src={e} alt={e} height="60"/>
                </li>
            })
        }
      </ul>

    </section>
  )
}

export default Global
