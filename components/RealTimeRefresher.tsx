"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

const BACKEND_URL = "https://eminenture-backend.onrender.com";

export default function RealTimeRefresher() {
  const router = useRouter();

  useEffect(() => {
    // Connect to backend via Socket.io
    const socket = io(BACKEND_URL, {
      transports: ["websocket", "polling"],
    });

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    // When backend emits 'content-updated', refresh the page data
    socket.on("content-updated", () => {
      console.log("Content updated — refreshing...");
      router.refresh();
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    // Cleanup on unmount
    return () => {
      socket.disconnect();
    };
  }, [router]);

  return null;
}
