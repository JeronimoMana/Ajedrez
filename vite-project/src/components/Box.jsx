import PropTypes from 'prop-types';


const Box = ({ color, content, pieza }) => {
    const handleDrag = () => {
        
    }
    return (
        <div className="container_box" style={{ backgroundColor: color }}>
            {pieza != "" ? <img src={pieza} alt="" draggable={true} onDragStart={handleDrag} /> : ""}
            {content ? <p className="parrafo">{content}</p> : ""}
        </div>
    );
};

Box.propTypes = {
    color: PropTypes.string,
    content: PropTypes.string,
    pieza: PropTypes.string
};


export default Box