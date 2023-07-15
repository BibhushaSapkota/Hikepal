import './ContactForm.css'
import {message} from 'antd'
function ContactForm(){
    return(
        <div className='form-container'>
            <h1>Get in touch</h1>
            <form>
                <input type="text" placeholder="Name"/>
                <input type="email" placeholder="Email"/>
                <textarea placeholder="Message"></textarea>
                <button onClick={()=>{message.success('Message sent successfully')}}>Send</button>
            </form>
        </div>
    )

}

export default ContactForm