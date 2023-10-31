import React, { Suspense, lazy } from "react";

// React Router Dom
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Pages
const AsyncPageNotFound = lazy(() => import("../common/router/PageNotFound"));
const AsyncDashboardLayout = lazy(() => import("../common/layout/DashboardLayout"));
const AsyncLogin = lazy(() => import("../pages/auth/login/index"));
const AsyncRegister = lazy(() => import("../pages/auth/register/index"));
const AsyncDashboard = lazy(() => import("../pages/dashboard/index"));
const AsyncHome = lazy(() => import("../pages/home/index"));

// Components
import Loader from "../common/components/Loader";

const PageRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route
                    element={
                        <Suspense fallback={<Loader fullscreen={true} />}>
                            <AsyncDashboardLayout />
                        </Suspense>
                    }
                >
                    <Route
                        path="/dashboard"
                        element={
                            <Suspense fallback={<Loader fullscreen={true} />}>
                                <AsyncDashboard />
                            </Suspense>
                        }
                    />
                    <Route
                        path="*"
                        element={
                            <Suspense fallback={<Loader fullscreen={true} />}>
                                <AsyncPageNotFound />
                            </Suspense>
                        }
                    />
                </Route>
                <Route
                    path="/"
                    element={
                        <Suspense fallback={<Loader fullscreen={true} />}>
                            <AsyncHome />
                        </Suspense>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <Suspense fallback={<Loader fullscreen={true} />}>
                            <AsyncLogin />
                        </Suspense>
                    }
                />
                <Route
                    path="/register"
                    element={
                        <Suspense fallback={<Loader fullscreen={true} />}>
                            <AsyncRegister />
                        </Suspense>
                    }
                />
            </Routes>
        </Router>
    )
}

export default PageRoutes