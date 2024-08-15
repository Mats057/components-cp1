import './Card.css'

export const Card = ({ corFundo, titulo, icone, numero, descricao }) => {
    return (
        <div className="card" style={{backgroundColor : corFundo}}>
            <img src={icone} alt={'Ícone do(a) ' + titulo} />
            <h1>{numero}</h1>
            <h2>{titulo}</h2>
            <p>{descricao}</p>
        </div>
    )
}