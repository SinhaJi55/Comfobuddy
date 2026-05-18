import React from "react";

const ActivitySection = () => {
  return (
    <div className="activity-grid">
      <div className="activity-card">
        <h2>Recent Activities</h2>

        <div className="activity-item">
          <div>
            <h4>Rent collected from Raj Sharma</h4>
            <p>2BHK • Green Park</p>
          </div>

          <span>₹18,500</span>
        </div>

        <div className="activity-item">
          <div>
            <h4>New tenant inquiry</h4>
            <p>1 day ago</p>
          </div>

          <span>New</span>
        </div>
      </div>

      <div className="activity-card">
        <h2>Upcoming Reminders</h2>

        <div className="activity-item">
          <div>
            <h4>Rent due from Amit Verma</h4>
            <p>Tomorrow</p>
          </div>

          <span>₹16,000</span>
        </div>
      </div>
    </div>
  );
};

export default ActivitySection;