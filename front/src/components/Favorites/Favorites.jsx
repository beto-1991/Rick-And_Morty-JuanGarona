import { useSelector, useDispatch } from "react-redux";
import styles from "./Favorites.module.css";
import { Link } from "react-router-dom";
import { orderCards, filterCards } from "../../redux/actions";

export default function Favorites() {
  const favorites = useSelector((state) => state.myFavorites);
  const dispatch = useDispatch();

  const handlerOrder = (event) => {
    dispatch(orderCards(event.target.value));
  };

  const handlerFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={styles.favDiv}>
      <div>
        <select name="" id="" onChange={handlerOrder}>
          <option value="order" disabled>
            Order by
          </option>
          <option value="Ascendente">Ascendente</option>
          <option value="Descendente">Descendente</option>
        </select>
        <select name="" id="" onChange={handlerFilter}>
          <option value="filter" disabled>
            Filter by
          </option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Unknown">Unknown</option>
          <option value="Genderless">Genderless</option>
        </select>
      </div>
      {favorites.map((character) => {
        return (
          <div>
            <div className={styles.DivCard}>
              <div style={{ display: "flex", justifyContent: "end" }}>
                <button
                  className={styles.Boton}
                  onClick={() => character.onClose(character.id)}
                ></button>
              </div>

              <Link
                style={{ textDecoration: "none", color: "black" }}
                to={`/detail/${character.id}`}
              >
                <h2 className={styles.title}>{character.name}</h2>

                <div
                  style={{
                    backgroundColor: "#3F979B",
                    padding: "5px",
                    border: "1px solid black",
                    borderRadius: "5px",
                    marginTop: "20px",
                    marginBottom: "20px",
                  }}
                >
                  <img
                    className={styles.CardImg}
                    src={character.image}
                    alt=""
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-around" }}
                  >
                    <h2 className={styles.subtitle}>
                      Species: {character.species}
                    </h2>
                    <h2 className={styles.subtitle}>
                      Gender: {character.gender}
                    </h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
}
