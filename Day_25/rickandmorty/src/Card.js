function CharacterCard(props) {
  return (
    <div className="card">
      <div className="titlebar">
        <span className="buttons">
          <button className="minimize" id="crdButton">
            <svg x="0px" y="0px" viewBox="0 0 10.2 1">
              <rect x="0" y="50%" width="10.2" height="1"></rect>
            </svg>
          </button>
          <button className="maximize" id="crdButton">
            <svg viewBox="0 0 10 10">
              <path d="M0,0v10h10V0H0z M9,9H1V1h8V9z"></path>
            </svg>
          </button>
          <button className="close" id="crdButton">
            <svg viewBox="0 0 10 10">
              <polygon points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"></polygon>
            </svg>
          </button>
        </span>
      </div>
      <div className="cppcode">
        <pre id="pre">
          <div className="daDiv">
            <h2>{props.chr.name}</h2>
            <img
              src={props.chr.image}
              style={{ width: "140px", border: "1px solid red" }}
            />
            <section id="chrInfos">
              <h2>Status: {props.chr.status}</h2>
              <h2>
                {(() => {
                  switch (props.chr.status.toLowerCase()) {
                    case "unknown":
                      return "❓";
                    case "dead":
                      return "💀";
                    case "alive":
                      return "🫠";
                    default:
                      return "#FFFFFF";
                  }
                })()}
              </h2>

              <h3>Species: {props.chr.species}</h3>
              <h3>Gender: {props.chr.gender}</h3>
              <h3>Location</h3>
              <h3>{props.chr.location.name}</h3>
            </section>
            <button className="comic-button" onClick={props.generateChar}>
              Another!
            </button>
          </div>
        </pre>
      </div>
    </div>
  );
}

export default CharacterCard;
