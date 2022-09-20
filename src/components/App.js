import React from "react";
import SongsList from "./SongList";
import SongDetail from "./SongDetail";

const App = () => {
  return (
    <div style={{ marginTop: 50 }} className="ui container grid">
      <div className="ui row">
        <div className="column eight wide">
          <SongsList />
        </div>
        <div className="column eight wide">
          <SongDetail />
        </div>
      </div>
    </div>
  );
};

export default App;
