const Tweet = ( {username, name, date, message} ) => (
  <div className="tweet">
  <div className="top"> 
    <h1 className="username">{username}</h1> 
    <p className="date">{date}</p>
  </div> 
  <p className="name">{name}</p>
  <p className="message">{message}</p>
  </div> 
)