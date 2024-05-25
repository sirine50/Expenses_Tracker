import './App.css'
import Header from './component1/Header1'
import Balance from './component1/Balance'
import IncomeExpenses from './component1/IncomeExpenses'
import TransactionList from './component1/TransactionList'
import AddTransaction from './component1/AddTransaction'

import { GlobalProvider } from './context/GlobalState'


function App() {
 

  return (
    <GlobalProvider>
      <div className='main'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
      </GlobalProvider>  
  )
}

export default App
