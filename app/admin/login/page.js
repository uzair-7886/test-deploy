"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch('/api/auth', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username, password }),
    });

    if (res.ok) {
      router.push('/admin/dashboard');
    } else {
      const data = await res.json();
      setError(data.message);
    }
    setLoading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-mainBlue">
      <form onSubmit={handleSubmit} className="p-4 border rounded bg-white">
        <h2 className="text-mainBlue font-enriqueta text-2xl mb-4">
          Admin Login
        </h2>
        {error && <p className="text-red-500">{error}</p>}
        <div className="mb-4">
          <label className="block text-mainBlue font-roboto">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-mainBlue font-roboto">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border p-2 w-full"
            required
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          className="bg-mainBlue disabled:bg-gray-600 text-white font-roboto px-4 py-2"
        >
          Login
        </button>
      </form>
    </div>
  );
}