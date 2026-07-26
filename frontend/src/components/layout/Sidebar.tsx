"use client";

import {
  MessageSquare,
  Brain,
  Folder,
  Globe,
  Settings,
  LayoutDashboard,
} from "lucide-react";

const menu = [
  {
    icon: LayoutDashboard,
    label: "Dashboard",
    id: "dashboard",
  },
  {
    icon: MessageSquare,
    label: "Chat",
    id: "chat",
  },
  {
    icon: Brain,
    label: "Memory",
    id: "memory",
  },
  {
    icon: Folder,
    label: "Files",
    id: "files",
  },
  {
    icon: Globe,
    label: "Browser",
    id: "browser",
  },
  {
    icon: Settings,
    label: "Settings",
    id: "settings",
  },
];

interface SidebarProps {
  activePage: string;
  setActivePage: React.Dispatch<React.SetStateAction<string>>;
}

export default function Sidebar({
  activePage,
  setActivePage,
}: SidebarProps) {
  return (
    <aside className="w-72 h-screen border-r border-white/10 bg-white/5 backdrop-blur-xl">
      <div className="p-8">
        <h1 className="text-2xl font-bold tracking-widest text-cyan-400">
          BHARATH'S BOT
        </h1>

        <p className="mt-2 text-sm text-gray-400">
          AI Command Center
        </p>
      </div>

      <nav className="space-y-3 px-4">
        {menu.map((item) => (
          <button
            key={item.id}
            onClick={() => setActivePage(item.id)}
            className={`
              w-full
              flex
              items-center
              gap-4
              rounded-xl
              p-4
              border
              transition-all
              duration-300

              ${
                activePage === item.id
                  ? "bg-violet-600/20 border-violet-500 text-violet-300"
                  : "border-transparent hover:bg-cyan-500/20 hover:border-cyan-400"
              }
            `}
          >
            <item.icon size={22} />
            <span>{item.label}</span>
          </button>
        ))}
      </nav>
    </aside>
  );
}