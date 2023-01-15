export function HangmanWord({ guessedLetters, wordToGuess }) {
  console.log(wordToGuess)

  return (
    <div
      style={ {
        display: "flex",
        gap: ".25rem",
        fontSize: "6rem",
        fontWeight: "bold",
        textTransform: "uppercase",
        fontFamily: "monospace"
      } }>
      { wordToGuess.split("").map((letter, index) => (
        <span style={ { borderBottom: ".1em solid black" } } key={ index }>
          <span style={ {
            visibility: guessedLetters.includes(letter) ? "visible" : "hidden",
          } }>{ letter }</span>
        </span>
      )) }
    </div>
  )
}