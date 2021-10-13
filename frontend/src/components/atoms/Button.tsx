import styles from "./Button.module.css";

export type ButtonProps = {
    title: string
}

const Button = ({ title }: ButtonProps) => {
    return <button>{title}</button>
}

export default Button;