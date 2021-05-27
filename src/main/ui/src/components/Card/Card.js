import { makeStyles } from "@material-ui/core"
import classNames from "classnames";
import styles from "../../assets/jss/cardStyle"
import PropTypes from "prop-types";

const useStyles = makeStyles(styles)

export default function Card(props) {
    const classes = useStyles();
    const { className, children, plain, ...rest } = props;
    const cardClasses = classNames({
        [classes.card]: true,
        [className]: className !== undefined
    });
    return (
        <div className={cardClasses} {...rest}>
            {children}
        </div>
    )
}

Card.propTypes = {
    className: PropTypes.string,
    plain: PropTypes.bool,
    children: PropTypes.node
}