import React from 'react'
import Transaction from './Transaction'

function TransactionList() {
  return (
   <div className="flex flex-col gap-2 h-64">
      <span className="text-base font-semibold text-neutral-700 ">Transactions</span>
      <div className="flex flex-col gap-2 p-2 overflow-y-auto shadow-inner rounded-t-xl">
         <Transaction />
         <Transaction />
         <Transaction />
         <Transaction />
         <Transaction />
      </div>
   </div>
  )
}

export default TransactionList