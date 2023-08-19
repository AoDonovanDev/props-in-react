const App = () => (
  <div>
    <Person
    age={18}
    name="burt"
    hobbies={['wrastlin', 'daincin', 'eatin']}/>

     <Person
    age={12}
    name="maria"
    hobbies={['meowin', 'sleepin']}/>

    <Person
    age={12}
    name="mynameisinigomontoya"
    hobbies={['avenging', 'swords']}/>

  </div>
)

ReactDOM.render(<App/>, document.getElementById("root"))