import Button from "../atoms/Button";
import styles from "./Header.module.css";

export type HeaderProps = {
    title: string,
}

const Header = ({ title }: HeaderProps) => {
    return <div className={styles.Header}>
        <div className={styles.title}>{title}</div>
        <div className={styles.center}>Center Stage</div>
        <div className={styles.right}><Button title="Logount"></Button></div>
    </div>
}

export default Header;