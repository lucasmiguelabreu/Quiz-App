import Quiz from '../img/quiz.svg';
import './Welcome.css';

function Welcome() {
    
    return (
        <div id="welcome">
            <h1>Seja Bem-vindo!</h1>
            <p>Clique no botão abaixo para começar</p>
            <button>Iniciar</button>
            <img src={Quiz} alt="Inico do Quiz"/>
        </div>
    )
}

export default Welcome;