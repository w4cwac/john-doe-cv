import Header from "../component/header.jsx";
import Footer from "../component/footer.jsx";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import coder from "../img/blog/coder.jpg";
import croissance from "../img/blog/croissance.jpg";
import google from "../img/blog/google.jpg";
import screens from "../img/blog/screens.jpg";
import seo from "../img/blog/seo.jpg";
import technos from "../img/blog/technos.png";
import "../Style/blog.css";



export default function Blog() {
    const texte2 ={
        color: "#444",
        testDecoration: "none",
        fontFamily: "Nunito Sans"
    }
    return(
        <div className="App border">
            <Header></Header>
            <div className="main-blog">
            <hr className="barre" />
                <h1 style={texte2}>Blog</h1>
                <h2 style={texte2}>Voici quelques articles</h2>

                <hr className="barre" />
                <div className="row blog justify-content-center">
                    <Card className="carte col-lg-3 col-md-4 m-4" id="coder">
                        <Card.Img className="mt-4" variant="top" src={coder} />
                        <Card.Body>
                            <Card.Title style={texte2}>Coder un site de A à Z</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                            <Button style={texte2}>Lire la suite</Button>
                        </Card.Body>
                    </Card>
                    <Card className="carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={croissance} />
                        <Card.Body>
                            <Card.Title style={texte2}>Le principe des interêts composés</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                            <Button style={texte2}>Lire la suite</Button>
                        </Card.Body>
                    </Card>
                    <Card className="carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={google} />
                        <Card.Body>
                            <Card.Title style={texte2}>Comment vendre son produit sur google</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                            <Button style={texte2}>Lire la suite</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="row blog justify-content-center">
                <Card className="carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={screens} />
                        <Card.Body>
                            <Card.Title style={texte2}>Qu'est-ce que le responsive</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                            <Button style={texte2}>Lire la suite</Button>
                        </Card.Body>
                    </Card>
                    <Card className="carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={seo} />
                        <Card.Body>
                            <Card.Title style={texte2}>Le principe de référencement</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                            <Button style={texte2}>Lire la suite</Button>
                        </Card.Body>
                    </Card>
                    <Card className="carte col-lg-3 col-md-4 m-4">
                        <Card.Img className="mt-4" variant="top" src={technos} />
                        <Card.Body>
                            <Card.Title style={texte2}>Les différentes technos utilisables</Card.Title>
                            <Card.Text style={texte2}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Cum magnam id, rerum doloremque praesentium nostrum molestiae 
                                laudantium quam est dicta dolorum voluptate voluptas assumenda soluta, 
                                expedita animi voluptatum tenetur vel!
                            </Card.Text>
                            <Button style={texte2}>Lire la suite</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <hr className="barre" />
            <Footer></Footer>
        </div>
    )
}