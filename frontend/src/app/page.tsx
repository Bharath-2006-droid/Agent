"use client";

import { useState } from "react";

import Sidebar from "@/components/layout/Sidebar";
import Dashboard from "@/components/layout/Dashboard";
import ChatPage from "@/components/ChatPage";
import MemoryPage from "@/components/MemoryPage";
import FilesPage from "@/components/FilesPage";
import BrowserPage from "@/components/BrowserPage";
import SettingsPage from "@/components/SettingsPage";

export default function Home() {
  const [activePage, setActivePage] = useState("dashboard");

  return (
    <div className="flex h-screen">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <main className="flex-1 overflow-y-auto">

        {activePage === "dashboard" && <Dashboard />}

        {activePage === "chat" && <ChatPage />}

        {activePage === "memory" && <MemoryPage />}

        {activePage === "files" && <FilesPage />}

        {activePage === "browser" && <BrowserPage />}

        {activePage === "settings" && <SettingsPage />}

      </main>

    </div>
  );
}