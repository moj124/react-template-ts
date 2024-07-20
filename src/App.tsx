import { useEffect, useState } from "react";
import useFetchData from "./hooks/useFetchData";
import Expense from "./types/Expenses";
import Table from "./components/Table";

function App() {
  //save filtered data as use state
  const [expenses, setExpenses] = useState<Expense[]>([]);

  // fetch reponse
  const endpoint = 'expenses';
  const responseData = useFetchData(endpoint);
  
  // update state
  useEffect (() => {
    if(responseData.response) {
      // TODO filter to a specifc object type 
      console.log('responseData.response', responseData.response)
      return setExpenses(responseData.response);
    }
    
  }, [responseData.response]);
  
  console.log(expenses)
  return (
    <>
      <h1>Expenses</h1>
      <Table list={expenses} />
    </>
  );
}

export default App;
