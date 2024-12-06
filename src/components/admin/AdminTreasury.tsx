import React from 'react';
import { AdminDeposit } from './AdminDeposit';
import { AdminWithdraw } from './AdminWithdraw';
import { AdminStats } from './AdminStats';

export function AdminTreasury() {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <AdminStats />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AdminDeposit />
        <AdminWithdraw />
      </div>
    </div>
  );
}