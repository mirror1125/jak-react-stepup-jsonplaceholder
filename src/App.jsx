import axios from "axios";
import "./styles.css";

export const App = () => {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const onClickUser1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUser1}>id=user1</button>
    </div>
  );
};
