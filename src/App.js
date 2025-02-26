import './App.css';
import useCommandProcessor from "./hooks/useComandProcessor";
import useAppStyles from "./hooks/useAppStyles";

export default function App() {
    const { command, setCommand, output, processCommand, clearOutput } = useCommandProcessor();
    const styles = useAppStyles();

    return (
        <div style={styles.container}>
            <div style={styles.innerContainer}>
                <h2>Guia de Comandos</h2>
                <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && processCommand()}
                    placeholder="Digite um comando e aperte enter..."
                    style={styles.input}
                />
                <div style={styles.buttonContainer}>
                    <button
                        onClick={processCommand}
                        style={{ ...styles.button, ...styles.searchButton }}
                    >
                        Buscar
                    </button>
                    <button
                        onClick={clearOutput}
                        style={{ ...styles.button, ...styles.clearButton }}
                    >
                        Limpar
                    </button>
                </div>
                <div style={styles.output}>
                    {output.text.split("\n").map((line, index) => (
                        <span key={index} style={output.isError ? styles.outputErr : styles.outputCmd}>
                            {line}
                            <br />
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}