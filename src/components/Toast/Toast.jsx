import PropTypes from 'prop-types'
const Toast = ({alert}) => {
  return (
    alert && <div className="toast">
  <div className={`alert text-white alert-info bg-[${alert.color}]`}>
    <span><strong>{alert.message}</strong> {alert.type}</span>
  </div>
</div>
  )
}
Toast.propTypes ={
    alert: PropTypes.object
}
export default Toast;
