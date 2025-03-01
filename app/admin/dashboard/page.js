// pages/admin/dashboard.js

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import ApplicationTable from './ApplicationTable';

export default function Dashboard() {
  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value;

  if (!token || token !== process.env.ADMIN_TOKEN) {
    redirect('/admin/login');
  }

  return (
    <div className="p-4">
      <h1 className="text-mainBlue font-enriqueta text-3xl">
        Admin Dashboard
      </h1>
      {/* Render the table component */}
      <ApplicationTable />
    </div>
  );
}
