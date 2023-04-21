import PropTypes from 'prop-types';

const newMessage = 'Josue';
const getMessage = () => 'React';

const FirstApp = ({title, subTitle, name}) => {

    //if (!title) throw new Error('el titulo no existe')

    return (
        <>
            <div data-testid="test-title">{title}</div>
            <p> {subTitle}</p>
            <code>{name}</code>
        </>
    )
}

//PropTypes
FirstApp.propTypes = {
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}

//DefaultProps --entran primero que los PropTypes
FirstApp.defaultProps = {
    name: 'Josue Flores',
    subTitle: 123,
    //title: "No hay titulo"
}

export default FirstApp;