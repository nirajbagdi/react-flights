import styles from './FlightField.module.scss';

type Props = {
    label: string;
    placeholder?: string;
    defaultValue?: string;
};

const FlightField: React.FC<Props> = ({ label, placeholder, defaultValue }) => {
    const [detailPrimary, detailSecondary] = defaultValue?.split('|') ?? [];

    return (
        <div className={styles.field}>
            <span className={styles.label}>{label}</span>
            {placeholder && <p className={`${styles.placeholder}`}>{placeholder}</p>}

            {defaultValue && (
                <div className={styles.details}>
                    <p>{detailPrimary}</p>
                    <span>{detailSecondary}</span>
                </div>
            )}
        </div>
    );
};

export default FlightField;
