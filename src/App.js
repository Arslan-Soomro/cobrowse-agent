import FakeWindow from "./components/FakeWindow";
import CustomAgentUIExample from "./CustomAgentUIExample";
import "./App.css";
import { useEffect, useState } from "react";
import ConnectScreen from "./components/ConnectScreen";

function App(props) {
  const [visitorUuid, setVisitorUuid] = useState("");
  const [stepNum, setStepNum] = useState(0);

  useEffect(() => {
    // Load Already used visitor uuid at start using local storage
    const localStorageKey = "visitor_uuid"
    if(visitorUuid?.length === 0) {
      const localVisitorUuid = localStorage.getItem(localStorageKey);
      if(localVisitorUuid) setVisitorUuid(localVisitorUuid);
    }
  }, []);

  useEffect(() => {
    const localStorageKey = "visitor_uuid"
    localStorage.setItem(localStorageKey, visitorUuid);
  }, [visitorUuid]);

  function renderAgentView({ visitorUuid }) {
    return (
      <div className="agent-view">
        <h2>Support Agent</h2>
        <div className="center">
          <button className="primary-btn" onClick={() => setStepNum(0)}>
            Reconnect
          </button>
        </div>
        <FakeWindow>
          <CustomAgentUIExample {...props} visitorUuid={visitorUuid} />
        </FakeWindow>
      </div>
    );
  }

  return (
    <div className="App">
      {stepNum === 0 && (
        <ConnectScreen
          onConnect={() => {
            setStepNum(1);
          }}
          visitorUuid={visitorUuid}
          setVisitorUuid={setVisitorUuid}
        />
      )}
      {stepNum === 1 && renderAgentView({ visitorUuid })}
    </div>
  );
}

export default App;
