import { useState } from "react";


export function TwitterFollowCard({userName,name}) {
    const imageSrc = `https://avatars.githubusercontent.com/u/183795272?v=4${userName}`;
    // Destructuraccion
    const [isFollowing,setIsFollowing] = useState(false);    
    
    // const state = useState(false);
    // const isFollowing = state[0];
    // const setIsFollowing = state[1];

    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button';   

    const handleClick = () => {
      setIsFollowing(!isFollowing);
    }

    return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
      <img className="tw-followCard-avatar" 
      alt="El avatar de darksito" src={imageSrc}/>
      <div className="tw-followCard-info">
      <strong>{name}</strong>
      <span className="tw-followCard-infoUserName">@{userName}</span>      
      </div>
      </header>
    <aside>
      <button className={buttonClassName} onClick={handleClick}>
        {text}
      </button>
    </aside>
    </article>
  )
}