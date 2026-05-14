"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, User } from "lucide-react";

export default function AdminLogin() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Default hardcoded credentials for demonstration
    if (username === "admin" && password === "gmu@admin") {
      sessionStorage.setItem("isAdmin", "true");
      router.push("/admin/dashboard");
    } else {
      setError("Invalid credentials. Try admin / gmu@admin");
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-full max-w-md border border-slate-200 relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-neon-cyan to-neon-magenta" />
        
        <div className="text-center mb-8">
          <h1 className="text-3xl font-orbitron font-bold text-text-primary mb-2">GMU <span className="text-neon-cyan">Admin</span></h1>
          <p className="text-slate-500 font-share-tech">Department of Cyber Security</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Username</label>
            <div className="relative">
              <User className="absolute left-3 top-3.5 text-slate-400" size={20} />
              <input 
                type="text" 
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                placeholder="Enter username"
                required
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-bold text-slate-700 mb-2">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-3.5 text-slate-400" size={20} />
              <input 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-neon-cyan focus:ring-1 focus:ring-neon-cyan transition-all"
                placeholder="Enter password"
                required
              />
            </div>
          </div>
          
          {error && <p className="text-red-500 text-sm text-center font-medium bg-red-50 p-3 rounded-lg border border-red-100">{error}</p>}
          
          <button type="submit" className="w-full py-4 bg-neon-cyan text-white font-bold rounded-xl hover:bg-sky-700 transition-colors shadow-lg shadow-sky-200 flex justify-center items-center gap-2">
            <Lock size={18} /> Secure Login
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-slate-100 text-center text-xs text-slate-400">
          <p>Restricted Access. Authorized Personnel Only.</p>
        </div>
      </div>
    </div>
  );
}
