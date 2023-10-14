import Hello from "./components/Message";
import NavBar from "./components/NavBar";
import Image from "./components/image";
import Bright from "./components/Bright";
import New from "./components/New";
import Bottom from "./components/Bottom";
import "./index.css";

function App() {
  return (
    <div className="container">
      <NavBar />
      <div className="row">
        <div className="col-md-8">
          <Image />
          <br />
          <Bright />
        </div>
        <div id="new" className="col-md-4">
          <New />
        </div>
      </div>
      <br />
      <br />
      <div>
        <Bottom
          head1="01"
          head2="Top Reviving Retro Pcs"
          para1="What Happens When Old Pcs are given modern upgrades"
        />
      </div>
    </div>
  );
}
export default App;
