import {
  Routes,
  Route,
} from "react-router-dom";

import Sidebar from "./Childrens/Sidebar.jsx";
import Dashboard from "./Childrens/Dashboard.jsx";
import Listing from "./Childrens/Listing.jsx";
import RecentCollection from "./Childrens/RecentCollection.jsx";
import BuddyAssign from "./Childrens/BuddyAssign.jsx";
import Tenants from "./Childrens/Tenants.jsx";
import Analytics from "./Childrens/Analytics.jsx";
import Report from "./Childrens/Report.jsx";
import Notifications from "./Childrens/Notifications.jsx";
import Settings from "./Childrens/Settings.jsx";

const OwnerView = () => {
  return (
    <div className="flex bg-[#fafafa]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Page Content */}
      <div className="flex-1 min-h-screen p-8">

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/listings"
            element={<Listing />}
          />

          <Route
            path="/rent"
            element={<RecentCollection />}
          />

          <Route
            path="/buddy"
            element={<BuddyAssign />}
          />

          <Route
            path="/tenants"
            element={<Tenants />}
          />

          <Route
            path="/analytics"
            element={<Analytics />}
          />

          <Route
            path="/reports"
            element={<Report />}
          />

          <Route
            path="/notifications"
            element={<Notifications />}
          />

          <Route
            path="/settings"
            element={<Settings />}
          />

        </Routes>

      </div>
    </div>
  );
};

export default OwnerView;