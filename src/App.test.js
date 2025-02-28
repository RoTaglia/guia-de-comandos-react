import { render, screen, fireEvent } from "@testing-library/react";
import App from "./App";

describe('<App />', () => {
  
  test("Should display the title correctly", () => {
    render(<App />);
    const title = screen.getByText(/Guia de Comandos/i);
    expect(title).toBeInTheDocument();
  });

  test("Should have the 'Buscar' and 'Limpar' buttons present", () => {
    render(<App />);
    expect(screen.getByText("Buscar")).toBeInTheDocument();
    expect(screen.getByText("Limpar")).toBeInTheDocument();
  });

test("Should display the correct output when entering a valid command", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite um comando e aperte enter/i);
    const searchButton = screen.getByText("Buscar");

    fireEvent.change(input, { target: { value: "ls" } });
    fireEvent.click(searchButton);

    expect(await screen.findByText(/ls: Lista o conteúdo de um diretório/i)).toBeInTheDocument();
});

test("Should show an error message when entering an invalid command", async () => {
    render(<App />);

    const input = screen.getByPlaceholderText(/Digite um comando e aperte enter/i);
    const searchButton = screen.getByText("Buscar");

    fireEvent.change(input, { target: { value: "comando_invalido" } });
    fireEvent.click(searchButton);

    expect(await screen.findByText(/Comando não encontrado/i)).toBeInTheDocument();
});


  test("Should clear the displayed content when clicking the 'Limpar' button", () => {
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
