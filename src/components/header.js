import React from "react"
import ilustration from '../imgs/fondo.svg';

export default() => (
    <header className = "bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl flex justify-center items-center"> 
            <div className="flex-1">
            <h1 className="font-bold text-purple-700 text-6xl" >¡Hola! Soy Juan</h1>
            <p className="text-xl"> Creo aplicaciones moviles para android 
            y diseño de interfaces de usuario, también hago copywritting.</p>
            </div>
            <img src={ilustration} alt="Enviroment studie for one men" style={{height: "250px"}}></img>
        </div>
        
    </header>
)
    