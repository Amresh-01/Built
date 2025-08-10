"use client";
import React from "react";
import { ConvexReactClient } from "convex/react";
import { ConvexProvider } from "convex/react"; // ← Import the actual provider

const ConvexClientProvider = ({ children }) => {
  const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL);
  return (
    <ConvexProvider client={convex}>{children}</ConvexProvider>
    // ↑ Use ConvexProvider, not ConvexClientProvider
  );
};

export default ConvexClientProvider;
