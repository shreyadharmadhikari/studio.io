import "/src/components/ContentCard/ContentCard.css";
import delete_icon from "../../../src/assets/delete_icon.png";
import copy_icon from "../../../src/assets/copy_icon.png";

function calculateTimeDiff(card) {
  let timeDifference;
  let timeNotificationMsg;

  if (card.editedAt) {
    timeDifference = Date.now() - card.editedAt;

    if (timeDifference < 60000) {
      timeDifference = Math.floor(timeDifference / 1000);
      timeNotificationMsg = `Modified ${timeDifference} ${timeDifference === 1 ? "second" : "seconds"} ago`;
    } else if (timeDifference < 3600000) {
      timeDifference = Math.floor(timeDifference / 60000);
      timeNotificationMsg = `Modified ${timeDifference} ${timeDifference === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDifference < 86400000) {
      timeDifference = Math.floor(timeDifference / 3600000);
      timeNotificationMsg = `Modified ${timeDifference} ${timeDifference === 1 ? "hour" : "hours"} ago`;
    } else {
      timeDifference = Math.floor(timeDifference / 86400000);
      timeNotificationMsg = `Modified ${timeDifference} ${timeDifference === 1 ? "day" : "days"} ago`;
    }
  } else {
    timeDifference = Date.now() - card.createdAt;

    if (timeDifference < 60000) {
      timeDifference = Math.floor(timeDifference / 1000);
      timeNotificationMsg = `Added ${timeDifference} ${timeDifference === 1 ? "second" : "seconds"} ago`;
    } else if (timeDifference < 3600000) {
      timeDifference = Math.floor(timeDifference / 60000);
      timeNotificationMsg = `Added ${timeDifference} ${timeDifference === 1 ? "minute" : "minutes"} ago`;
    } else if (timeDifference < 86400000) {
      timeDifference = Math.floor(timeDifference / 3600000);
      timeNotificationMsg = `Added ${timeDifference} ${timeDifference === 1 ? "hour" : "hours"} ago`;
    } else {
      timeDifference = Math.floor(timeDifference / 86400000);
      timeNotificationMsg = `Added ${timeDifference} ${timeDifference === 1 ? "day" : "days"} ago`;
    }
  }

  return timeNotificationMsg;
}

function ContentCard({ card, onCardDelete, onCardEdit }) {
  function copyScriptHandler() {
    navigator.clipboard.writeText(card.script);
    alert("Script copied to clipboard!");
  }

  return (
    <div
      className={
        "content-card-wrapper " + (card.platform.toLowerCase() + "-card")
      }
      aria-description="project-card"
    >
      <header className="card-header">
        <span
          className={card.platform.toLowerCase() + " platform-name"}
          aria-description="platform-name"
        >
          {card.platform[0].toUpperCase() + card.platform.slice(1)}
        </span>
        <span
          className={"project-status  " + card.currentPhase}
          aria-description="project-status"
        >
          {card.currentPhase[0].toUpperCase() + card.currentPhase.slice(1)}
        </span>
      </header>
      <section className="project-info">
        <h3>{card.projectName[0].toUpperCase() + card.projectName.slice(1)}</h3>
        <section className="project-script-wrapper">
          <p className="project-script">{card.script}</p>
          <button id="copy-icon-btn" onClick={copyScriptHandler}>
            <img src={copy_icon} alt="copy icon" width={14} />
          </button>
        </section>
      </section>
      {card.links.length ? (
        <section className="reference-links">
          <p>Reference Links Saved:</p>
          {card.links.map((link, index) => {
            const formattedLink =
              link.startsWith("http://") || link.startsWith("https://")
                ? link
                : `https://${link}`;

            return (
              <span key={index}>
                <a
                  href={formattedLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  link {index + 1}
                </a>
              </span>
            );
          })}
        </section>
      ) : (
        <p className="no-refLink">No reference links saved</p>
      )}
      <div className="time-and-btn-wrapper">
        <span>{calculateTimeDiff(card)}</span>
        <div className="action-btns">
          <button className="edit-btn" onClick={onCardEdit}>
            Edit
          </button>
          <button className="delete-btn" onClick={onCardDelete}>
            <img src={delete_icon} alt="delete icon image" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ContentCard;
