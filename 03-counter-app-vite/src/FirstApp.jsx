const newMessage = 'Josue';

const getMessage = () => {

    return 'React'
}
const FirstApp = ({title = "REACT"}) => {

    return (
        <>
            <h1>First App {title}</h1>
            <p> este es un subtitulo para poder mostrar en el html</p>
        </>
    )
}


export default FirstApp;