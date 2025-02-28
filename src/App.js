import Input from "./components/input";
import Button from "./components/button";
import Output from "./components/output";
import styles from "./styles/appStyles.module.css";
import useCommandProcessor from "./hooks/useComandProcessor";

export default function App() {
    const { command, setCommand, output, processCommand, clearOutput } = useCommandProcessor();

    return (
        <div className={styles.container}>
            <h2>Guia de Comandos</h2>
            <Input
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && processCommand()}
                placeholder="Digite um comando e aperte enter... Ex. digite 'help'"
            />
            <div className={styles.buttonContainer}>
                <Button text="Buscar" onClick={processCommand} type="primary" />
                <Button text="Limpar" onClick={clearOutput} type="secondary" />
            </div>
            <Output text={output.text} isError={output.isError} />
        </div>
    );
}
