enum Category {
    TRAINING = 'training',
    TRAVEL = 'travel',
    MEAL = 'meal',
  }
  
interface Expense {
    id: number,
    merchant: string,
    amount: number,
    description: string,
    date: string,
    category: Category,
    status: string,
}

export default Expense;