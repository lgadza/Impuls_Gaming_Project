import React, { useState, useEffect } from "react";

const categories = [
  {
    name: "Football Teams",
    items: [
      "Arsenal",
      "Chelsea",
      "Liverpool",
      "Man City",
      "Man United",
      "Tottenham",
      "Real Madrid",
      "Barcelona",
      "Atletico Madrid",
      "Bayern Munich",
      "Borussia Dortmund",
      "Juventus",
      "Paris Saint Germain",
      "AC Milan",
      "Inter Milan",
      "Ajax",
    ],
  },
  {
    name: "British Bands",
    items: [
      "The Beatles",
      "The Rolling Stones",
      "The Kinks",
      "The Who",
      "Queen",
      "Led Zeppelin",
      "The Clash",
      "The Jam",
      "New Order",
      "Oasis",
      "Blur",
      "Muse",
      "Arctic Monkeys",
      "The Cure",
      "Black Sabbath",
      "Radiohead",
    ],
  },
  {
    name: "US Presidents",
    items: [
      "Washington",
      "Jefferson",
      "Lincoln",
      "T. Roosevelt",
      "F.D. Roosevelt",
      "Kennedy",
      "Nixon",
      "Clinton",
      "Reagan",
      "G.W. Bush",
      "Obama",
      "Wilson",
      "Trump",
      "Truman",
      "Carter",
      "Eisenhower",
    ],
  },
];

const blankRound = [
  ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""],
  ["", "", "", "", "", "", "", ""],
  ["", "", "", ""],
  ["", ""],
];

const shuffle = (playerList) => {
  for (let i = playerList.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [playerList[i], playerList[j]] = [playerList[j], playerList[i]];
  }
  return playerList;
};

function App(categories, blankRound) {
  const [state, setState] = useState({
    categories: categories,
    round: blankRound.map((arr) => arr.slice()),
    champion: "",
  });

  useEffect(() => {
    let round = [...state.round];
    round[0] = shuffle(state.categories[0].items);
    setState((prevState) => ({ ...prevState, round: round }));
  }, []);

  function changeCategory(event) {
    let round = [...blankRound];
    round[0] = shuffle(state.categories[event.target.value].items);
    setState((prevState) => ({
      ...prevState,
      champion: "",
      round: round,
    }));
  }

  function onSelect(item, index, roundIndex) {
    let champion = state.champion;
    let round = [...state.round];
    if (roundIndex === 3) {
      champion = item;
    } else {
      round[roundIndex + 1][index] = item;
      if (roundIndex === 0) {
        round[2][Math.floor(index / 2)] = "";
        round[3][Math.floor(index / 4)] = "";
        champion = "";
      }
      if (roundIndex === 1) {
        round[3][Math.floor(index / 2)] = "";
        champion = "";
      }
      if (roundIndex === 2) {
        champion = "";
      }
    }
    setState((prevState) => ({
      ...prevState,
      round: round,
      champion: champion,
    }));
  }

  const list = state.round.map((round, i) => {
    return round.map((el, j) => {
      let checked =
        i !== 3 ? state.round[i + 1][Math.floor(j / 2)] : state.champion;
      return (
        <Match
          roundIndex={i}
          data={el}
          checked={checked}
          index={Math.floor(j / 2)}
          onSelect={onSelect}
        />
      );
    });
  });

  const rounds = list.map((el, i) => {
    const key = "round" + i;
    return <Round key={key} data={el} round={i} champion={state.champion} />;
  });

  const options = state.categories.map((el, i) => {
    return <option value={i}>{el.name}</option>;
  });

  return (
    <div className="app">
      <header>
        <h1 className="title">Championship of Anything</h1>
      </header>
      <div className="category-selection">
        <div>Choose Category: </div>
        <select onChange={changeCategory}>{options}</select>
      </div>
      <div className="knockout-container">{rounds}</div>
    </div>
  );
}

function Match(props) {
  let checked = props.checked === props.data && props.data !== "";
  return (
    <div className="knockout-match bracket-team">
      <div className="team-name">
        <div>{props.data}</div>
      </div>
      <div className="team-radio">
        {props.data ? (
          <input
            type="radio"
            checked={checked}
            onChange={() =>
              props.onSelect(props.data, props.index, props.roundIndex)
            }
          ></input>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}
class Round extends React.Component {
  render() {
    const champions =
      this.props.champion && this.props.round === 3 ? (
        <div className="champions-container">
          <div className="champions-data">
            <div>
              <i className="fas fa-trophy" />
            </div>
            <div className="champions-team">{this.props.champion}</div>
          </div>
        </div>
      ) : (
        ""
      );
    return (
      <div className="knockout-stage">
        <h2></h2>
        <div
          className={
            "knockout-round-container bracket-" + (this.props.round + 1)
          }
        >
          {champions}
          {this.props.data}
        </div>
      </div>
    );
  }
}
