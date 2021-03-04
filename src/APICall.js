import { useState, useEffect } from "react";

export const LatestGWData = ( id) => {
  const [data, setData] = useState({});
  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    fetch(proxyurl + "https://fantasy.premierleague.com/api/bootstrap-static/")
      .then((response) => response.json())
      .then((data) => setData({...data.events[id]}))
      .catch((err) => console.log(err));
  }, [ id]);
  return data;
};

export const Players = () => {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    const proxyurl = "https://cors-anywhere.herokuapp.com/corsdemo";
    fetch(proxyurl + "https://fantasy.premierleague.com/api/bootstrap-static/")
      .then((response) => response.json())
      .then((data) => setPlayers([ ...data.elements]))
      .catch((err) => console.log(err));
  }, []);
 

  return players
};
