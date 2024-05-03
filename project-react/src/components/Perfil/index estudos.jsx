import './perfil.css'

const perfil = ({endereco, nome}) => { // props recebe argumentos propriedades
    // const { endereco, nome } = props; //desestruturar
    const usuario = {
        nome: 'Douglas Rodrigues José',
        avatar: 'https://github.com./douglasjose3.png'
    }
    
    return (
        <header>
            <img className='perfil-avatar' src={usuario.avatar}/>
            <h1 className='perfil-titulo'>{usuario.nome}</h1>

            <img className='perfil-avatar' src={endereco} />
            <h2 className='perfil-titulo'>{nome}</h2>
        </header>
    )
}

export default perfil;
// export default () => {