export const BookCard = ({ title, author_name, cover_i }) => {
    return (
        <article>
            <h2>{title}</h2>
            <i>{author_name ? author_name.join(", ") : "Unknown"}</i>
            {cover_i ? (
                <img
                    src={`https://covers.openlibrary.org/b/id/${cover_i}-M.jpg`}
                    alt={title}
                    height="280"
                />
            ) : (
                <p>No cover available</p>
            )}
        </article>
    );
};