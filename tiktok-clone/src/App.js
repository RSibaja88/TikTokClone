import React, {useState, useEffect} from 'react';
import Video from "./Components/Video";
import db from "./firebase";
import './App.css';

function App() {
  const [ttvideos, setTTVideos] = useState([])

  useEffect(() => {
    db.collection("ttvideos").onSnapshot((snapshot) =>
    setTTVideos(snapshot.docs.map((doc) => doc.data()))
  );
}, []);

  return (
    <div className="app">
    <div className="app_videos">
        {ttvideos.map(
          ({ url, channel, description, song, likes, comments, shares}) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              comments={comments}
              shares={shares}
            />
          )
        )}
    </div>
    </div>
  );
}

export default App;
