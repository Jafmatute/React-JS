import PropTypes from 'prop-types';

const newMessage = 'Josue';
const getMessage = () => {

    return 'React'
}
const FirstApp = ({title, subTitle}) => {

    //if (!title) throw new Error('el titulo no existe')

    return (
        <>
            <h1>First App {title}</h1>
            <p> {subTitle}</p>
        </>
    )
}

//PropTypes
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.number.isRequired
}

export default FirstApp;