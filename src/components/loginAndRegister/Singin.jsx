import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import icono from '../../img/icono2.png'
import telefono from '../../img/Vector.png'
import { auth } from "../../firebase/firebaseConfig";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import './style.scss'
const Singin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  const [phoneNumber, setPhoneNumber] = useState("");
  const validatePhoneNumber = (numberPhone, lengthString) => {
    if (!numberPhone) {
      return false;
    }

    const value = numberPhone.replace(/\D/g, "");
    const valueLength = value.length;
    return { isValid: valueLength === lengthString, value };
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { isValid, value: validNumber } = validatePhoneNumber(
      phoneNumber,
      10
    );
    console.log(isValid, validNumber);
    if (!isValid) {
      alert("el numero debe tener 10 caracteres");
    }
    generateReCaptcha();
    const recapcthaValue = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, `+57${validNumber}`, recapcthaValue)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        console.log(confirmationResult);
        navigate("/verification");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const generateReCaptcha = () => {
    try {
      window.recaptchaVerifier = new RecaptchaVerifier(
        "recaptch-container",
        {
          size: "invisible",

          callback: (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            // onSignInSubmit();
            // console.log(response);
          },
        },
        auth
      );
    } catch (error) {
      console.log(error);
    }
  };



  const onSubmit = (data) => {
    console.log(data)


  }
  return (
    <div className='singin'><img src={icono} className='singin__icono' />
      <div className='singin__titulo'>Sing in</div>
      <div className='singin__text'>Login or create an account with your
        phone number to start ordering</div>
      <form onSubmit={handleSubmit}>
        <label>
          <img src={telefono} className='singin__img' />
          <input type='number' className='singin__number' value={phoneNumber} onChange={(e) => {setPhoneNumber(e.target.value);
          }}
          />
        </label>
        <button className='button' type='submit'>dsada</button>
      </form>
    </div>
  )
}

export default Singin