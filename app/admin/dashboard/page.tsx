"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Users, BookOpen, Trophy, Settings, LogOut, Plus, Edit2, Trash2, LayoutDashboard, Image as ImageIcon } from "lucide-react";
import { faculty as initialFaculty } from "@/lib/siteData";

export default function AdminDashboard() {
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("faculty");
  const [faculty, setFaculty] = useState(initialFaculty);

  useEffect(() => {
    if (sessionStorage.getItem("isAdmin") !== "true") {
      router.push("/admin");
    }
  }, [router]);

  return (
    <div className="min-h-screen bg-slate-100 flex font-share-tech">
      {/* Sidebar */}
      <div className="w-64 bg-white border-r border-slate-200 p-6 flex flex-col shadow-sm z-10">
        <div className="mb-10">
          <h2 className="font-orbitron font-bold text-2xl text-text-primary">GMU<span className="text-neon-cyan">Admin</span></h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest">Portal Version 1.0</p>
        </div>
        
        <nav className="flex-1 space-y-2">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 mt-6">Content Manager</div>
          <button onClick={() => setActiveTab("faculty")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "faculty" ? "bg-blue-50 text-neon-cyan shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
            <Users size={18} /> Faculty Roster
          </button>
          <button onClick={() => setActiveTab("programs")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "programs" ? "bg-blue-50 text-neon-cyan shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
            <BookOpen size={18} /> Programs
          </button>
          <button onClick={() => setActiveTab("achievements")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "achievements" ? "bg-blue-50 text-neon-cyan shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
            <Trophy size={18} /> Achievements
          </button>
          <button onClick={() => setActiveTab("gallery")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "gallery" ? "bg-blue-50 text-neon-cyan shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
            <ImageIcon size={18} /> Gallery & Media
          </button>
          
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4 mt-8 pt-4 border-t border-slate-100">System</div>
          <button onClick={() => setActiveTab("sections")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "sections" ? "bg-blue-50 text-neon-cyan shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
            <LayoutDashboard size={18} /> Site Sections
          </button>
          <button onClick={() => setActiveTab("settings")} className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl font-bold transition-all ${activeTab === "settings" ? "bg-blue-50 text-neon-cyan shadow-sm" : "text-slate-500 hover:bg-slate-50"}`}>
            <Settings size={18} /> Global Settings
          </button>
        </nav>
        
        <button onClick={() => { sessionStorage.removeItem("isAdmin"); router.push("/admin"); }} className="flex items-center gap-3 px-4 py-3 mt-auto text-red-500 hover:bg-red-50 rounded-xl transition-colors font-bold">
          <LogOut size={18} /> Secure Logout
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10 overflow-y-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-slate-800 capitalize tracking-wide">{activeTab.replace("-", " ")} Management</h1>
              <p className="text-slate-500 mt-1">Add, edit, or remove entries instantly.</p>
            </div>
            <button className="flex items-center gap-2 bg-neon-cyan text-white px-6 py-3 rounded-xl font-bold hover:bg-sky-700 transition-colors shadow-lg shadow-sky-200">
              <Plus size={20} /> Add New Entry
            </button>
          </div>

          <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
            {activeTab === "faculty" && (
              <table className="w-full text-left">
                <thead className="bg-slate-50 border-b border-slate-200">
                  <tr>
                    <th className="p-5 font-bold text-slate-600 uppercase tracking-wider text-sm">Name & Role</th>
                    <th className="p-5 font-bold text-slate-600 uppercase tracking-wider text-sm">Focus Area</th>
                    <th className="p-5 font-bold text-slate-600 uppercase tracking-wider text-sm text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {faculty.map((f, i) => (
                    <tr key={i} className="hover:bg-slate-50/50 transition-colors">
                      <td className="p-5">
                        <div className="flex items-center gap-4">
                          <img src={f.photo} className="w-12 h-12 rounded-full object-cover border border-slate-200 shadow-sm" />
                          <div>
                            <div className="font-bold text-slate-800 text-lg">{f.name}</div>
                            <div className="text-sm font-bold text-neon-cyan">{f.role}</div>
                          </div>
                        </div>
                      </td>
                      <td className="p-5 text-slate-600 max-w-md">{f.focus}</td>
                      <td className="p-5">
                        <div className="flex items-center justify-end gap-2">
                          <button className="p-2.5 text-slate-400 hover:text-neon-cyan hover:bg-blue-50 rounded-xl transition-all"><Edit2 size={18} /></button>
                          <button className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"><Trash2 size={18} /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
            
            {activeTab !== "faculty" && (
              <div className="py-32 px-10 text-center flex flex-col items-center justify-center">
                <Settings size={64} className="text-slate-300 mb-6" />
                <h3 className="text-2xl font-bold text-slate-700 mb-2">Module Not Connected</h3>
                <p className="text-slate-500 max-w-lg">
                  To make the "{activeTab}" module fully dynamic (allowing real database uploads and deletions), we will need to integrate a Database (like Firebase or Supabase) in the next development phase.
                </p>
                <button onClick={() => setActiveTab("faculty")} className="mt-8 px-6 py-3 border-2 border-slate-200 text-slate-600 font-bold rounded-xl hover:bg-slate-50 hover:text-neon-cyan transition-colors">
                  Return to Faculty
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
