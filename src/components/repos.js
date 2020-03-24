import React, { useEffect,useState } from "react"
//import repos from '../data/repos';
import Repo from './repo';

//componentDidMount componentDidUpdate
export default () => {
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);
    //con repos obtenemos los datos y setRepos los actualizamos
    //repos  inicialmente es un arreglo vacio
    useEffect(()=>{

        const data = sessionStorage.getItem("repos");
        //let myRepos;
        if (data){
            let myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            myRepos = myRepos.slice(1,11);
            return setRepos(myRepos);
        }
        async function fetchRepos (){
            //hace una solicitud por los repositorios
            const response = await fetch("https://api.github.com/users/allmigth/repos");
            //lee la respuesta u la interpreta como json
            let myRepos = await response.json();
            setReposCount(myRepos.length);
            //retorna ese json
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchRepos();
        //es un lugar inceible para realizar peticiones a la web
    },[]);
    
    return (
    <div className='max-w-4xl mx-auto mt-12'>
        <header className='text-center'>
        <h2 className='text-3xl font-bold'>Mi trabajo en Open source</h2>
        <p>Colaboracion y contribucion de codigo</p>
        </header>
        <ul className='repos-list'>
            {
                repos.map((repo)=>{
                /*por cada repositorio se presenta
                es necesario colocar la key para identificarlo*/
                return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
        <div className="mt-8 text-center">
            <a href="https://github.com/allmigth" className="btn" target="_blank" rel="noopener noreferrer"> 
            Ver mas en Github ({reposCount}) </a>
            
        </div>
    </div>
    );
};