import React from 'react';
import "./Footer.css";
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from "react-ticker";

function Footer({ channel, description, song }) {
    return (
        <div className="footer">
            <div className="footer_text">
                <h3>@{channel}</h3>
                <p>{description}</p>
                <div className="ticker_bundle">
                <MusicNoteIcon className="music_note" />
                <Ticker mode="smooth">
                    {({ index }) => (
                    <p>{song}</p>
                    )}
                </Ticker>
                </div>
            </div>
            <img className="spin_record" src="https://static.thenounproject.com/png/934821-200.png" />
        </div>
    )
}

export default Footer
