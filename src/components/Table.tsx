import Expense from "../types/Expenses"

interface TableProps {
    list: Expense[];
}

function Table ({list}: TableProps) {
    //TODO get headers dynamically

    


  return (
    <>
        <table>
            <tr>
                <th>Name</th>
            </tr>
            {list.map((elem, index) => 
                <tr key={index}>{elem.amount}</tr>
                // <tr key={index}>{elem.category}</tr>
                // <tr key={index}>{elem.amount}</tr>
                // <tr key={index}>{elem.amount}</tr>
                // <tr key={index}>{elem.amount}</tr>
                // <tr key={index}>{elem.amount}</tr>

            )}

        </table>
    </>
  )
}
export default Table
