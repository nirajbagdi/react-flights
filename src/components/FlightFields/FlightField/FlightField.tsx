import styles from './FlightField.module.scss';

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
        <div className={styles.field} onClick={handleFieldClick}>
            <span className={styles.label}>{props.label}</span>

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
