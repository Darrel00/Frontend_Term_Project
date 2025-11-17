import "./CardModal.css";

function CardModal(){
    return (
        <div className="cardModal">
            <h1 className="modalTitle">Add New Card</h1>
            <button className="saveButton">Save</button>
            <form className="modalForm">
                <h2 className="inputTitle">Front Side</h2>
                <input className="textInput" type="text" required="yes"></input>
                <h2 className="inputTitle">Back Side</h2>
                <input className="textInput" type="text"required="yes"></input>
            </form>
        </div>
    );
}

export default CardModal