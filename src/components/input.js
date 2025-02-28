import styles from "./Input.module.css";

function Input({ value, onChange, onKeyDown, placeholder }) {
    return (
        <input
            className={styles.input}
            type="text"
            value={value}
            onChange={onChange}
            onKeyDown={onKeyDown}
            placeholder={placeholder}
        />
    );
}

export default Input;
