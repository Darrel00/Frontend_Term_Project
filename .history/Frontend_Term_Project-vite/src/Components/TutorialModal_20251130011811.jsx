import "./TutorialModal.css";

function TutorialModal({ title, content, onClose }) {
  return (
    <div className="tutorialModal">
      <div className="tutorialModalContent">
        <div className="tutorialModalHeader">
          <h1 className="tutorialModalTitle">{title}</h1>
          <button className="tutorialExitButton" onClick={onClose}>✕</button>
        </div>
        <div className="tutorialModalBody">
          {content.map((section, index) => (
            <div key={index} className="tutorialSection">
              <h2 className="tutorialSectionTitle">{section.title}</h2>
              <p className="tutorialSectionText">{section.text}</p>
              {section.list && (
                <ul className="tutorialList">
                  {section.list.map((item, itemIndex) => (
                    <li key={itemIndex} className="tutorialListItem">{item}</li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="tutorialModalFooter">
          <button className="tutorialGotItButton" onClick={onClose}>Got it!</button>
        </div>
      </div>
    </div>
  );
}

export default TutorialModal;