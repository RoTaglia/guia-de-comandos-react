import styles from "./Output.module.css";

function Output({ text, isError }) {
    return (
        <div className={styles.output}>
            {text.split("\n").map((line, index) => (
                <span key={index} className={isError ? styles.outputErr : styles.outputCmd}>
                    {line}
                    <br />
                </span>
            ))}
        </div>
    );
}

export default Output;
