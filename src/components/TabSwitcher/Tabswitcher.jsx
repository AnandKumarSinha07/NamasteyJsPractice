import React, { useState } from "react";
import "./tab.css";

const tabs = [
  { id: "home", label: "Home", content: "Welcome to the Home tab!" },
  { id: "profile", label: "Profile", content: "This is your Profile." },
  { id: "settings", label: "Settings", content: "Adjust your Settings here." },
];


function TabSwitcher() {
  // TODO: Set up state to track the active tab
  const [content, setContent] = useState("Welcome to the Home tab!!");
  const [filterId,setFilterId]=useState(tabs[0].id);
  console.log("filterId",filterId)
  return (
    <div className="tab-switcher">
      <h1>Tab Switcher</h1>

      {/* Tab buttons */}
      <div className="tab-buttons">
        {tabs.map((item, index) => {
          return (
            <div key={index}>
              <button
                className={filterId === item.id ? "active" : "bg-gray-200"}
                onClick={() => {
                  setContent(item.content);
                  setFilterId(item.id)
                }}
                data-testid={`tab-button-${item.id}`}
              >
                {item.label}
              </button>
            </div>
          );
        })}
      </div>

      {/* Content */}
      <div className="tab-content" data-testid="tab-content">
        <p>{content}</p>
      </div>
    </div>
  );
}

export default TabSwitcher;
