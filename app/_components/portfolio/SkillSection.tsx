"use client";

import { Monitor, Code, Terminal, Database } from "lucide-react";
import { Icons } from "../Icons";

function SkillsTabs() {
  // Categorized skill sets
  const skillsData = [
    {
      category: "Frontend",
      skills: [
        { name: "React", icon: <Monitor className="text-green-600" /> },
        { name: "JavaScript", icon: <Code className="text-yellow-500" /> },
        { name: "HTML/CSS", icon: <Monitor className="text-blue-600" /> },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", icon: <Terminal className="text-green-600" /> },
        { name: "MongoDB", icon: <Database className="text-orange-500" /> },
        { name: "Express", icon: <Code className="text-gray-700" /> },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: <Icons.gitHub className="text-black" /> },
        { name: "Docker", icon: <Terminal className="text-blue-500" /> },
      ],
    },
  ];

  return (
    <div className="py-6 col-span-6 md:col-span-12 grid grid-cols-12 gap-2 rounded-lg">
      {skillsData.map((categoryData, index) => (
        <div
          key={index}
          className="mb-6 col-span-12 md:col-span-4 shadow-md bg-white/70 rounded-lg p-2"
        >
          <h3 className="text-lg font-semibold text-gray-700">
            {categoryData.category}
          </h3>
          <ul className="">
            {categoryData.skills.map((skill, skillIndex) => (
              <li key={skillIndex} className="flex items-center gap-4 mb-3">
                {skill.icon}
                <h4 className="font-semibold">{skill.name}</h4>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default SkillsTabs;
