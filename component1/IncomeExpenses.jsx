import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function IncomeExpenses() {
 const { transactions } = useContext(GlobalContext)

  const expense = transactions.filter(transaction => transaction.amount < 0).reduce((total, cur) => total + cur.amount, 0)

  const income = transactions.filter(transaction => transaction.amount > 0).reduce((total, cur) => total + cur.amount, 0).toFixed(2)

  const positive = (expense * -1).toFixed(2)


  return (
    <div className="income-expense">
      <div className="income">
        <h4>INCOME</h4>
        <h3>${income}</h3>
      </div>
      <div className="line"></div>
      <div className="expense">
        <h4>EXPENSE</h4>
        <h3>${positive}</h3>
      </div>
    </div>
  )
}