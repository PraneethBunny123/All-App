import './ContactForm.css'

export default function ContactForm() {
    return (
        <section className='contact'>
            <form>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" placeholder="enter full name" className='field' required />
                </div>
                <div className='input-box'>
                    <label>Email</label>
                    <input type="text" placeholder="enter email" className='field' required />
                </div>
                <div className='input-box'>
                    <label>Message</label>
                    <textarea type="text" placeholder="enter your message" className='field mess' required />
                </div>
                <button type="submit">Send message</button>
            </form>
        </section>
    )
}