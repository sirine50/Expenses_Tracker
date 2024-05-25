import { useContext } from "react"
import { GlobalContext } from "../context/GlobalState"

export default function Balance() {
  const {transactions} = useContext(GlobalContext)
  
  const total = transactions.reduce((total, cur) => total + cur.amount, 0).toFixed(2)


  return (
    <div className="container">
      <h4>Your Balance</h4>
      <h1 className="balance">${total}</h1>
    </div>
  )
}