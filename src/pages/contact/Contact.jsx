import React from 'react';
import { YMaps, Map, Placemark, TypeSelector, ZoomControl } from 'react-yandex-maps';
import './contactStyles.css';

// import components
import ContactHero from '../../components/contactHero/ContactHero';
import ContactInfo from '../../components/contactInfo/ContactInfo';
import AboutInfo from '../../components/aboutInfo/AboutInfo';


// import images
import contactHeroImg from '../../images/contactHero.svg';


const Contact = () => {
    return (
        <>
            <ContactHero contactHeroImg={contactHeroImg} contactHeroHeader={'Biz bilan aloqa'} />
            <AboutInfo 
                aboutInfoHeader={'Biz bilan bog`lanish'} 
                aboutInfoDescription={'Black Coders Team o`quv markazida o`qing va o`z kasbingizni toping. Ish vaqti: 9:00 - 22:00 . Yakshanba dam olish kuni. Ish vaqtining istalgan soatida xaritada ko`rsailgan manzilga kelishingiz mumkin. O`quv markaz haqida ma`lumot olish yoki markaz haqidagi istalgan savollaringizni Operatordan so`rashingiz mumkin. +998(94) 172-33-43 '} 
                aboutInfoImg={true}
            /> 
            <div className="contact-control-box">
                <ContactInfo/>
                <div className="contact-map-box">
                    <YMaps>
                        <div>
                        <Map 
                            defaultState={{ center: [41.0076530, 71.6407280], zoom: 16 }}  
                            className="contact-map"
                            >

                                <Placemark geometry={[41.007124, 71.642919]} />
                                <TypeSelector options={{ float: 'right' }} />
                                <ZoomControl options={{ float: 'left' }} />

                        </Map>
                        </div>
                    </YMaps>
                </div>
            </div>
        </>
    )
}

export default Contact
