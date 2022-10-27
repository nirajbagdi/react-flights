import styles from './FlightField.module.scss';

type Props = {
    label: string;
    placeholder?: string;
    defaultValue?: string;
};

const FlightField: React.FC<Props> = props => {
    const [detailPrimary, detailSecondary] = props.defaultValue?.split('|') ?? [];

    return (
        <div className={styles.field}>
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
        </div>
    );
};

export default FlightField;
