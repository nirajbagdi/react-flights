import styles from './FlightField.module.scss';
import utilStyles from 'styles/utils.module.scss';

type Props = {
    label: string;
    placeholder?: string;
    defaultValue?: string;
    children?: React.ReactNode;
    onClick: () => void;
};

const FlightField: React.FC<Props> = props => {
    const [detailPrimary, detailSecondary] = props.defaultValue?.split('|') ?? [];

    const handleFieldClick = () => {
        props.onClick();
    };

    return (
        <div className={`${utilStyles.flightField} ${styles.field}`} onClick={handleFieldClick}>
            <span className={`${utilStyles.label} ${styles.label}`}>{props.label}</span>

            {props.placeholder && !props.defaultValue && (
                <p className={`${styles.placeholder}`}>{props.placeholder}</p>
            )}

            {props.defaultValue && (
                <div className={styles.details}>
                    <p>{detailPrimary}</p>
                    <span>{detailSecondary}</span>
                </div>
            )}

            {props.children}
        </div>
    );
};

export default FlightField;
