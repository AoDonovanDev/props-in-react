const Person = ({name, age, hobbies}) => (
  <div>

  <p> Learn some information about this person</p>

  <h1>{name.length > 8 ? name.slice(0,6) : name}</h1>

  {age >= 18 ? <h3>go vote</h3> : <h3>you must be 18</h3>}

  {hobbies.map(h => <li>{h}</li>)}

  </div>
)