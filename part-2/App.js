const App = () => (
  <div>
  <Tweet
  username = "@billontwitter"
  name= "bill smith"
  date= "8/19"
  message="hello twitter"/>

  <Tweet
  username="@landsky"
  name="lara tom"
  date="8/18"
  message="howdy yall"
  />

  <Tweet
  username="@skooper"
  name="rando travis"
  date="8/19"
  message="we are a tweetin"
  />
  </div>
)

ReactDOM.render(<App />, document.getElementById("root"))