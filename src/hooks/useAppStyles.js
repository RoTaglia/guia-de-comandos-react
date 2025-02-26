const useAppStyles = () => ({
    body: {
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
        margin: "50px",
        backgroundColor: "#f4f4f4",
    },
    container: {
        background: "#fff",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        maxWidth: "90%",
        width: "450px",
        minHeight: "210px",
        margin: "auto",
    },
    input: {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "5px",
        boxSizing: "border-box",
    },
    button: {
        padding: "10px 15px",
        border: "none",
        color: "#fff",
        borderRadius: "5px",
        cursor: "pointer",
    },
    searchButton: {
        backgroundColor: "#007bff",
        transition: "background-color 0.3s",
    },
    searchButtonHover: {
        backgroundColor: "#0056b3",
    },
    clearButton: {
        backgroundColor: "#ff6666",
        transition: "background-color 0.3s",
    },
    clearButtonHover: {
        backgroundColor: "#cc0000",
    },
    output: {
        marginTop: "20px",
        fontWeight: "bold",
    },
    outputCmd: {
        color: "#008000",
        fontWeight: "bold",
    },
    outputErr: {
        color: "#ff0000",
        fontWeight: "bold",
    },
    buttonContainer: {
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    },
  });
  
export default useAppStyles;  