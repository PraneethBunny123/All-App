import './ContactForm.css'

export default function ContactForm() {

    async function onSubmit(e) {
        e.preventDefault()
        const formData = new FormData(e.target)

        formData.append("access_key", "94f8b0a9-fd1f-48df-b31f-91e3335312cb");

        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: json
        })
        
        const resData = await response.json()

        if (resData.success) {
            console.log("Success", resData);
        }
    }

    return (
        <section className='contact'>
            <form onSubmit={onSubmit}>
                <h2>Contact Form</h2>
                <div className='input-box'>
                    <label>Full Name</label>
                    <input type="text" placeholder="enter full name" className='field' name='name' required />
                </div>
                <div className='input-box'>
                    <label>Email</label>
                    <input type="text" placeholder="enter email" className='field' name='email' required />
                </div>
                <div className='input-box'>
                    <label>Message</label>
                    <textarea type="text" placeholder="enter your message" className='field mess' name='message' required />
                </div>
                <button type="submit">Send message</button>
            </form>
        </section>
    )
}