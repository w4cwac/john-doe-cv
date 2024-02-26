import Accordion from 'react-bootstrap/Accordion';
import iconeAdresse from "../img/pin.png"
import iconeTel from "../img/mobile-phone.png"
import iconeMail from "../img/mail.png"
import iconeWorld from "../img/world.png"
import Header from "../component/header.jsx"
import Footer from "../component/footer.jsx"


export default function MentionsLegales() {
    const styleAccordion = {
        width: '80rem',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: '50px'
    }

    const styleHeader = {
        fontSize: '20rem'
    }
    return(
        <div className="App">
            <Header></Header>
            <br />
            <br />
            <br />
            <br />


            <h1 id="top">MENTIONS LÉGALES</h1>

            <hr className="barre"></hr>

            <br />
            <br />
            <br />

            <Accordion style={styleAccordion}>
                <Accordion.Item eventKey="0">
                    <Accordion.Header style={styleHeader}>Editeur du site</Accordion.Header>
                    <Accordion.Body>
                        <h2>John Doe</h2>
                        <div className="contact">
                            <img className="icone" src={iconeAdresse} alt="icone de point de localisation"></img>
                            <p className="adresse-postale text-contact">40 rue Laure Diebold <br />
                                69009 Lyon, France <br /></p>
                        </div>
                        <div className="contact">
                            <img className="icone" src={iconeTel} alt="icone de téléphone"></img>
                            <p className="tel text-contact">06 20 30 40 50</p>
                        </div>
                        <div className="contact">
                            <img className="icone" src={iconeMail} alt="icone de boite mail"></img>
                            <p className="mail text-contact">john.doe@gmail.com</p>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Hébergeur</Accordion.Header>
                    <Accordion.Body>
                        <h2>Always Data</h2>
                        <div className="contact">
                            <img className="icone " src={iconeAdresse} alt="icone de point de localisation"></img>
                            <p className="adresse-postale text-contact">91 rue du Faubourg Saint Honoré<br />
                                75008 Paris, France <br /></p>
                        </div>
                        <div className="contact">
                            <img className="icone" src={iconeWorld} alt="icone représentant le monde"></img>
                            <a href="https://www.alwaysdata.com/fr/" className="site-web text-contact">www.alwaysdata.com</a>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Crédits</Accordion.Header>
                    <Accordion.Body>
                        <h2>Crédits</h2>
                        <p className="credits">Site développé par John Doe, étudiant du CEF. <br /> <br />
                            Les images libres de droit sont issues du site <a href="https://pixabay.com">Pixabay</a>.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>


            <Footer link="#top"></Footer>
        </div>
    )
}