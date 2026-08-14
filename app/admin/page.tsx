"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getContent, updateContent, type Stat } from "@/services/api";

interface FormData {
  heroTitle: string;
  heroSubtitle: string;
  ctaText: string;
  stats: Stat[];
}

export default function AdminPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showPopup, setShowPopup] = useState(false);
  
  const [formData, setFormData] = useState<FormData>({
    heroTitle: "",
    heroSubtitle: "",
    ctaText: "",
    stats: []
  });

  useEffect(() => {
    fetchContent();
  }, []);

  const fetchContent = async () => {
    try {
      const data = await getContent();
      if (data) {
        setFormData({
          heroTitle: data.heroTitle || "",
          heroSubtitle: data.heroSubtitle || "",
          ctaText: data.ctaText || "",
          stats: data.stats || []
        });
      }
    } catch (error) {
      console.error("Failed to fetch content:", error);
      setMessage({ type: "error", text: "Failed to load content from server." });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleStatChange = (index: number, field: keyof Stat, value: string) => {
    const newStats = [...formData.stats];
    newStats[index] = { ...newStats[index], [field]: value };
    setFormData({ ...formData, stats: newStats });
  };

  const addStat = () => {
    setFormData({
      ...formData,
      stats: [...formData.stats, { label: "", value: "" }]
    });
  };

  const removeStat = (index: number) => {
    const newStats = formData.stats.filter((_, i) => i !== index);
    setFormData({ ...formData, stats: newStats });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: "", text: "" });
    
    try {
      await updateContent(formData);
      setMessage({ type: "success", text: "Content updated successfully!" });
      setShowPopup(true);
      fetchContent();
      setTimeout(() => setShowPopup(false), 3000);
    } catch (error: unknown) {
      const errMsg =
        (error as { response?: { data?: { message?: string } } })?.response?.data?.message ??
        "Failed to update content.";
      setMessage({ type: "error", text: errMsg });
      setShowPopup(true);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-950">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-500"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen bg-slate-950 text-white font-sans">
      <Navbar />
      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 relative">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-emerald-500/5 blur-[100px] pointer-events-none z-0"></div>
        
        <div className="max-w-4xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-2xl border border-slate-800 shadow-2xl overflow-hidden relative z-10">
          <div className="px-6 py-8 sm:p-10">
            <h1 className="text-3xl font-extrabold text-white mb-8 tracking-tight bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            
            {showPopup && (
              <div
                className="fixed bottom-6 right-6 z-50 w-full max-w-xs rounded-2xl border shadow-2xl p-5 flex items-start gap-4 animate-[slideInRight_0.3s_ease-out]"
                style={{
                  background: message.type === "success"
                    ? "linear-gradient(135deg,#0f2a1e 0%,#0d1f18 100%)"
                    : "linear-gradient(135deg,#2a0f0f 0%,#1f0d0d 100%)",
                  borderColor: message.type === "success" ? "#10b98150" : "#ef444450",
                  boxShadow: message.type === "success"
                    ? "0 8px 32px rgba(16,185,129,0.15)"
                    : "0 8px 32px rgba(239,68,68,0.15)",
                }}
              >
                <div
                  className="flex-shrink-0 flex items-center justify-center w-10 h-10 rounded-full mt-0.5"
                  style={{
                    background: message.type === "success"
                      ? "rgba(16,185,129,0.18)"
                      : "rgba(239,68,68,0.18)",
                  }}
                >
                  {message.type === "success" ? (
                    <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="text-sm font-bold text-white">
                    {message.type === "success" ? "Success!" : "Error"}
                  </p>
                  <p className={`text-xs mt-0.5 leading-relaxed ${
                    message.type === "success" ? "text-emerald-300" : "text-red-300"
                  }`}>
                    {message.text}
                  </p>
                </div>

                <button
                  onClick={() => setShowPopup(false)}
                  className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full text-slate-400 hover:text-white hover:bg-slate-700/60 transition-all cursor-pointer text-xs"
                  title="Close"
                >
                  ✕
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-8">
                <div className="bg-slate-950/30 p-6 rounded-xl border border-slate-800/80 space-y-6">
                  <h2 className="text-xl font-bold text-white flex items-center gap-2 border-b border-slate-850 pb-3">
                    <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                    Hero Section
                  </h2>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="heroTitle" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Hero Title</label>
                      <input
                        type="text"
                        name="heroTitle"
                        id="heroTitle"
                        value={formData.heroTitle}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-slate-800 bg-slate-950/60 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm p-3.5 border text-white placeholder-slate-650 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="heroSubtitle" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Hero Subtitle</label>
                      <textarea
                        name="heroSubtitle"
                        id="heroSubtitle"
                        rows={3}
                        value={formData.heroSubtitle}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-slate-800 bg-slate-950/60 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm p-3.5 border text-white placeholder-slate-650 transition-colors"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="ctaText" className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">CTA Button Text</label>
                      <input
                        type="text"
                        name="ctaText"
                        id="ctaText"
                        value={formData.ctaText}
                        onChange={handleChange}
                        className="mt-1 block w-full rounded-lg border-slate-800 bg-slate-950/60 shadow-sm focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 text-sm p-3.5 border text-white placeholder-slate-650 transition-colors"
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-slate-950/30 p-6 rounded-xl border border-slate-800/80 space-y-6">
                  <div className="flex justify-between items-center border-b border-slate-850 pb-3">
                    <h2 className="text-xl font-bold text-white flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      Statistics
                    </h2>
                    <button
                      type="button"
                      onClick={addStat}
                      className="inline-flex items-center gap-1.5 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 rounded-full py-1.5 px-4 text-xs font-bold transition-all cursor-pointer"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                      </svg>
                      Add Stat
                    </button>
                  </div>
                  
                  {formData.stats.length === 0 ? (
                    <p className="text-sm text-slate-500 text-center py-6">No statistics defined. Click "Add Stat" to create one.</p>
                  ) : (
                    <div className="space-y-4">
                      {formData.stats.map((stat, index) => (
                        <div key={index} className="flex gap-4 items-end bg-slate-950/30 p-4 rounded-xl border border-slate-850 hover:border-slate-800 transition-colors">
                          <div className="flex-grow grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Label</label>
                              <input
                                type="text"
                                value={stat.label}
                                onChange={(e) => handleStatChange(index, 'label', e.target.value)}
                                className="block w-full rounded-lg border-slate-800 bg-slate-950/60 text-sm p-3 border text-white transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                placeholder="e.g. Clients"
                                required
                              />
                            </div>
                            <div>
                              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-1">Value</label>
                              <input
                                type="text"
                                value={stat.value}
                                onChange={(e) => handleStatChange(index, 'value', e.target.value)}
                                className="block w-full rounded-lg border-slate-800 bg-slate-950/60 text-sm p-3 border text-white transition-colors focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
                                placeholder="e.g. 500+"
                                required
                              />
                            </div>
                          </div>
                          
                          <button
                            type="button"
                            onClick={() => removeStat(index)}
                            className="bg-red-500/10 hover:bg-red-500/20 text-red-400 border border-red-500/20 hover:border-red-500/40 rounded-lg p-3 transition-all flex items-center justify-center cursor-pointer"
                            title="Remove stat"
                          >
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                            </svg>
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              <div className="pt-4 flex justify-end">
                <button
                  type="submit"
                  disabled={saving}
                  className="bg-emerald-500 hover:bg-emerald-400 text-slate-950 border border-transparent rounded-full shadow-lg py-3.5 px-10 inline-flex justify-center text-base font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed transform hover:-translate-y-0.5 shadow-emerald-500/10 cursor-pointer"
                >
                  {saving ? 'Saving...' : 'Update Content'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
