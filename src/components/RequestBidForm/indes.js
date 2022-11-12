import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import './requestBidForm.css'

export default function RequestBidForm() {
    // Form Info
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [sqFoot, setSqFoot] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const [serverError, setServerError] = useState(false);

    // Error for form Validation
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [emailError, setEmailError] = useState('');


    const clearErrors = () => {
        setFirstNameError('')
        setLastNameError('')
        setPhoneNumberError('')
        setEmailError('')
    }

    const validateForm  = () => {
        const errors = {}
        const phoneNumberRegex = /^[2-9]\d{2}[2-9]\d{2}\d{4}$/
        const phoneNumberString = phoneNumber.replace(/[^0-9+]/g,'')
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

        clearErrors()

        if(!firstName) {
            errors.FirstName='Please Enter First Name'
            setFirstNameError(errors.FirstName)
        } else if (firstName.length>15) {
            errors.FirstName='Invalid First Name'
            setFirstNameError(errors.FirstName)
        }
        if(!lastName) {
            errors.LastName='Please Enter Last Name'
            setLastNameError(errors.LastName)
        } else if (lastName.length>15) {
            errors.LastName='Invalid Last Name'
            setLastNameError(errors.LastName)
        }
        if(!phoneNumber){
            errors.PhoneNumber='Please Enter Phone Number'
            setPhoneNumberError(errors.PhoneNumber)
        } else if(!phoneNumberRegex.test(phoneNumberString)) {
            errors.PhoneNumber='Invalid Phone Number'
            setPhoneNumberError(errors.PhoneNumber)
        }
        if(!email) {
            errors.Email='Please Enter Email'
            setEmailError(errors.Email)
        } else if(!emailRegex.test(email)) {
            errors.Email='Invalid Email Address'
            setEmailError(errors.Email)
        }
        if(Object.keys(errors).length===0){
            submitForm()
            clearErrors()
        }
    };

    const submitForm = () => {
        const serviceId = process.env.REACT_APP_SERVICE_ID;
        const templateId = process.env.REACT_APP_TEMPLATE_ID;
        const publicKey = process.env.REACT_APP_PUBLIC_KEY;
        const templateParams = {
            firstName,
            lastName,
            email,
            phoneNumber,
            address,
            city,
            sqFoot,
            message
        };

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then(res => {
                setEmailSent(true);
            })
            .catch(error => {
                console.log(error);
                setServerError(true)
            })

        setFirstName('');
        setLastName('');
        setEmail('');
        setPhoneNumber('');
        setAddress('');
        setCity('');
        setSqFoot('');
        setMessage('');
    }

    const closePopUp = () => {
        setEmailSent(false)
        setServerError(false)
        window.location.replace('/')
    }

  return (
    <div>
        <div className={emailSent | serverError ? 'contact-form filter-blur' : 'contact-form'}>
            <h3>Contact Info</h3>
            <div className="name-container">
                <span className="requestBid-label firstName-label">First Name<span className="required-field-star">*</span>
                <span className={firstNameError ? 'visable firstName-error text-validation': 'hidden'}>{firstNameError}</span>
                </span>
                <span className="requestBid-label lastName-label">Last Name<span className="required-field-star">*</span></span>
                <span className={lastNameError ? 'visable lastName-error text-validation': 'hidden'}>{lastNameError}</span>
                <br />
                <input className='requestBid-form firstName-input' type="text" autoComplete='given-name' value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input className='requestBid-form lastName-input' type="text" autoComplete='family-name' value={lastName} onChange={e => setLastName(e.target.value)} />
            </div>
            <div className="contact-container">
                <span className="requestBid-label phoneNumber-label">Phone Number<span className="required-field-star">*</span>
                <span className={phoneNumberError ? 'visable phoneNumber-error text-validation': 'hidden'}>{phoneNumberError}</span>
                </span>
                <span className="requestBid-label email-label">Email<span className="required-field-star">*</span></span>
                <span className={emailError ? 'visable email-error text-validation': 'hidden'}>{emailError}</span>
                <br />
                <input className='requestBid-form phoneNumber-input' type="tel" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)} />
                <input className='requestBid-form email-input' type="email" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <h3>Your Project Information</h3>
            <span>Project Locaion/Address</span>
            <input className='requestBid-form address-input' type="text" autoComplete='street-address' value={address} onChange={e => setAddress(e.target.value)} />
            <div className='project-specifics'>
                <span className="requestBid-label city-label">City</span>
                <span className="requestBid-label sqFoot-label">Approximate Square Footage</span>
                <br />
                <input className='requestBid-form city-input' type="text" autocomplete="address-level2" value={city} onChange={e => setCity(e.target.value)} />
                <input className='requestBid-form sqFoot-input' type="text" autocomplete="false" value={sqFoot} onChange={e => setSqFoot(e.target.value)} />
            </div>
            <span className="requestBid-label message-label">Any Extra Details?</span>
            <textarea className='requestBid-form message-input' value={message} onChange={e => setMessage(e.target.value)}></textarea>
            <button className='submit-bid-btn' onClick={validateForm}>Submit Bid Request</button>
        </div>
        
        <div className={emailSent | serverError ? 'blur' : ''}></div>

        <section className={emailSent ? 'visible popUp' : 'hidden'}>
            <div className='popUp-content-wrapper'>
                <i className="material-icons success-icon">check_circle_outline</i>
                <p className='close-icon' onClick={() => closePopUp()}>X</p>
                <p className='popUp-title'>Thank you!</p>
                <p className='popUp-text'>We will be in touch in no time!</p>
            </div>
        </section>
        <section className={serverError ? 'visible popUp' : 'hidden'}>
            <div className="popUp-content-wrapper">
                <i className="material-icons error-icon">error_outline</i>
                <p className='close-icon' onClick={() => closePopUp()}>X</p>
                <p className='popUp-title'>Oops!</p>
                <p className='popUp-text'>Your Bid Request was not sent!<br />Please check your network connection and try again.</p>
            </div>
        </section>
    </div>
  )
}
