import styles from "./button.module.css";

function Button({ text, onClick, type = "primary" }) {
    return (
        <button
            className={`${styles.button} ${styles[type]}`}
            onClick={onClick}
        >
            {text}
        </button>
    );
}

export default Button;