import { useEffect, useState } from "react";
import style from './ReposList.module.css';

const ReposList = ({ nomeUsuario }) => {
    const [repos, setRepos] = useState([]);
    const [estaCarregando, setEstaCarregando] = useState(true);

    useEffect(() => {
        setEstaCarregando(true);
        fetch(`https://api.github.com/users/${nomeUsuario}/repos`)
        .then(resp => resp.json())
        .then(resJson => {
            setTimeout(() => {
                setEstaCarregando(false);
                setRepos(resJson);
            }, 2000);
        })
    }, [nomeUsuario]);

    return (
        <div className="container">
            {estaCarregando ? (
                <h2>Carregando o repositório...</h2>
            ) : (
                <ul className={style.list}>
                    {/*{repos.map(repositorio => ( */}
                    {repos.map(({ id, name, language, html_url }) => ( /* desestruturação */
                        <li className={style.listItem} key={id}>
                            <div className={style.itemName}>
                                <b>Nome:</b> {name}
                            </div>
                            <div className={style.itemLinguage}>
                                <b>Linguagem:</b> {language}
                                <a className={style.itemLink} target="_blank" href={html_url}>Visitar o Github</a>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}



export default ReposList;