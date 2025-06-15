export default function ContactForm() {
    return (
        <section>
            <form>
                <h2>Contact Form</h2>
                <div>
                    <label>Full Name</label>
                    <input type="text" placeholder="enter full name" required />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" placeholder="enter email" required />
                </div>
                <div>
                    <label>Message</label>
                    <input type="text" placeholder="enter your message" required />
                </div>
            </form>
        </section>
    )
}