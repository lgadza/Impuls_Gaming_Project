import React, { useState, useEffect } from "react";
import * as Icon from "react-bootstrap-icons";
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

const TournamentBracket = () => {
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

  const changeCategory = (event) => {
    let round = [...blankRound];
    round[0] = shuffle(state.categories[event.target.value].items);
    setState((prevState) => ({
      ...prevState,
      champion: "",
      round: round,
    }));
  };

  const onSelect = (item, index, roundIndex) => {
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
  };

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
    <div className="tournament-bracket-render mt-4">
      {/* <div className="category-selection d-flex">
        <div className="text-nowrap">Choose Category: </div>
        <select onChange={changeCategory}>{options}</select>
      </div> */}
      <div className="knockout-container">{rounds}</div>
    </div>
  );
};

const Match = ({ data, checked, index, roundIndex, onSelect }) => {
  let isChecked = checked === data && data !== "";
  return (
    <div className="knockout-match text-small bracket-team">
      <div className="team-name">
        <div>{data}</div>
      </div>
      <div className="team-radio">
        {data ? (
          <input
            type="radio"
            checked={isChecked}
            onChange={() => onSelect(data, index, roundIndex)}
          ></input>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};
const Round = ({ round, champion, data }) => {
  const champions =
    champion && round === 3 ? (
      <div className="champions-container">
        <div className="champions-data">
          <div>
            <Icon.TrophyFill size={40} color="gold" />
          </div>
          <div className="champions-team">{champion}</div>
        </div>
      </div>
    ) : (
      ""
    );
  return (
    <div className="knockout-stage">
      <h5 className="mt-4 text-secondary">Round {round + 1}</h5>
      <div className={"knockout-round-container bracket-" + (round + 1)}>
        {champions}
        {data}
      </div>
    </div>
  );
};

export default TournamentBracket;
