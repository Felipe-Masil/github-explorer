import { RepositoryItem } from "./RepositoryItem"
import { useState, useEffect } from "react"
import '../styles/repositories.scss'

// https://api.github.com/orgs/nomeDaOrganização/repos
// https://api.github.com/users/nomeDoUsuario/repos

export function RepositoryList(){
    const [repositories, setRepositories] = useState([]);

    useEffect(()=>{
        fetch('//Cole seu link aqui')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [repositories])

    return(
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                {repositories.map(repository =>{
                    return <RepositoryItem key={repository.name} repository = {repository}/>
                })}
           </ul>           
        </section>
    )
}