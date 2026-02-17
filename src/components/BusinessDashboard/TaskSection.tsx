import React from "react";

const tasks = [
  {
    id: 1,
    title: "Engagement Boost",
    subtitle: "Complete 15 Interactions (12 left)",
    buttonText: "Start Engaging",
    borderColor: "border-blue-200",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    buttonBg: "bg-black",
  },
  {
    id: 2,
    title: "Review Replies",
    subtitle: "3 reviews need responses",
    buttonText: "Review Now",
    borderColor: "border-purple-200",
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    buttonBg: "bg-black",
  },
  {
    id: 3,
    title: "Content Approval",
    subtitle: "2 Posts waiting for approval",
    buttonText: "Approve Content",
    borderColor: "border-orange-200",
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    buttonBg: "bg-black",
  },
];

export default function TaskSection() {
  return (
    <div className="bg-white p-6 rounded-3xl shadow-sm border border-gray-100">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-lg font-bold text-gray-900">Today&apos;s Tasks</h3>
         <span className="text-sm font-medium text-gray-400">View All</span>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {tasks.map((task) => (
          <div
            key={task.id}
            className={`p-5 rounded-2xl border ${task.borderColor} ${task.bgColor} flex flex-col justify-between gap-4`}
          >
            <div>
              <h4 className={`font-bold text-sm ${task.textColor}`}>{task.title}</h4>
              <p className="text-xs text-gray-500 mt-1">{task.subtitle}</p>
            </div>
            <button className={`${task.buttonBg} text-white w-full py-2 rounded-lg text-xs font-semibold hover:opacity-80 transition-opacity`}>
              {task.buttonText}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
