import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className="pl-3">
      <div>
        <h1>Chip</h1>
        <p className="lead">Chip generates a compact element that can represent an input, attribute, or action.</p>
      </div>
      <div>
        <h2 className="display-1">Introduction</h2>
        <p>Chips are most frequently used in two main use cases: as pills of informative content or as filtering options.</p>

        <p>The badge component is most frequently used to signal status (online, offline, busy, etc) and whether there's notifications or not.</p>
      </div>
      <div>
        Playground
      </div>
    </div>
  );
};

export default Home;
