import React from "react"
import ilustration from '../imgs/fondo.svg';
import Form from './contact.form';

export default() => (
    <header className = " flex-1 bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl "> 
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700" >Soy Juan</h1>
                    <p className="text-xl font-light"> Desarrollador de software para android y la web.</p>
                </div>
                <img src={ilustration} alt="Enviroment studie for one men" style={{height: "180px"}}></img>  
                </div>
     
    <div>
    <a href="https://store-optafolio.netlify.app/" className="text-xl"> Tienda </a>
    </div> 
    
    </div>
    </header>
)
    
