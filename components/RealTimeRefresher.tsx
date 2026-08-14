"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { io } from "socket.io-client";

const BACKEND_URL = "https://eminenture-backend.onrender.com";

export default function RealTimeRefresher() {
  const router = useRouter();

  useEffect(() => {
    const socket = io(BACKEND_URL, {
      transports: ["websocket", "polling"],
    });

    socket.on("connect", () => {
      console.log("Socket connected:", socket.id);
    });

    socket.on("content-updated", () => {
      console.log("Content updated — refreshing...");
      router.refresh();
    });

    socket.on("disconnect", () => {
      console.log("Socket disconnected");
    });

    return () => {
      socket.disconnect();
    };
  }, [router]);

  return null;
}
