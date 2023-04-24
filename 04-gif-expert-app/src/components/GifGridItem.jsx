import PropTypes from "prop-types";

export const GifGridItem = ({title, url}) => (

<div className="card">
<img src={ url } alt={title} />
</div>

);

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}