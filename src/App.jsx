import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCustomer, removeCustomer } from "./store/customerReducer";

function App() {
  // const [oldCash, setOldCash] = useState(0);
  const [username, setUsername] = useState("");

  const dispatch = useDispatch();
  const cash = useSelector((state) => state.cashReducer.cash)
  const customers = useSelector((state) => state.customerReducer.customers)

  const addCash = () => {
    dispatch({type: "ADD CASH", payload: 20000000})
  }
  const getCash = () => {
    dispatch({type: "GET CASH", payload: 50000})
  }



  return (
    <>
      <h1>Redux: {cash} сум</h1>
      <button onClick={() => addCash()}>Добавить</button>
      <button onClick={() => getCash()}>Снять</button>

      {/* <h1>Old cash: {oldCash}</h1>
      <button onClick={() => setOldCash(oldCash + 1)}>Добавить</button> */}

      <input
       type="text"
       value={username}
       onChange={(e) => setUsername(e.target.value)}
     />

      <button onClick={() => dispatch(addCustomer(username))}>
        Добавить пользователя
      </button>
      <button onClick={() => dispatch(removeCustomer(username))}>
        Удалить пользователя
      </button>
      {customers.length > 0 && customers.map((customer) => <p key={customer}>{customer}</p>)}
    </>
  );
};

export default App;
