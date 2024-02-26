import Header from "../component/header.jsx";
import Footer from "../component/footer.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import coder from "../img/blog/coder.jpg";
import espaceBienEtre from "../img/portfolio/espace-bien-etre.jpg";
import freshFood from "../img/portfolio/fresh-food.jpg";
import restaurantJaponais from "../img/portfolio/restaurant-japonais.jpg";



export default function Realisation() {
    const texte2 ={
        color: "#444",
        testDecoration: "none",
        fontFamily: "Nunito Sans"
    }

    return(
        <div className="App border">
            <Header></Header>
            <div className="main">
            <hr className="barre" />
                <h1>Mes Réalisations</h1>
                <h2>Voici quelques unes de mes réalisations</h2>

                <hr className="barre" />
                <div className="row blog justify-content-center">
                    <Card className="carte col-lg-3 col-md-4 m-4" id="coder">
                        <Card.Img className="mt-4" variant="top" src={espaceBienEtre} />
                        <Card.Body>
                            <Card.Title style={texte2}>Site vitrine d'un cours de yoga</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted card-footer-realisation" style={texte2} >Site réalisé avec ReactJS</Card.Footer>
                    </Card>
                    <Card className=" carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={freshFood} />
                        <Card.Body>
                            <Card.Title style={texte2}>Commerce de Légumes en Ligne</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted card-footer-realisation" style={texte2} >Site réalisé en Html, Css et JavaScript</Card.Footer>
                    </Card>
                    <Card className="carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={restaurantJaponais} />
                        <Card.Body>
                            <Card.Title style={texte2}>Sakura Savoria, restaurant Japonais</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer className="text-muted card-footer-realisation" style={texte2} >Site réalisé avec Wordpress</Card.Footer>
                    </Card>
                </div>
            </div>
            <hr className="barre" />
            <Footer></Footer>
        </div>
    )
}