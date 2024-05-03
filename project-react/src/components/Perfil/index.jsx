import styles from './Perfil.module.css';

const perfil = ({ nomeUsuario }) => { // props recebe argumentos propriedades
    
    return (
        <header className={styles.header}>
            <img className={styles.avatar} src={`https://github.com/${nomeUsuario}.png`} />
            <h1 className={styles.name}>{nomeUsuario}</h1>
        </header>
    )
}

export default perfil;
// export default () => {