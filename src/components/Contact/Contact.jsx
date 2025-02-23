import emailImage from "../../assets/email.png";
import linkedInImage from "../../assets/linkedin.png";

const Contact = () => {
    return (
        <section id="contact">
            <p className="section__text__p1">Get in Touch</p>
            <h1 className="title">Contact Me</h1>
            <div className="contact-info-upper-container">
                <div className="contact-info-container">
                    <img
                        src={emailImage}
                        alt="Email icon"
                        className="icon contact-icon email-icon"
                    />
                    <p><a href="mailto:dushyantss8@gmail.com">dushyantss8@gmail.com</a></p>
                </div>
                <div className="contact-info-container">
                    <img
                        src={linkedInImage}
                        alt="LinkedIn icon"
                        className="icon contact-icon"
                    />
                    <p><a target="_blank" href="https://www.linkedin.com/in/cooldv235/">LinkedIn</a></p>
                </div>
            </div>
        </section>
    )
}

export default Contact
