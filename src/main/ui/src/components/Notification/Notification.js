import classes from './Notification.module.css';

const Notification = (props) => {
    let specialClasses = '';

    if (props.status === 'error')
        specialClasses = classes.error;
    if (props.status === 'success')
        specialClasses = classes.success;

    let cssClasses = `${classes.notification} ${specialClasses}`;

    return (
        <div className={cssClasses}>
            <h2>{props.title}</h2>
            <p> {props.message} </p>
        </div>
    );
};

export default Notification;