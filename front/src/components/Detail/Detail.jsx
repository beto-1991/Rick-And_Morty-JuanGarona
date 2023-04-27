import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./Detail.module.css";

function Detail(props) {
  const { id } = useParams();

  const [character, setCharacter] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/detail/${id}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [id]);

  const navigate = useNavigate();

  const onClose = () => {
    navigate("/home");
  };

  return (
    <div className={styles.detailDiv}>
      <div>
        <div>
          <button className={styles.Boton} onClick={() => onClose()}></button>
        </div>

        <h1 className={styles.title}>{character.name}</h1>
        <h3 className={styles.subtitle}>Especie: {character.species}</h3>
        <h3 className={styles.subtitle}>Género: {character.gender}</h3>
        <h3 className={styles.subtitle}>Status: {character.status}</h3>
        <h3 className={styles.subtitle}>Origen: {character.origin}</h3>
      </div>
      <div>
        <img className={styles.detailImg} src={character.image} alt="" />
      </div>
    </div>
  );
}

export default Detail;
