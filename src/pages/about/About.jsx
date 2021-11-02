import React from 'react';


// import pages
import AboutHero from '../../components/aboutHero/AboutHero';
import AboutInfo from '../../components/aboutInfo/AboutInfo';

// import images
import aboutHero from '../../images/aboutHero.svg';
import documentImg from '../../images/documentImg.png';

const About = () => {
    return (
        <>
            <AboutHero aboutHeroHeader={'Biz haqimizda'} aboutHero={aboutHero} />  
            <AboutInfo 
                aboutInfoHeader={'Black Coders Team haqida umumiy ma`lumot'} 
                aboutInfoDescription={'Bu kompaniya 2021 - yilning avgust oyida tashkil etilgan nodavlat ta`lim muassasasi hisoblanadi. Bu kompaniyaning asasiy maqsadi o`zbek xalqini ishsizlik va bilimsizlikdan olib chiqarishga qaratilgan. Hozirda eng daromadli va iste`dotli kadrlarga ta`lab yuqori bo`lgan kasblarga o`z o`quvchilarini yo`naltiradi, bu kasblar: Front end developer, Back end developer, Full stack developer, Social media marketing, Web designer, Graphic designer, 3D animator, 3D interier designer, IELTS teacher, CEFR teacher, Mobile developer, Android developer, Softwere engineer, Online freelancer, Ios devepoler, Data scientist kabi o`nlab kasblarni yurori bilimga asoslangan holda o`rgatiladi. Bu kasblarni egallash davomida ishlash o`quchilar amaliyot va ishlash qobiliyatiga ega bo`lib boradi. Bu Black Coders kompaniyasining yana bir ustunligi hisoblanadi. Shuningdek har oyning oxirgi dam olish kunida kursdagi o`quvchilar imtihon qilinadi va eng baland ballarni to`plagan 3 o`quvchi uchun imtiyozlar yaratib beriladi: 1-o`rin uchun keyingi oyda mutlaqo bepul o`qish imkoniyati, 2- o`rin uchun keyingi oyning to`lov summasining 50% miqdori qaytarib beriladi, 3-o`rin uchun to`lov miqdorining 25% miqdori qaytarib beriladi.'} 
                aboutInfoImg={true}
            /> 
            <AboutInfo 
                aboutInfoHeader={'Davlat ro`yxatidan o`tganligi haqidagi guvohnoma'} 
                documentImg={documentImg}
            /> 
            <AboutInfo 
                aboutInfoHeader={'Hodimlar haqida ma`lumot'} 
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'Direktor: Madaminov Komiljon.'}
                tel={'tel: +998(94) 154-07-70'}
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'Manketing bo`limi boshlig`i: Raxmonov Shaxzodbek.'}
                tel={'tel: +998(91) 318-97-99'}
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'Front End Developer: Sharobiddinov Bekzodjon.'}
                tel={'tel: +998(93) 134-24-45'}
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'Back End Developer: Karabayev Timurbek.'}
                tel={'tel: +998(99) 040-40-47'}
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'English teacher: G`ulomov Muhammad.'}
                tel={'tel: +998(94) 304-68-76'}
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'Russian teacher: Mahammadjonov Maqsadjon.'}
                tel={'tel: +998(88) 688-87-88'}
                userInfo={true}
            /> 
            <AboutInfo 
                aboutInfoDescription={'Tasischilar: Rafuqjon Nazirov, Madaminov Shokirjon.'}
                userInfo={true}
            />
            <br />
        </>
    )
}

export default About;
