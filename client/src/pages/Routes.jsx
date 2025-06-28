import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import Dashboard from "./Dashboard";

export default function Index() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="user/dashboard/*" element={<Dashboard/>} />
    </Routes>
  );
}
