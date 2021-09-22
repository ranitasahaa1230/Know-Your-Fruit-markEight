import React, { useState } from "react";
import "./styles.css";

const fruitDictionary = {
  "🥝": "Kiwi Fruit",
  "🍓": "Strawberry",
  "🍋": "Lemon",
  "🥭": "Mango",
  "🍑": "Peach",
  "🍍": "Pineapple",
  "🍇": "Grapes",
  "🍉": "Watermelon",
  "🍌": "Banana",
  "🍒": "Cherries",
  "🥑": "Avocado",
  "🍎": "Red Apple",
  "🍏": "Green Apple"
};

const fruitLists = Object.keys(fruitDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function fruitHandler(event) {
    var userInp = event.target.value;
    var meaning = fruitDictionary[userInp];

    if (meaning === undefined) {
      meaning = "No such fruit found!";
    }

    setMeaning(meaning);
  }

  function fruitClickHandler(fruit) {
    var meaning = fruitDictionary[fruit];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <div className="main">
        <h1>Know Your Fruit!</h1>
        <input
          onChange={fruitHandler}
          placeholder="Enter fruit emoji to know its name"
        />
        <h2>{meaning}</h2>
        <h3>Fruits we know: </h3>

        {fruitLists.map((fruit) => {
          return (
            <span
              onClick={() => {
                fruitClickHandler(fruit);
              }}
              key={fruit}
            >
              {fruit}
            </span>
          );
        })}
      </div>
      <footer>
        <div>
          <article>
            Connect with me!{" "}
            <span role="img" aria-label="love">
              💕
            </span>
          </article>
          <a href="https://github.com/ranitasahaa1230">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/github.svg"
            />
          </a>
          <a href="https://twitter.com/RanitaS99535426">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/twitter.svg"
            />
          </a>
          <a href="https://linkedin.com/in/saharanitaa1230dreamer">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/linkedin.svg"
            />
          </a>
          <a href="https://instagram.com/suitcase_full_of_sunshine">
            <img
              alt="links"
              src="https://cdn.jsdelivr.net/npm/simple-icons@3.0.1/icons/instagram.svg"
            />
          </a>
        </div>
      </footer>
    </div>
  );
}
