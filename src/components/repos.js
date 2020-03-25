import React from "react"
import repos from '../data/repos';
import Repo from '../repo';

export default () => (
    <div className='max-w-4xl mx-auto'>
        <header className='text-center'>
        <h2 className='text-3xl font-bold'>Mi trabajo en Open source</h2>
        <p>Colaboracion y contribucion de codigo</p>
        </header>
        <ul>
            {
                repos.map((repo)=>{
                    return <li> {repo.name} </li>
                })
            }
        </ul>
    </div>
);