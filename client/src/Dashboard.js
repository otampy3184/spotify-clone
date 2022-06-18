import { useState, useEffect } from "react";
import useAuth from "./useAuth";
import Player from "./Player";
import TrackSerchResult from "./TrackSerchResult";
import { Container, Form } from "react-bootstrap";
import SpotifyWebApi from "spotify-web-api-node";
import axios from "axios";

const spotifyApi = new SpotifyWebApi({
    clientId: "8b945ef10ea24755b83ac50cede405a0",
})

export default function Dashboard ({ code }) {
    const accessToken = useAuth(code)
    const [serch, setSerch] = useState("")
    const [serchResult, setSerchResult] = useState([])
    const [playingTrack, setPlayingTrack] = useState()
    const [lyrics, setLyrics] = useState("")

    function chooseTrack(track) {
        setPlayingTrack(track)
        setSerch("")
        setLyrics("")
    }

    //TODO: 再生中音楽
    useEffect(() => {
        if(!playingTrack) return
    })

    //TODO: アクセス用
    useEffect(() => {
        if(!accessToken) return
    })

    //TODO: 検索結果
    useEffect(() => {
        if(!serch) return setSerchResult([])
        if(!accessToken) return
    })

    // TODO: 戻り値
    return(
        <div></div>
    )
}