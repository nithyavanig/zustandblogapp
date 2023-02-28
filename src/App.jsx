import { Link } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app-left-header-links">
        <Link to="/">Home </Link>
        <Link to="/create">Create </Link>
        <Link to="/blogs">Blogs</Link>
      </div>
      <div className="app-right-header-links">
        <Link to="/about">About</Link>
      </div>
    </div>
  );
}

export default App;
