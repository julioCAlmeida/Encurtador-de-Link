import './error.css';
import { Link } from 'react-router-dom';

export default function Error(){
    return(
        <div className='container-error'>
            <img src="notfound.svg" alt="Pagina nao encontrada"/>
            <h1>Página não encontrada</h1>
            <Link to="/">
                Voltar para home
            </Link>
        </div>
    )
}