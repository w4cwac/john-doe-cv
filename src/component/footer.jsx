import React from "react";
import { Link } from "react-router-dom";
import github from "../img/github.svg";
import twitter from "../img/x-twitter.svg";
import linkedin from "../img/linkedin.png";
import "../Style/footer.css"

export default function Footer() {
    const linkPage = {
        color: "black",
        textDecoration: "none",
    }

    const texte2 ={
        color: "#444",
        testDecoration: "none",
        fontFamily: "Nunito Sans",
        textDecoration: "none",
    }

    return(
        <div className="footer">
            <div className="column row justify-content-center">
                <div className="infos col-lg-3 col-sm-5 col-10">
                    <h4 style={texte2}>John DOE</h4>
                    <p className="adresse-postale" style={texte2}>38 rue de Malzeville <br />
                        54000 Nancy, France<br/>
                        Téléphone : 06 12 34 56 78
                    </p>
                    <div className="social-network">
                        <a href="">
                            <img src={github} alt="profil-github" />
                        </a>

                        <a href="">
                            <img src={twitter} alt="profil-twitter" />
                        </a>

                        <a href="">
                            <img src={linkedin} alt="profil-linkedin" />
                        </a>
                    </div>
                </div>
                <div className="liens col-lg-3 col-sm-5 col-10">
                    <h4 style={texte2}>Liens utiles</h4>
                    <div>
                        <Link className="link" style={texte2} to="/">Accueil</Link>
                    </div>
                    <div>
                        <Link className="link" style={texte2} to="/services">Services</Link>
                    </div>
                    <div>
                        <Link className="link" style={texte2} to="/contact">Me Contacter</Link>
                    </div>
                    <div>
                        <Link className="link" style={texte2} to="/mentionslegales">Mentions Legales</Link>
                    </div>
                </div>
                <div className="realisations col-lg-3 col-sm-5 col-10">
                    <h4>Mes Réalisations</h4>
                    <div>
                        <a style={texte2} href="/realisations/.espace-bien-etre">Espace Bien-être</a>
                    </div>
                    <div>
                        <a style={texte2} href="/realisations/.fresh-food">Fresh-Food</a>
                    </div>
                    <div>
                        <a style={texte2} href="/realisations/.restaurant-japonais">Sakura Savoria</a>
                    </div>
                </div>
                <div className="articles col-lg-3 col-sm-5 col-10">
                    <h4>Mes derniers articles</h4>
                    <div>
                        <a style={texte2} href="/blog/.technos">Les Différentes technologies</a>
                    </div>
                    <div>
                        <a style={texte2} href="/blog/.screens">Comment faire du responsive</a>
                    </div>
                    <div>
                        <a style={texte2} href="/blog/#coder">Coder un site de A à Z</a>
                    </div>
                </div>
            </div>
            <div className="copyright">
                <p style={texte2}>© Designed by Hugo Wacogne</p>
            </div>
        </div>
    );
}