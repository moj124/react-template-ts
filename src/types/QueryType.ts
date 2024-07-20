import Expense from "./Expenses";

interface QueryType {
    response: Expense[] | null;
    isLoading: boolean;
    isError: boolean;
}
export default QueryType;