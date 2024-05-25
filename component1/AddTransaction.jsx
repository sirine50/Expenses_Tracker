import { useState, useContext } from "react"
import { GlobalContext } from "../context/GlobalState"


export default function AddTransaction() {
  const [text, setText] = useState("")
  const [amount, setAmount] = useState(0)


  const { addTransaction } = useContext(GlobalContext)

  function handleSubmit(e) {
    e.preventDefault()
    const newTransaction = {
      id: Math.floor(Math.random() * 100000),
      text,
      amount: Number(amount)
    }

    addTransaction(newTransaction)
  }
  
  return(
    <>
      <h3 className="history">Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <h5>Text</h5>
        <input type="text" placeholder="Enter text..." value={text} onChange={(e) => setText(e.target.value)} />
        <h5>Amount</h5>
        <div>(negative-expense.positive-income)</div>
        <input type="number" placeholder="Enter amount..." value={amount} onChange={(e) => setAmount(e.target.value)} />
        <button type="submit">Add transaction</button>
      </form>
    </>
  )
}