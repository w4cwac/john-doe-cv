import Header from "../component/header.jsx";
import Footer from "../component/footer.jsx";
import React, { useRef, useState } from "react"
import emailjs from "@emailjs/browser";
import "../Style/contact.css";
import iconeAdresse from "../img/pin.png";
import iconeTel from "../img/mobile-phone.png";



export default function Contact() {
    const form = useRef();


    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ptlbqr8', 'template_hehgb0t', form.current, '-zAyczA1-KABOJJnO')
            .then((result) => {
                console.log(result.text);
                alert("SUCCESS!");
            }, (error) => {
                console.log(error.text);
                alert("FAILED...", error);
            });

        setName('')
        setPhone('')
        setEmail('')
        setObject('')
        setComments('')
    };

    const [name, setName] = useState('');
    const handleChangeName = e => setName(e.target.value);

    const [phone, setPhone] = useState('');
    const handleChangePhone = e => setPhone(e.target.value);

    const [email, setEmail] = useState('');
    const handleChangeEmail = e => setEmail(e.target.value);

    const [object, setObject] = useState('');
    const handleChangeObject = e => setObject(e.target.value);

    const [comments, setComments] = useState('');
    const handleChangeComments = e => setComments(e.target.value);

    const texte2 ={
        color: "#444",
        testDecoration: "none",
        fontFamily: "Nunito Sans"
    }

    return(
        <div className="App">
            <Header></Header>
            <div className="fond col-lg-12 col-sm-12">
                <h1 style={texte2}>Me Contacter</h1>
                <div className="formulaire row justify-content-center">
                    <h2 style={texte2}>Formulaire de Contact</h2>
                    <form method="post" ref={form} onSubmit={sendEmail} className="contact-form col-lg-12 col-sm-12">
                        <div class="input-box">
                            <div class="input-field field m-2">
                                <input type="text" placeholder="Full Name" id="name" class="item" autocomplete="off" style={texte2} />
                            </div>
                            <div class="input-field field m-2">
                                <input type="text" placeholder="Email Address" id="email" class="item" autocomplete="off" style={texte2} />
                                
                            </div>
                        </div>

                        <div class="input-box">
                            <div class="input-field field m-2">
                                <input type="text" placeholder="Phone Number" id="phone" class="item" autocomplete="off" style={texte2} />
                                
                            </div>
                            <div class="input-field field m-2">
                                <input type="text" placeholder="Subject" id="subject" class="item" autocomplete="off" style={texte2} />
                                
                            </div>
                        </div>

                        <div class="textarea-field field m-2">
                            <textarea name="message" id="message" cols="30" rows="10" placeholder="Your Message" class="item" autocomplete="off" style={texte2}></textarea>
                            
                        </div>

                        <button className="submit-button" type="submit" style={texte2}>Send Message</button>

                    </form>
                </div>
                <div className="mes-coordonnes row justify-content-center">
                    <div className="titre">
                        <h2 style={texte2}>Mes Coordonnées</h2>
                    </div>
                    <div className="contact">
                        <img className="icone" src={iconeAdresse} alt="icone de point de localisation"></img>
                        <p className="adresse-postale text-contact">38 rue de Malzeville
                            54000 Nancy, France </p>
                    </div>
                    <div className="contact ">
                        <img className="icone" src={iconeTel} alt="icone de téléphone"></img>
                        <p className="tel text-contact">06 20 30 40 50</p>
                    </div>
                    <br></br>
                    <iframe classNae="col-12 col-sm-12 col-lg-12 mx-auto m-2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2633.161361514356!2d6.1807870000000005!3d48.7023967!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4794980fb713d9df%3A0x456ce5340d15e7b8!2s38%20Rue%20de%20Malz%C3%A9ville%2C%2054000%20Nancy!5e0!3m2!1sfr!2sfr!4v1708767086401!5m2!1sfr!2sfr" width="600" height="290" style={{ border: 0 }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

                    
                </div>

            </div>
            <Footer></Footer>
        </div>
    )
}