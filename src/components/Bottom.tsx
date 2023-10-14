import img1 from "../assets/images/image-retro-pcs.jpg";
import img2 from "../assets/images/image-top-laptops.jpg";
import img3 from "../assets/images/image-gaming-growth.jpg";
import "./Bottom.css";
function Bottom(props) {
  return (
    <div className="row">
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={img1} />
          </div>
          <div className="col-md-8">
            <p className="h1">{props.head1}</p>
            <p className="h2">{props.head2}</p>
            <p className="p2">{props.para1}</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={img2} />
          </div>
          <div className="col-md-8">
            <p className="h1">02</p>
            <p className="h2">Top 10 Laptops 2022</p>
            <p className="p2">Our best pick for various needs and budgets</p>
          </div>
        </div>
      </div>
      <div className="col-md-4">
        <div className="row">
          <div className="col-md-4">
            <img className="img-fluid" src={img3} />
          </div>
          <div className="col-md-8">
            <p className="h1">03</p>
            <p className="h2">The Growth Of Gaming</p>
            <p className="p2">
              How the pandemic has sparked fresh opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Bottom;
