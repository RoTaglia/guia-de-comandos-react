import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe("Guia de Comandos - Testes de Interação", () => {
  
  test("exibe o título corretamente", () => {
    render(<App />);
    const title = screen.getByText(/Guia de Comandos/i);
    expect(title).toBeInTheDocument();
  });

  test("os botões 'Buscar' e 'Limpar' estão presentes", () => {
    render(<App />);
    expect(screen.getByText("Buscar")).toBeInTheDocument();
    expect(screen.getByText("Limpar")).toBeInTheDocument();
  });

  test("exibe a saída correta ao inserir um comando válido", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite um comando e aperte enter/i);
    const searchButton = screen.getByText("Buscar");

    fireEvent.change(input, { target: { value: "ls" } });
    fireEvent.click(searchButton);

    expect(screen.getByText(/ls: Lista o conteúdo de um diretório/i)).toBeInTheDocument();
  });

  test("exibe mensagem de erro ao inserir um comando inválido", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite um comando e aperte enter/i);
    const searchButton = screen.getByText("Buscar");

    fireEvent.change(input, { target: { value: "comando_invalido" } });
    fireEvent.click(searchButton);

    expect(screen.getByText(/Comando não encontrado/i)).toBeInTheDocument();
  });

  test("o botão 'Limpar' apaga o conteúdo da tela", () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite um comando e aperte enter/i);
    const searchButton = screen.getByText("Buscar");
    const clearButton = screen.getByText("Limpar");

    fireEvent.change(input, { target: { value: "ls" } });
    fireEvent.click(searchButton);

    expect(screen.getByText(/ls: Lista o conteúdo de um diretório/i)).toBeInTheDocument();

    fireEvent.click(clearButton);

    expect(screen.queryByText(/ls: Lista o conteúdo de um diretório/i)).not.toBeInTheDocument();
  });

});
