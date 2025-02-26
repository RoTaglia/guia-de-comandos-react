import { useState } from "react";

const useCommandProcessor = () => {
    const [command, setCommand] = useState("");
    const [output, setOutput] = useState({ text: "", isError: false });

    const commands = {
        'ls': 'Lista o conteúdo de um diretório.\nExemplo: ls /home/usuario',
        'cd': 'Altera o diretório de trabalho.\nExemplo: cd /home',
        'pwd': 'Exibe o diretório atual de trabalho.',
        'mkdir': 'Cria um novo diretório.\nExemplo: mkdir nova_pasta',
        'rm': 'Remove arquivos ou diretórios.\nExemplo: rm arquivo.txt',
        'help' : 'Comandos possíveis: cd, ls, mkdir, pwd e rm.'
    };

    const formatOutput = (text, isError = false) => ({ text, isError });

    const processCommand = () => {
        const trimmedCommand = command.trim().toLowerCase();
        
        if (!trimmedCommand) {
            setOutput(formatOutput("Por favor, insira um comando válido.\nPara ajuda, escreva 'help'", true));
            return;
        }

        if (trimmedCommand === 'help') {
            setOutput(formatOutput(commands[trimmedCommand]));
        } else {
            setOutput(commands[trimmedCommand]
                ? formatOutput(`${trimmedCommand}: ${commands[trimmedCommand]}`)
                : formatOutput("Comando não encontrado. Para ajuda, escreva 'help'", true));
        }
    };

    const clearOutput = () => {
        setCommand("");
        setOutput({ text: "", isError: false });
    };

    return { command, setCommand, output, processCommand, clearOutput };
};

export default useCommandProcessor;