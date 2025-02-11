import { useState } from "react";
import { users } from "./DATA/users";
import User from "./components/User/User";
import "./styles/App.css";

function App() {
  const [user, setUser] = useState(null);

  // users.map((users, id) => {
  // 	const renderUser = () => {
  // 		switch (user) {
  // 			case users.age <= user:
  // 				let u = users.age <=

  // 			default:
  // 				break;
  // 		}
  // 	}
  // })

  const renderUser = () => {
    switch (user) {
      case 18:
        let u = users.filter((users) => {
          return users.age <= user;
        });
        return u.map((el, id) => {
          return <User el={el} key={id} />;
        });

      case 24:
        let u2 = users.filter((users) => {
          return users.age > 18 && users.age <= user;
        });
        return u2.map((el, id) => {
          return <User el={el} key={id} />;
        });

      case 100:
        let u3 = users.filter((users) => {
          return users.age > 24 && users.age <= user;
        });
        return u3.map((el, id) => {
          return <User el={el} key={id} />;
        });

      case "All":
        let u4 = users.filter((users) => {
          return users.age <= 100;
        });
        return u4.map((el, id) => {
          return <User el={el} key={id} />;
        });

      default:
        break;
    }
  };

  return (
    <div className="App">
      <div className="btns">
        <button className="btn" onClick={() => setUser(18)}>
          0-18
        </button>
        <button className="btn" onClick={() => setUser(24)}>
          18-24
        </button>
        <button className="btn" onClick={() => setUser(100)}>
          24-100
        </button>
        <button className="btn" onClick={() => setUser("All")}>
          All
        </button>
      </div>
      <div className="user_cards">{renderUser()}</div>
    </div>
  );
}

export default App;
