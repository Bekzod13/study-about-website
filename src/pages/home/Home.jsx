import React from 'react'
import Hero from '../../components/hero/Hero';
import Aim from '../../components/aim/Aim';
import AimMain from '../../components/aimMain/AimMain';
import HomeInfo from '../../components/homeInfo/HomeInfo';


// import images

import heroInfoImg1 from '../../images/homeInfoImg.jpg';
import heroInfoImg2 from '../../images/homeInfoImg2.jpg';
import heroInfoImg3 from '../../images/homeInfoImg3.jpg';
import hero from '../../images/hero.svg';



const Home = () => {
    return (
        <>
            <Hero heroHeader={"Assalamu alaykum, Black Coders Teamga Xush kelibsiz!"} hero={hero} />   
            <Aim aim={'Asosiy Maqsadimiz'} description={'Bizni o`quv markazimiz o`z o`quvchilarini hech qanday oliy o`quv yurtlariga yo`naltirmaydi. Biz o`z o`quvchilarimizga IT sohasida yetuk mutahasis qilib tarbiyalaymiz. Biz ularning kelajaklari haqida qayg`uramiz!'} />
            <AimMain />
            <HomeInfo 
                homeInfoHeader={'Front End'} 
                homeInfoDescription={'Hozirgi kunda eng daromadli dasturlash sohalaridan biri bo`lgan front end dasturlash bo`yicha siz qisqa muddat ichida muvaqqiyatga erishishingiz mumkin.'} 
                homeInfoImg={heroInfoImg1} 
            />
            <HomeInfo 
                homeInfoHeader={'Back End'} 
                homeInfoDescription={'Hozirgi kunda eng daromadli dasturlash sohalaridan biri bo`lgan front end dasturlash bo`yicha siz qisqa muddat ichida muvaqqiyatga erishishingiz mumkin.'} 
                homeInfoImg={heroInfoImg2} 
                leftOrder={true}
            />
            <HomeInfo 
                homeInfoHeader={'Telegram Bot'} 
                homeInfoDescription={'Hozirgi kunda eng daromadli dasturlash sohalaridan biri bo`lgan front end dasturlash bo`yicha siz qisqa muddat ichida muvaqqiyatga erishishingiz mumkin.'} 
                homeInfoImg={heroInfoImg3} 
            />
        </>
    )
}

export default Home
