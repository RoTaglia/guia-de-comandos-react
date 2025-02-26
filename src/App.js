import './App.css';
import { useState } from "react";

const commands = {
    'ls': 'Lista o conteúdo de um diretório.<br>Exemplo: ls /home/usuario',
    'cd': 'Altera o diretório de trabalho.<br>Exemplo: cd /home',
    'pwd': 'Exibe o diretório atual de trabalho.',
    'mkdir': 'Cria um novo diretório.<br>Exemplo: mkdir nova_pasta',
    'rm': 'Remove arquivos ou diretórios.<br>Exemplo: rm arquivo.txt',
    'help': 'Comandos possíveis: cd, ls, mkdir, pwd e rm.'
};

export default function App() {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState("");

    const processCommand = () => {
        const trimmedCommand = command.trim().toLowerCase();
        
        if (trimmedCommand === "") {
            setOutput('<span class="output-err">Por favor, insira um comando válido.<br>Para ajuda, escreva "help"</span>');
            return;
        }

        if (commands[trimmedCommand]) {
            if (trimmedCommand === 'help') {
                setOutput(`<span class="output-cmd">${commands[trimmedCommand]}</span>`);
            } else {
                setOutput(`<span class="output-cmd">${trimmedCommand}: ${commands[trimmedCommand]}</span>`);
            }
        } else {
            setOutput('<span class="output-err">Comando não encontrado.<br>Para ajuda, escreva "help"</span>');
        }
    };

    return (
        <div style={{
            fontFamily: "Arial, sans-serif",
            textAlign: "center",
            margin: "50px",
            backgroundColor: "#f4f4f4",
            height: "100vh"
        }}>
            <div style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
                maxWidth: "90%",
                width: "450px",
                minHeight: "210px",
                margin: "auto"
            }}>
                <h2>Guia de Comandos</h2>
                <input
                    type="text"
                    value={command}
                    onChange={(e) => setCommand(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && processCommand()}
                    placeholder="Digite um comando e aperte enter..."
                    style={{
                        width: "100%",
                        padding: "10px",
                        margin: "10px 0",
                        border: "1px solid #ccc",
                        borderRadius: "5px",
                        boxSizing: "border-box"
                    }}
                />
                <div style={{ display: "flex", justifyContent: "center", gap: "10px" }}>
                    <button
                        onClick={processCommand}
                        style={{
                            padding: "10px 15px",
                            border: "none",
                            color: "white",
                            borderRadius: "5px",
                            cursor: "pointer",
                            backgroundColor: "#007bff"
                        }}
                    >
                        Buscar
                    </button>
                    <button
                        onClick={() => { setCommand(""); setOutput(""); }}
                        style={{
                            padding: "10px 15px",
                            border: "none",
                            color: "white",
                            borderRadius: "5px",
                            cursor: "pointer",
                            backgroundColor: "#ff6666"
                        }}
                    >
                        Limpar
                    </button>
                </div>
                <div style={{ marginTop: "20px", fontWeight: "bold" }}>
                    <span dangerouslySetInnerHTML={{ __html: output }}></span>
                </div>
            </div>
        </div>
    );
}
