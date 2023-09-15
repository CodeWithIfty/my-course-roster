import PropTypes from 'prop-types'
const Toast = ({alert}) => {
  return (
    alert && <div className="toast">
                        <div className={`alert text-white alert-info ${alert.color}`}>
                            <span>{alert.message}</span>
                        </div>
                    </div>
  )
}
Toast.propTypes ={
    alert: PropTypes.object
}
export default Toast;
