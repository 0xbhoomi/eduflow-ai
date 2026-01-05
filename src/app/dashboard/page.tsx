"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle2, TrendingUp, AlertCircle, Play } from 'lucide-react';

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            {/* Welcome Section */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                    <h1 className="text-2xl font-bold text-white">Good Morning, Alex! 👋</h1>
                    <p className="text-slate-400">You have 2 lectures and 3 tasks scheduled for today.</p>
                </div>
                <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-indigo-500/20">
                    + Add New Task
                </button>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <StatCard
                    icon={<Clock className="text-indigo-400" />}
                    label="Study Hours"
                    value="4.5h"
                    trend="+12% from last week"
                />
                <StatCard
                    icon={<CheckCircle2 className="text-emerald-400" />}
                    label="Tasks Completed"
                    value="12/15"
                    trend="80% completion rate"
                />
                <StatCard
                    icon={<TrendingUp className="text-purple-400" />}
                    label="Current Streak"
                    value="5 Days"
                    trend="Keep it up!"
                />
                <StatCard
                    icon={<AlertCircle className="text-amber-400" />}
                    label="Pending Due"
                    value="2"
                    trend="Due in 24 hours"
                />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content Area - Schedule */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold mb-4 flex items-center justify-between">
                            Today's Schedule
                            <span className="text-xs font-normal text-slate-500 bg-slate-800 px-2 py-1 rounded">January 15, 2024</span>
                        </h2>
                        <div className="space-y-4">
                            <ScheduleItem
                                time="09:00 AM"
                                title="Advanced Algorithms"
                                type="Lecture"
                                status="completed"
                            />
                            <ScheduleItem
                                time="11:30 AM"
                                title="Database Systems"
                                type="Lab"
                                status="upcoming"
                                isNext
                            />
                            <ScheduleItem
                                time="02:00 PM"
                                title="AI Ethics Group Study"
                                type="Study Group"
                                status="upcoming"
                            />
                            <ScheduleItem
                                time="04:00 PM"
                                title="Project Review"
                                type="Meeting"
                                status="upcoming"
                            />
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold mb-4">Recommended for You</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <ResourceCard
                                title="Intro to Neural Networks"
                                category="Video"
                                duration="15 min"
                            />
                            <ResourceCard
                                title="Database Normalization Guide"
                                category="Article"
                                duration="5 min read"
                            />
                        </div>
                    </div>
                </div>

                {/* Right Sidebar - Progress & Tasks */}
                <div className="space-y-6">
                    <div className="bg-indigo-600 rounded-xl p-6 text-white shadow-xl shadow-indigo-900/20 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-2xl -mr-10 -mt-10"></div>
                        <h3 className="font-semibold text-lg mb-1">Weekly Goal</h3>
                        <p className="text-indigo-100 text-sm mb-4">Complete 5 chapters of Calculus</p>
                        <div className="w-full bg-indigo-900/30 rounded-full h-2 mb-2">
                            <div className="bg-white h-2 rounded-full w-3/5"></div>
                        </div>
                        <div className="flex justify-between text-xs text-indigo-100">
                            <span>60% Completed</span>
                            <span>3/5 Chapters</span>
                        </div>
                    </div>

                    <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
                        <h2 className="text-lg font-semibold mb-4">Quick Tasks</h2>
                        <div className="space-y-3">
                            <TaskItem text="Submit Algorithm Assignment" due="Today" />
                            <TaskItem text="Read Chapter 4 for History" due="Tomorrow" />
                            <TaskItem text="Email Professor Smith" due="Friday" />
                        </div>
                        <button className="w-full mt-4 py-2 text-sm text-indigo-400 hover:text-indigo-300 border border-dashed border-slate-700 hover:border-indigo-500/50 rounded-lg transition-colors">
                            + Add Quick Task
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

function StatCard({ icon, label, value, trend }: any) {
    return (
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 hover:border-slate-700 transition-colors">
            <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-slate-800 rounded-lg">{icon}</div>
            </div>
            <div className="text-2xl font-bold text-white mb-1">{value}</div>
            <div className="text-sm text-slate-400">{label}</div>
            <div className="text-xs text-slate-500 mt-2">{trend}</div>
        </div>
    );
}

function ScheduleItem({ time, title, type, status, isNext }: any) {
    return (
        <div className={`flex items-center p-4 rounded-xl border ${isNext ? 'bg-indigo-500/10 border-indigo-500/50' : 'bg-slate-800/50 border-slate-800'}`}>
            <div className="w-20 text-sm font-medium text-slate-400">{time}</div>
            <div className="flex-1">
                <h4 className="font-medium text-white">{title}</h4>
                <span className="text-xs text-slate-500">{type}</span>
            </div>
            <div>
                {isNext ? (
                    <span className="flex items-center text-xs font-bold text-indigo-400 bg-indigo-400/10 px-2 py-1 rounded-full">
                        <Play size={10} className="mr-1 fill-current" /> NEXT
                    </span>
                ) : (
                    <div className={`w-2 h-2 rounded-full ${status === 'completed' ? 'bg-slate-600' : 'bg-emerald-500'}`}></div>
                )}
            </div>
        </div>
    );
}

function TaskItem({ text, due }: any) {
    return (
        <div className="flex items-start gap-3 group">
            <button className="mt-0.5 w-4 h-4 rounded border border-slate-600 hover:border-indigo-500 flex items-center justify-center transition-colors">
                {/* Checkbox Placeholder */}
            </button>
            <div className="flex-1">
                <p className="text-sm text-slate-300 group-hover:text-white transition-colors">{text}</p>
                <span className="text-xs text-slate-500">{due}</span>
            </div>
        </div>
    );
}

function ResourceCard({ title, category, duration }: any) {
    return (
        <div className="p-4 rounded-lg bg-slate-800/50 hover:bg-slate-800 transition-colors cursor-pointer group">
            <div className="text-xs text-indigo-400 mb-1">{category} • {duration}</div>
            <div className="font-medium text-slate-200 group-hover:text-white">{title}</div>
        </div>
    )
}
