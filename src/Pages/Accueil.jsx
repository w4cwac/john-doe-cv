import Header from "../component/header.jsx";
import Footer from "../component/footer.jsx";
import "../Style/accueil.css"
import profilPicture from "../img/john-doe-about.jpg"
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState, useEffect } from "react";






export default function Accueil() {
    const texte ={
        color: "#EEE",
        testDecoration: "none",
        fontFamily: "Nunito Sans"
    }

    const texte2 ={
        color: "#444",
        testDecoration: "none",
        fontFamily: "Nunito Sans"
    }

    const Html ={
        width: "95%",
        backgroundColor: "#0d6efd",
    }
    const Css ={
        width: "80%",
        backgroundColor: "#0d6efd",
    }
    const Javascripts ={
        width: "70%",
        backgroundColor: "#0d6efd",
    }
    const React ={
        width: "65%",
        backgroundColor: "#0d6efd",
    }

    const [users, setUsers] = useState([])

    const getUsers = async () => {
        const res = await fetch("https://api.github.com/users/github-john-doe")
        const json = await res.json()
        setUsers(json)
    }

    useEffect(() => {
        getUsers()
    }, [])



    return(
        <div className="background">
            <div className="App">
                <div className="header" id="header">
                    <Header></Header>
                </div>
                <div className="main">
                    <div className="titre">
                        <h1 className="nom col-12 col-sm-12" style={texte}>John Doe</h1>
                        <h2 className="poste col-12 col-sm-12" style={texte}>Développeur web full stack</h2>
                        <a href="#a-propos" className="btn" role="button" style={texte}>En savoir plus</a>
                    </div>
                    <div className="row justify-content-center mx-auto" id="a-propos">
                        <h2 style={texte2}>A-propos</h2>
                        <p className="pres" style={texte2}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Voluptatum, consequuntur? Nam qui soluta magnam ipsa fugiat 
                            dolorum eligendi odit vero voluptate tenetur quia, 
                            expedita laborum consectetur distinctio mollitia natus reprehenderit!
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Cum obcaecati libero consequatur, saepe natus vel necessitatibus 
                            voluptates veniam atque in asperiores sequi modi, dolorem cupiditate 
                            vitae neque beatae, nulla corporis!
                        </p>
                    </div>
                    <div className="competences col-lg-6 col-sm-4 mx-auto">
                        <img className="mb-4" src={profilPicture} alt="Homme brun regardant son ordinateur"></img>
                        <h3 style={texte}>Mes Compétences</h3>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={Html}><p style={texte}>HTML5</p></div>
                        </div>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={Css}><p style={texte}>CSS3</p></div>
                        </div>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={Javascripts}><p style={texte}>JAVASCRIPT</p></div>
                        </div>
                        <div className="progress mb-4">
                            <div className="progress-bar" role="progressbar" style={React}><p style={texte}>REACT</p></div>
                        </div>
                    </div>
                    <div className="compte-github row justify-content-center mx-auto">
                        <h2 className="col-sm-4">Github User</h2>
                        <h5 className="col-sm-4">John DOE</h5>
                        <img className="col-sm-2" alt="chat cartoon bleu" src={users.avatar_url}></img>
                        <div className="infos">
                            <p className="bio" style={texte2}>{users.bio}</p>
                            <p style={texte2}>Abonné: {users.followers}</p>
                            <p style={texte2}>Abonnement: {users.following}</p>
                            <p style={texte2}>Créé le: {users.created_at}</p>
                            <p style={texte2}>Modifié le: {users.updated_at}</p>
                            <p style={texte2}>URL : <a className="liens" href={users.repos_url}>{users.repos_url}</a></p>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <Footer></Footer>
                    
                </div>
            </div>
        </div>
    )
}