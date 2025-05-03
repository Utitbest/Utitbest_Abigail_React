import React from 'react'
import './Contact.css'
import { msg_icon, mail_icon, phone_icon, location_icon, white_arrow } from '../../assets'
const Contact = () => {
    const [result, setResult] = React.useState("")

    const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....")
    const formData = new FormData(event.target);

    formData.append("access_key", "92424037-39a0-4db4-af49-7c08701cb12d");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      console.log("Success", res);
      setResult(res.message)
      event.target.reset(); 
    }else{
        console.log("Error", res);
        setResult(res.message)
    }
  };

  return (
    <div className='contact' name="contact">
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact 
                information below. Your feedback, questions, and suggestion are 
                important to us as we strive to provide exceptional 
                service to our university community.
            </p>
            <ul>
                <li><img src={mail_icon} alt="" /> utitbesta@gmail.com</li>
                <li><img src={phone_icon} alt="" />+234 8063308044</li>
                <li><img src={location_icon} alt="" />293 Nwaniba, Uyo<br/> Akwa Ibom State, Nigeria </li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onSubmit}>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required/>
                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required/>
                <label htmlFor="">Write your message here</label>
                <textarea name="message" rows="6" placeholder="Enter your message" required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact