import React from 'react'
import styles from './ProfileBox.module.css'
import { FaDiscord, FaFacebook, FaGithub, FaYoutube } from "react-icons/fa";

import Myavatar from "../../assets/BoiDev.jpg";
const ProfileBox = () => {
  const infobutton = [
    {id : 1, className : [styles.facebook,styles.btn],styleIcon : {fontSize:'25px'},word : 'Facebook',icon : <FaFacebook />,url : 'https://www.facebook.com/share/1DaRAe3rsn/'},
    {id : 2, className : [styles.github,styles.btn],styleIcon : {fontSize:'25px',color : 'black'},word : 'GitHub',icon : <FaGithub />,url : 'https://github.com/BOIPRO'},
    {id : 3, className : [styles.youtube,styles.btn],styleIcon : {fontSize:'25px',color : 'red'},word : 'Youtube',icon : <FaYoutube />,url : 'https://youtube.com/@bipioffical1718?si=7OvSP13nGBht0vvk'}
  ]
  const handleClick  = (url) => {
    window.location.href = url;
  } 
  return (
    <div className={styles.profilebox}>
    <div className={styles.avatar} style={{backgroundImage : `url(${Myavatar})`}}></div>
    <div className= {styles.buttonbox}>
        {infobutton.map((value) => (
          <button key = {value.id} className={value.className.join(" ")} onClick={() => handleClick(value.url)}>
            {React.cloneElement(value.icon,{style : value.styleIcon})}
            {value.word}
          </button>
        ))} 
    </div>
    </div>
  )
}

export default ProfileBox