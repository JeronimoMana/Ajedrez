import style from "./Box.module.css"
import PropTypes from 'prop-types';



const Box = ({ prop }) => {
    return (
        <div className={style.container_box} style={{ backgroundColor: prop }}>
        </div>
    );
};
Box.propTypes = {
    prop: PropTypes.string.isRequired
};


export default Box