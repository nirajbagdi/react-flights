import { truncuateText } from 'helpers';

import styles from './FlightField.module.scss';
import utilStyles from 'styles/utils.module.scss';

type Props = {
    expand: boolean;
    childComp?: React.ReactNode;
    isChildCompLarge?: boolean;
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
        <div className={styles.fieldContainer}>
            <div className={`${utilStyles.flightField} ${styles.field}`} onClick={props.onExpand}>
                <span className={`${utilStyles.label} ${styles.label}`}>{props.field.label}</span>

                {props.field.placeholder && !props.field.value && (
                    <p
                        className={`${styles.placeholder} ${
                            props.field.placeholder.length > 25 ? styles.small : ''
                        }`}
                    >
                        {props.field.placeholder}
                    </p>
                )}

                {props.field.value && (
                    <div className={styles.details}>
                        <p>{detailPrimary}</p>
                        <span>{truncuateText(detailSecondary, 35)}</span>
                    </div>
                )}
            </div>

            {props.expand && (
                <div className={`${styles.children} ${props.isChildCompLarge ? styles.slideLeft : ''}`}>
                    {props.childComp}
                </div>
            )}
        </div>
    );
};

export default FlightField;
