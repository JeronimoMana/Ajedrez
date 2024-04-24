import style from "./Box.module.css"
import PropTypes from 'prop-types';


const Box = ({ color }) => {
    return (
        <div className={style.container_box} style={{ backgroundColor: color }}>
        </div>
    );
};

Box.propTypes = {
    color: PropTypes.string.isRequired 
};


export default Box