import { useState, useEffect, useRef } from "react";
import "/src/components/Sidebar/Sidebar.css";

function Sidebar({ handleFilteredCards, filterSelect, sortBy, setSortBy }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  function handleButtonClick(e, platform) {
    e.stopPropagation();
    handleFilteredCards(platform.toLowerCase());
  }

  // Handle option selection cleanly
  function handleSortSelect(e, value) {
    e.stopPropagation(); // Prevents click from bubbling back to the button toggle
    if (typeof setSortBy === "function") {
      setSortBy(value);
    }
    setDropdownOpen(false); // Closes menu on click
  }

  // Close when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    if (dropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const platforms = ["All Platforms", "Instagram", "YouTube", "LinkedIn"];

  return (
    <aside className="sidebar-wrapper">
      <h2>Studio.io</h2>

      <div className="sort-control-group" ref={dropdownRef}>
        <span className="sort-label">Sort by modification</span>

        <div className="custom-select-wrapper">
          <button
            type="button"
            className="custom-select-trigger"
            onClick={() => setDropdownOpen((prev) => !prev)}
          >
            {sortBy === "oldest" ? "Old to New" : "New to Old"}
            <span className={`arrow ${dropdownOpen ? "open" : ""}`}>▾</span>
          </button>

          {dropdownOpen && (
            <ul className="custom-options-list">
              <li
                className={sortBy === "newest" ? "active" : ""}
                onClick={(e) => handleSortSelect(e, "newest")}
              >
                New to Old
              </li>
              <li
                className={sortBy === "oldest" ? "active" : ""}
                onClick={(e) => handleSortSelect(e, "oldest")}
              >
                Old to New
              </li>
            </ul>
          )}
        </div>
      </div>

      <nav className="nav-btns">
        {platforms.map((platform) => (
          <button
            key={platform}
            onClick={(e) => handleButtonClick(e, platform)}
            className={
              platform.toLowerCase() === filterSelect ? "selected" : ""
            }
          >
            {platform}
          </button>
        ))}
      </nav>
    </aside>
  );
}

export default Sidebar;
