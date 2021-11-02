import React, {useState} from 'react';
import axios from 'axios';
import './signUpStyles.css';

// import components
import AboutInfo from '../../components/aboutInfo/AboutInfo';
import Popup from '../../components/popup/Popup';

const SignUp = () => {

    // popup uchun button
    const [buttonPopup, setButtonPopup] = useState(false);


    // input
    const [input, setInput] = useState({
        name: '',
        phone: ''
    });

    function handleChange(event){
        const {name, value} = event.target;
        
        setInput(prevInput => {
            return {
                ...prevInput,
                [name]: value
            }
        })
    }

    function handleClick(event){
        event.preventDefault();
        console.log(input);

        const newNote = {
            name: input.name,
            phone: input.phone
        }

        axios.post('http://e.blackcoders.uz/backend/uz/center/new?', newNote)

    }


    return (
        <div className="sign-up">

            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                <p className="popup-text">Ro'yxatdan o'tganingiz uchun raxmat. Siz ro'yxatga kiritildingiz siz bilan adminstrator bog'lanadi</p>
            </Popup>

            <AboutInfo aboutInfoHeader={'Ro`yxatdan o`tish'} 
                aboutInfoImg={true}
            />

            <div className="sign-up-body">

                <form >

                    <label htmlFor="name">Ism</label>
                    <input className="sign-up-input" autoComplete="off" name="name" value={input.name} type="text" placeholder="Ismingizni kiriting.." onChange={handleChange} />
                      
                    <label htmlFor="number">Telefon nomer</label>
                    <input className="sign-up-input" autoComplete="off" name="phone" value={input.phone} type="number" placeholder="+998" onChange={handleChange} />
                    
                    <button className="sign-up-btn sign-up-btn-submit" type="submit" onClick={handleClick}>Jo'natish</button>
                </form>

            </div>
        </div>
    )
}

export default SignUp;
