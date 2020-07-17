import React from "react"
import ilustration from '../imgs/fondo.svg';
import Form from './contact.form';

export default() => (
    <header className = "bg-gray-300">
        <div className="container mx-auto p-12 max-w-4xl "> 
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-purple-700 text-6xl" >¡Hola! Somos SoftYon</h1>
                    <p className="text-xl"> Creamos sitios web portafolios para profesionales 
                    de cualquier área.</p>
                </div>
                <img src={ilustration} alt="Enviroment studie for one men" style={{height: "250px"}}></img>  
                </div>
                <div>
                    <Form />  
                </div> 
        </div>
    </header>
)
    
