import PropTypes from 'prop-types';


const Box = ({ color, content }) => {
    return (
        <div className="container_box" style={{ backgroundColor: color }}>
            {content ? <p className="parrafo">{content}</p> : ""}
        </div>
    );
};

Box.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string
};


export default Box