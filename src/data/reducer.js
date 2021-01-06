import initial from "./initial";

const sendNamesToState = (state, { teamNames }) => {
  return {
      ...state,
      team1Name: teamNames.team1Name,
      team2Name: teamNames.team2Name,
  }
}

const addPlayer = (state, { data }) => {
  return {
      ...state,
      allPlayers: [...state.allPlayers, { name: data.playerName }]
  }
}

const splitIntoTeams = (state, action) => {
  let playerArray = state.allPlayers;

  const shuffle = (playerArray) => playerArray.sort(() => 0.5 - Math.random());

  let newArray = shuffle(playerArray);

  let team1Players = newArray.slice(0, 5);
  let team2Players = newArray.slice(5, 10);

  return {
      ...state,
      team1Players: team1Players,
      team2Players: team2Players,
      teamName1: action.team1Name,
      teamName2: action.team2Name,
  };
};

const reducer = (state, action) => {
    switch (action.type) {
      case "SEND_NAMES_TO_STATE": 
        return sendNamesToState(state, action);
      case "ADD_PLAYER":
        return addPlayer(state, action);
      case "GENERATE_TEAMS":
        return splitIntoTeams(state, action);
      case "RESET": 
      return {
        ...initial,
      };
      default: return state;
    };
};

export default reducer;
