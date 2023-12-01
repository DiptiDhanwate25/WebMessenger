import { useSelector } from "react-redux";
import { Register } from "./components/register";


function App() {
  const users  = useSelector(state => state.users)
  return (
    <div className="App">
      {
        users.map(user => <div key={user.id}>{user.name}-{user.username}</div>)
}
     <Register/> 
     </div>
  );
}

export default App;
