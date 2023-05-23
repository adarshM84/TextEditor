import PropTypes from 'prop-types';


function Alert(props) {
    const capitalFirst = (str) => {
        str = str.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    return (
        <div className='mb-3' style={{height:"25px"}}>
            {
                props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible my-3" role="alert"`}>
                    <strong>{capitalFirst(props.alert.type)} </strong> : {props.alert.msg}
                    <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            }
        </div>

    );
}

export default Alert;

Alert.propTypes = {
    msg: PropTypes.string,
    type: PropTypes.string
}

