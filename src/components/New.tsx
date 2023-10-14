import "./New.css";
function New() {
  const head12 = document.getElementsByClassName(".headin");
  const handleClick = () => {};
  return (
    <div className="New">
      <br />
      <h2 className="heading" onClick={handleClick}>
        New
      </h2>
      <br />

      <p className="h3">Hydrogen vs Electric Cars</p>

      <p className="pg">Will hydrogen-fueled cars ever catch up to Evs?</p>
      <br />
      <hr />

      <p className="h3">The Downside Of AI Artistry</p>

      <p className="pg">
        what are the possible adverse effects of on-demand AI image generation
      </p>
      <br />
      <hr />

      <p className="h3">Is VC funding Drying Up</p>

      <p className="pg">
        Private funding by vc firms is down 50% <br /> YOY. We take a look on
        what that means
      </p>
      <br />
    </div>
  );
}
export default New;
