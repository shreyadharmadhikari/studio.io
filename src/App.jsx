import "/src/App.css";
import "/src/index.css";
import Sidebar from "./components/Sidebar/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import IdeaModal from "./components/NewIdeaModal/IdeaModal";
import search_icon from "../src/assets/search_icon.png";
import { useState, useEffect } from "react";

function App() {
  const [formOpen, setFormOpen] = useState(false);
  const [editingCard, setEditingCard] = useState(null);
  const [cards, setCards] = useState(
    JSON.parse(localStorage.getItem("cards")) || [],
  );

  const [filterSelect, setFilterSelect] = useState(
    JSON.parse(localStorage.getItem("filter")) || "all platforms",
  );

  const [sortBy, setSortBy] = useState("newest");

  const [searchQuery, setSearchQuery] = useState("");

  let filteredCards;

  if (filterSelect !== "all platforms") {
    filteredCards = cards.filter(
      (card) => card.platform.toLowerCase() === filterSelect,
    );
  } else {
    filteredCards = cards;
  }

  filteredCards = filteredCards.filter((card) =>
    card.projectName.includes(searchQuery.toLowerCase()),
  );

  if (sortBy === "newest") {
    filteredCards.sort((card1, card2) => {
      const time1 = card1.editedAt || card1.createdAt;
      const time2 = card2.editedAt || card2.createdAt;

      return time2 - time1;
    });
  }

  if (sortBy === "oldest") {
    filteredCards.sort((card1, card2) => {
      const time1 = card1.editedAt || card1.createdAt;
      const time2 = card2.editedAt || card2.createdAt;

      return time1 - time2;
    });
  }

  function resetAllFilters() {
    setSearchQuery("");
    setFilterSelect("all platforms");
    setSortBy("newest");
  }

  function handleFilteredCards(platform) {
    setFilterSelect(platform);
    localStorage.setItem("filter", JSON.stringify(platform));
  }

  useEffect(() => {
    localStorage.setItem("cards", JSON.stringify(cards));
  }, [cards]);

  function handleCardDelete(id) {
    const confirmUser = confirm(
      "Are you sure you want to delete this Project idea?",
    );
    if (confirmUser) {
      const newCards = cards.filter((card) => card.id !== id);
      setCards(newCards);
    }
  }

  function handleCardEdit(id) {
    const cardToEdit = cards.find((card) => card.id === id);
    setEditingCard(cardToEdit);
    setFormOpen(true);
  }

  return (
    <div id="main-application-wrapper">
      <Sidebar
        handleFilteredCards={handleFilteredCards}
        filterSelect={filterSelect}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />
      <main className="main">
        <header>
          <h1>Creator Studio Dashboard</h1>
          <input
            type="text"
            id="search-bar"
            className="search-bar-input"
            placeholder="Search project idea.."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <img
            src={search_icon}
            alt="Search icon image"
            height={22}
            className="search-icon-img"
          />
          <button
            className="new-idea-btn"
            onClick={() => {
              setFormOpen(true);
              setEditingCard(null);
            }}
          >
            + New Idea
          </button>
        </header>
        <Dashboard
          cards={filteredCards}
          onCardDelete={handleCardDelete}
          onCardEdit={handleCardEdit}
          resetAllFilters={resetAllFilters}
        />
        {formOpen && (
          <IdeaModal
            setFormOpen={setFormOpen}
            cards={cards}
            setCards={setCards}
            editingCard={editingCard}
          />
        )}
      </main>
    </div>
  );
}

export default App;
