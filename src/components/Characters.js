const Characters = ({ characters, setCharacters }) => {


    const reset = () => {
        setCharacters(null);
    }

    return (
        <div className="characters">
            <h1>Personajes</h1>
            <span className="back-home" onClick={reset}>Volver a la home</span>
            <div className="container-characters">
                {characters.map((e, index) =>
                (
                    <div className="character-container" key={index}>
                        <div>
                            <img src={e.image} alt={e.name} />
                        </div>
                        <div>
                            <h3>{e.name}</h3>
                            <h6>
                                {e.status === "Alive" ? (
                                    <>
                                        <span className="alive" />
                                        Alive
                                    </>
                                ) : (
                                    <>
                                        <span className="dead" />
                                        Dead
                                    </>
                                )}
                            </h6>
                            <p>
                                <span className="text-grey">Sexo: </span>
                                <span>{e.gender === "Male" ? "Hombre" : "Mujer"}</span>
                            </p>
                            <p>
                                <span className="text-grey">Episodios: </span>
                                <span>{e.episode.length}</span>
                            </p>
                            <p>
                                <span className="text-grey">Especie: </span>
                                <span>{e.species}</span>
                            </p>
                            <p>
                                <span className="text-grey">Origen: </span>
                                <span>{e.origin.name}</span>
                            </p>
                            <p>
                                <span className="text-grey">Localizacion: </span>
                                <span>{e.location.name}</span>
                            </p>
                        </div>
                    </div>
                )
                )}
            </div>
            <span className="back-home" onClick={reset}>Volver a la home</span>
        </div>
    )
}

export default Characters