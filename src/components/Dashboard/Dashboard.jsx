import "/src/components/Dashboard/Dashboard.css";
import ContentCard from "../ContentCard/ContentCard";

function Dashboard({ cards, onCardDelete, onCardEdit, resetAllFilters }) {
  // 1. Early return when there are no cards
  if (cards.length === 0) {
    return (
      <section className="dashboard-wrapper empty">
        <div className="empty-state">
          <h1>No ideas found!</h1>
          <p>Got a new concept in mind? Click + New Idea to add one!</p>
        </div>
        <button onClick={resetAllFilters} className="clear-filters-btn">
          Clear Applied Filters
        </button>
      </section>
    );
  }

  // 2. Normal render when cards exist
  return (
    <section className="dashboard-wrapper">
      {cards.map((card) => (
        <ContentCard
          card={card}
          key={card.id}
          onCardDelete={() => onCardDelete(card.id)}
          onCardEdit={() => onCardEdit(card.id)}
        />
      ))}
    </section>
  );
}

export default Dashboard;
