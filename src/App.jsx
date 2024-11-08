import { useEffect, useState } from "react";
import "./App.css";
import { Loading, ButtonLoading } from "./ui/components";
import { BookCard } from "./books/components";

const BASE_URL = `https://openlibrary.org/search.json?title=history&limit=10`;

export function App() {
    const [books, setBooks] = useState([]); // Estado para almacenar los libros cargados
    const [loading, setLoading] = useState(false); // Estado para manejar si está cargando (inicia en false)
    const [page, setPage] = useState(1); // Estado para controlar la página (offset)

    // Función para cargar libros
    const loadBooks = () => {
        setLoading(true); // Comenzamos el estado de carga
        console.log("Cargando..."); // Verificar que se activa la carga
        fetch(`${BASE_URL}&page=${page}`) // Añadimos la página al endpoint
            .then((res) => res.json())
            .then((data) => {
                if (data.docs && data.docs.length > 0) {
                    setBooks((prevBooks) => [...prevBooks, ...data.docs]); // Añadir nuevos libros al estado existente
                }
                setLoading(false); // Terminamos el estado de carga SOLO después de recibir la respuesta
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setLoading(false); // Asegurarse de que loading sea false en caso de error
            });
    };

    // Llamamos a loadBooks la primera vez que carga el componente
    useEffect(() => {
        loadBooks();
    }, [page]); // Cada vez que cambia la página, se cargan más libros

    // Función para manejar el click del botón "Cargar más"
    const handleLoadMore = () => {
        if (!loading) {
            setPage((prevPage) => prevPage + 1); // Incrementar el número de página
        }
    };

    // Mostrar un indicador de carga completo si no hay libros al principio
    if (books.length === 0 && loading) {
        return (<Loading extraClass={'loading--full'} />);
    }

    return (
        <>
            <main>
                <h1>📚 History Books</h1>
                <section>
                    {books.map((book, index) => (
                        <BookCard
                            key={index} 
                            title={book.title} 
                            author_name={book.author_name} 
                            cover_i={book.cover_i} 
                        />
                    ))}
                </section>
                {/* Pasar loading y handleLoadMore como props */}
                <ButtonLoading loading={loading} onClick={handleLoadMore} />
            </main>
            <span>📜 Zenodoto v1</span>
        </>
    );
}
