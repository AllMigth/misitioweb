//https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fgithub.com%2Fdjango%2Fdjango%2Freleases.atom

import React,{useEffect, useState} from 'react';
import Posts from './posts';
import Post from './post';

export default () => {
//VAMOS A CONSULTAR VIA AJAX
//Y VAMOS A GUARDAR LA SESION STORAGE LA RESPUESTA DEL SERVER
//PARA NO CONSULTARLA CONSTANTEMENTE
    const [posts, setPost] = useState([]);
    useEffect(()=>{
        const data = sessionStorage.getItem('posts');
        if (data){
            setPost(JSON.parse(data));
        }
        let myPost;
        

        async function getMediumPost(){
            const response = await fetch("https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40Uriel_Hedz")
            myPost = await response.json();
            sessionStorage.setItem('posts',JSON.stringify(myPost.items));
            setPost(myPost.items);
        }
        getMediumPost();
    },[]);
    return (
        <div className='max-w-4xl mx-auto overflow-x-scroll'>
        <Posts 
        data={posts} 
        card = {Post}
        title="Articulos de Uriel Hernandez en Medium"/>
        </div>
    );
}