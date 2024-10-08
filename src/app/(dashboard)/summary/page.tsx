import AccountCard from '@/components/AccountCard'
import MonthlyBalanceChart from '@/components/MonthlyBalanceChart'
import SideCalendar from '@/components/SideCalendar'
import TransactionList from '@/components/TransactionList'
import React from 'react'

function Summary() {
  return (
    <div className='grid grid-cols-4 gap-x-1 h-full pr-6 py-6'>
      {/* Right */}
      <div className="flex flex-col gap-4 h-full col-span-3 overflow-y-auto px-6">
        <AccountCard />
        <div className="h-[450px]">
          <MonthlyBalanceChart />

        </div>
      </div>
      {/* Left */}
      <div className="col-span-1 ">
        <div className="hidden xl:flex flex-col gap-4">
          <SideCalendar />
          <TransactionList />
        </div>
      </div>
    </div>
  )
}

export default Summary