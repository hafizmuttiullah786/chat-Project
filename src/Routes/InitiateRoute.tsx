/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import { Routes, Route } from "react-router-dom";
import { RouteList } from "./RouteList";
import ProtectedRoute from "./ProtectedRoute";

export const InitiateRoute = () => {
  return (
    <Routes>
      {RouteList.map((route: any, index: number) => {
        const isProtected = route.path === "/" || route.path === "/chat";

        const Element = isProtected ? (
          <ProtectedRoute>
            <route.element />
          </ProtectedRoute>
        ) : (
          <route.element />
        );

        return <Route key={index} path={route.path} element={Element} />;
      })}
    </Routes>
  );
};
