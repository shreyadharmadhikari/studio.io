import "/src/components/NewIdeaModal/IdeaModal.css";
import { useState } from "react";

export default function IdeaModal({
  setFormOpen,
  cards,
  setCards,
  editingCard,
}) {
  const [isError, setIsError] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  function handleFormClose() {
    setFormOpen(false);
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    if (editingCard) {
      const formData = new FormData(e.target);

      const projectIdeaObject = {
        id: Date.now(),
        projectName: formData.get("project-name"),
        platform: formData.get("platform"),
        currentPhase: formData.get("phase"),
        script: formData.get("script"),
        links: formData
          .get("links")
          .split(",")
          .map((link) => link.trim())
          .filter(Boolean),
        createdAt: editingCard.createdAt,
        editedAt: Date.now(),
      };

      let hasError = false;
      let validationError = "";

      if (
        !projectIdeaObject.projectName ||
        !projectIdeaObject.platform ||
        !projectIdeaObject.currentPhase ||
        projectIdeaObject.platform === "select" ||
        projectIdeaObject.currentPhase === "select"
      ) {
        hasError = true;
        validationError = "Please fill all the mandatory fields marked by *";
      }

      if (projectIdeaObject.projectName.length < 4) {
        hasError = true;
        validationError += `${validationError ? "\n" : ""} Project name must have at least 4 characters`;
      }

      if (hasError) {
        setIsError(true);
        setErrorMsg(validationError);
        setFormOpen(true);
      } else {
        setIsError(false);
        setErrorMsg("");
        setFormOpen(false);

        const newCards = cards.map((card) => {
          if (card.id === editingCard.id) {
            return projectIdeaObject;
          } else {
            return card;
          }
        });

        setCards(newCards);
      }

      return;
    }

    const formData = new FormData(e.target);

    const projectIdeaObject = {
      id: Date.now(),
      projectName: formData.get("project-name"),
      platform: formData.get("platform"),
      currentPhase: formData.get("phase"),
      script: formData.get("script"),
      links: formData
        .get("links")
        .split(",")
        .map((link) => link.trim())
        .filter(Boolean),
      createdAt: Date.now(),
      editedAt: null,
    };

    console.log(projectIdeaObject);

    let hasError = false;
    let validationError = "";

    if (
      !projectIdeaObject.projectName ||
      !projectIdeaObject.platform ||
      !projectIdeaObject.currentPhase ||
      projectIdeaObject.platform === "select" ||
      projectIdeaObject.currentPhase === "select"
    ) {
      hasError = true;
      validationError = "Please fill all the mandatory fields marked by *";
    }

    if (projectIdeaObject.projectName.length < 4) {
      hasError = true;
      validationError += `${validationError ? "\n" : ""} Project name must have at least 4 characters`;
    }

    if (hasError) {
      setIsError(true);
      setErrorMsg(validationError);
      setFormOpen(true);
    } else {
      setIsError(false);
      setErrorMsg("");
      setFormOpen(false);
      setCards([...cards, projectIdeaObject]);
    }
  }

  if (editingCard === null) {
    return (
      <div id="modal-form-wrapper" onClick={handleFormClose}>
        <form
          onClick={(e) => {
            setFormOpen(true);
            e.stopPropagation();
          }}
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <h1>Add New Project Idea</h1>
          {isError && <p className="error-msg">{errorMsg}</p>}
          <label htmlFor="project-name">
            Project Name <span>*</span>
          </label>
          <input type="text" name="project-name" id="project-name" required />
          <label htmlFor="platform">
            Choose Platform <span>*</span>
          </label>
          <select
            name="platform"
            id="platform"
            required
            defaultValue={"select"}
          >
            <option value="select" disabled={true}>
              Select
            </option>
            <option value="instagram">Instagram</option>
            <option value="youtube">YouTube</option>
            <option value="youtube">LinkedIn</option>
          </select>
          <label htmlFor="phase">
            Select the current phase of project <span>*</span>
          </label>
          <select name="phase" id="phase" required defaultValue={"select"}>
            <option value="select" disabled={true}>
              Select
            </option>
            <option value="brainstorm">Brainstorm</option>
            <option value="scripting">Scripting</option>
            <option value="filming">Filming</option>
            <option value="ready">Ready</option>
          </select>

          <label htmlFor="script">Description</label>
          <textarea name="script" id="script" cols={10}></textarea>

          <label htmlFor="links">Add reference Links</label>
          <textarea
            name="links"
            id="links"
            placeholder="Add reference links separated by comma. (e.g: url1, url2, url3)"
          ></textarea>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  } else {
    return (
      <div id="modal-form-wrapper" onClick={handleFormClose}>
        <form
          onClick={(e) => {
            setFormOpen(true);
            e.stopPropagation();
          }}
          onSubmit={(e) => handleFormSubmit(e)}
        >
          <h1>Add New Project Idea</h1>
          {isError && <p className="error-msg">{errorMsg}</p>}
          <label htmlFor="project-name">
            Project Name <span>*</span>
          </label>
          <input
            type="text"
            name="project-name"
            id="project-name"
            required
            defaultValue={editingCard.projectName}
          />
          <label htmlFor="platform">
            Choose Platform <span>*</span>
          </label>
          <select
            name="platform"
            id="platform"
            required
            defaultValue={editingCard.platform}
          >
            <option value="select" disabled={true}>
              Select
            </option>
            <option value="Instagram">Instagram</option>
            <option value="Youtube">YouTube</option>
            <option value="LinkedIn">LinkedIn</option>
          </select>
          <label htmlFor="phase">
            Select the current phase of project <span>*</span>
          </label>
          <select
            name="phase"
            id="phase"
            required
            defaultValue={editingCard.currentPhase}
          >
            <option value="select" disabled={true}>
              Select
            </option>
            <option value="brainstorm">Brainstorm</option>
            <option value="scripting">Scripting</option>
            <option value="filming">Filming</option>
            <option value="ready">Ready</option>
          </select>

          <label htmlFor="script">Description</label>
          <textarea
            name="script"
            id="script"
            cols={10}
            defaultValue={editingCard.script}
          ></textarea>

          <label htmlFor="links">Add reference Links</label>
          <textarea
            name="links"
            id="links"
            placeholder="Add reference links separated by comma. (e.g: url1, url2, url3)"
            defaultValue={editingCard.links.join(", ")}
          ></textarea>
          <button type="submit">Save Changes</button>
        </form>
      </div>
    );
  }
}
