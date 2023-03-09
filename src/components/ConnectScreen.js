import "./ConnectScreen.css";

function ConnectScreen({ onConnect, visitorUuid, setVisitorUuid }) {
  return (
    <div className="connect-screen-container">
      <label>
        <p style={{ textAlign: "left", margin: 0, marginBottom: 5 }}>
          Enter Visitor Uuid
        </p>
        <input
          className="primary-input"
          placeholder="Visitor Uuid"
          value={visitorUuid}
          onChange={(e) => setVisitorUuid(e.target.value)}
        />
      </label>
      <button className="primary-btn" onClick={onConnect}>
        Connect
      </button>
    </div>
  );
}

export default ConnectScreen;
