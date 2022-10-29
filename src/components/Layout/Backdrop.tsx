import styles from './Backdrop.module.scss';

type Props = {
    show?: boolean;
    onClose: () => void;
};

const Backdrop: React.FC<Props> = props => {
    if (!props.show) return null;
    return <div className={styles.backdrop} onClick={props.onClose} />;
};

export default Backdrop;
