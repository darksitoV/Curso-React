export function TwitterFollowCard({userName,name,isFollowing}) {
    const imageSrc = `https://avatars.githubusercontent.com/u/183795272?v=4${userName}`;
    
  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
      <img className="tw-followCard-avatar" 
      alt="El avatar de darksito" src={imageSrc}/>
      <div className="tw-followCard-info">
      <strong>Isaac Cardenas</strong>
      <span className="tw-followCard-infoUserName">@{userName}</span>      
      </div>
      </header>
    <aside>
      <button className="tw-followCard-button">
        seguir
      </button>
    </aside>
    </article>
  )
}