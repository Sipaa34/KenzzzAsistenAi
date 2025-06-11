import { useState } from 'react';
import { motion } from 'framer-motion';
import './index.css';

function WelcomePage({ goToLogin }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center space-y-6 p-8 bg-gradient-to-br from-black via-gray-900 to-gray-800 rounded-xl shadow-2xl">
      <h1 className="text-4xl font-bold text-purple-400 drop-shadow">Helloo world, This AI website is made by KenooNomercy.</h1>
      <p className="text-lg text-gray-300">Hope you like it!</p>
      <button onClick={goToLogin} className="bg-purple-600 hover:bg-purple-800 px-6 py-2 rounded-full shadow-lg transition-all">Go to Login</button>
    </motion.div>
  );
}

function LoginPage({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="bg-gray-900 p-8 rounded-2xl shadow-2xl text-center w-80 space-y-4">
      <h2 className="text-2xl font-semibold text-green-400">Login to AI System</h2>
      <input type="text" placeholder="Username" value={username} onChange={e => setUsername(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
      <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 rounded bg-gray-700 text-white focus:outline-none" />
      <button onClick={() => onLogin(username, password)} className="bg-green-600 hover:bg-green-800 px-4 py-2 rounded-full transition-all">Login</button>
    </motion.div>
  );
}

function Dashboard() {
  return (
    <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center space-y-6 p-8 bg-gray-900 rounded-xl shadow-2xl">
      <h1 className="text-4xl font-bold text-cyan-400">Welcome, KenooNichol AI!</h1>
      <p className="text-lg text-gray-300">Haloo negro, ada yang bisa keno bantu?</p>
      <p className="text-sm text-gray-500">AI Dashboard is under development...</p>
    </motion.div>
  );
}

function App() {
  const [page, setPage] = useState('welcome');
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (username, password) => {
    if (username === 'keno nichol' && password === '666') {
      setIsAuthenticated(true);
      setPage('dashboard');
    } else {
      alert('Invalid credentials!');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-black via-gray-800 to-black">
      {page === 'welcome' && <WelcomePage goToLogin={() => setPage('login')} />}
      {page === 'login' && <LoginPage onLogin={handleLogin} />}
      {page === 'dashboard' && isAuthenticated && <Dashboard />}
    </div>
  );
}

export default App;