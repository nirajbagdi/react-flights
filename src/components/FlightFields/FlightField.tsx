import styles from './FlightField.module.scss';
import utilStyles from 'styles/utils.module.scss';

type Props = {
    expand: boolean;
    childComp?: React.ReactNode;
    onExpand: () => void;

    field: {
        label: string;
        value?: string;
        placeholder?: string;
    };
};

const FlightField: React.FC<Props> = props => {
    const [detailPrimary, detailSecondary] = props.field.value?.split('|') ?? [];

    return (
        <div className={`${utilStyles.flightField} ${styles.field}`} onClick={props.onExpand}>
            <span className={`${utilStyles.label} ${styles.label}`}>{props.field.label}</span>

            {props.field.placeholder && !props.field.value && (
                <p className={`${styles.placeholder}`}>{props.field.placeholder}</p>
            )}

            {props.field.value && (
                <div className={styles.details}>
                    <p>{detailPrimary}</p>
                    <span>{detailSecondary}</span>
                </div>
            )}

            {props.expand && <div className={styles.children}>{props.childComp}</div>}
        </div>
    );
};

export default FlightField;