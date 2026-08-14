"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { getContent } from "@/services/api";

interface RealTimeRefresherProps {
  lastUpdated?: string;
}

export default function RealTimeRefresher({ lastUpdated }: RealTimeRefresherProps) {
  const router = useRouter();
  const lastUpdatedRef = useRef(lastUpdated);

  useEffect(() => {
    lastUpdatedRef.current = lastUpdated;
  }, [lastUpdated]);

  useEffect(() => {
    const checkUpdates = async () => {
      try {
        const data = await getContent();
        if (data && data.updatedAt !== lastUpdatedRef.current) {
          lastUpdatedRef.current = data.updatedAt;
          router.refresh();
        }
      } catch (error) {
        console.error("Error checking for updates:", error);
      }
    };

    const interval = setInterval(checkUpdates, 2000); // Check every 2 seconds

    return () => clearInterval(interval);
  }, [router]);

  return null;
}
