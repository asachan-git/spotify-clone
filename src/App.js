import React, {useEffect, useState} from "react"

import './App.css';
import Login from "./Login"
import { getTokenFromUrl } from "./spotify";
import Player from "./Player"
import SpotifyWebApi from "spotify-web-api-js"
import {useDataLayerValue} from "./DataLayer"

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  // const getUserData = async(token) => {
  //   const settings = {
  //     headers: {'Authorization': 'Bearer ' + token}
  //   }
  //   const response = await fetch('https://api.spotify.com/v1/me', settings);
  //   const data = await response.json()
  //   return data;
  // }

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token; 

    if(_token) {
      spotify.setAccessToken(_token)

      dispatch ({
        type: "SET_TOKEN",
        token: _token
      });

      console.log("Token", token)

      // getUserData(_token)
      // .then((_user) => {
      //   console.log("User", _user)
      //   dispatch({
      //     type: "SET_USER",
      //     user: _user,
      //   });
      // })
      // .catch(err => console.log("error", err))

      spotify.getMe()
      .then((_user) => {
        dispatch({
          type: "SET_USER",
          user: _user,
        });
      })
      .catch(err => console.log(err));

      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: "SET_PLAYLISTS",
          playlists: playlists,
        });
      });

      spotify.getPlaylist('01zLAJQonxiGmyozzVtCeE').then(response => {
        dispatch({
          type: "SET_DISCOVER_WEEKLY",
          discover_weekly: response
        })
      })
    }
  }, [token]);



  return (
    <div className="app">
      {
        token ? (
          <Player spotify={spotify}/>
        ) : ( 
          <Login />
        )
      }
    </div>
  );
}

export default App;
