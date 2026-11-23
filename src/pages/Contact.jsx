
import { MapPin, Mail, Phone, Send } from "lucide-react";
import "../styles/Contact.css";

function Contact() {
    return (
        <div className="contact-page">

            <div className="contact-heading">
                <h4>GET IN TOUCH</h4>
                <h1>Contact Us</h1>
                <p>We would love to hear from you. Get in touch with us.</p>
            </div>

            <div className="contact-container">

                <div className="contact-info">
                    <h2>Let's Connect</h2>
                    <p>Have a question or want to know more? Reach out to us.</p>

                    <div className="contact-item">
                        <MapPin size={25} />
                        <div>
                            <h3>Our Location</h3>
                            <p>VDart Digital</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Mail size={25} />
                        <div>
                            <h3>Email</h3>
                            <p>Contact us through email</p>
                        </div>
                    </div>

                    <div className="contact-item">
                        <Phone size={25} />
                        <div>
                            <h3>Phone</h3>
                            <p>Contact us by phone</p>
                        </div>
                    </div>
                </div>

                <div className="contact-form">
                    <form onSubmit={(e) => e.preventDefault()}>
                        <h2>Send a Message</h2>

                        <label>Your Name</label>
                        <input type="text" placeholder="Enter your name" />

                        <label>Email Address</label>
                        <input type="email" placeholder="Enter your email" />

                        <label>Subject</label>
                        <input type="text" placeholder="Enter subject" />

                        <label>Message</label>
                        <textarea placeholder="Write your message" rows="4" />

                        <button type="submit">
                            Send Message <Send size={17} />
                        </button>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default Contact;
