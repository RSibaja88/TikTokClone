import React, {useState} from 'react'
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import ChatIcon from '@material-ui/icons/Chat';
import ShareIcon from '@material-ui/icons/Share';
import "./Sidebar.css";


function Sidebar({ likes, comments, shares }) {
    const [liked, setLiked] = useState(false);


    return (
        <div className="sidebar">
          <div className="sidebar_buttons">
          {liked ? (
          <FavoriteIcon fontSize="large" onClick={(e) => setLiked(false)} />
        ) : (
          <FavoriteBorderIcon
            fontSize="large"
            onClick={(e) => setLiked(true)}
          />
        )}
              <p>{liked ? likes + 1 : likes}</p>
          </div>
          <div className="sidebar_buttons">
              <ChatIcon />
              <p>{comments}</p>
          </div>
          <div className="sidebar_buttons">
              <ShareIcon />
              <p>{shares}</p>
          </div>
        </div>
    )
}

export default Sidebar
