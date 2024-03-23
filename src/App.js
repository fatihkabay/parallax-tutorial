import layerBaseImage from "./img/layer-base.png";
import layerFrontImage from "./img/layer-front.png";
import layerMiddleImage from "./img/layer-middle.png";
import dungeonImage from "./img/dungeon.jpg";

function App() {
  return (
    <>
      <div className="wrapper">
        <div className="content">
          <header className="header-main">
            <div className="layers">
              <div className="layer-head">
                <div className="caption">Welcome to Parallax Website</div>
                <div className="title">Dark Forest</div>
              </div>
              <div
                className="img-layer layer-base"
                style={{ backgroundImage: `url(${layerBaseImage})` }}
              ></div>
              <div
                className="img-layer layer-mid"
                style={{ backgroundImage: `url(${layerMiddleImage})` }}
              ></div>
              <div
                className="img-layer layer-front"
                style={{ backgroundImage: `url(${layerFrontImage})` }}
              ></div>
            </div>
          </header>
          <article
            className="article-main"
            style={{ backgroundImage: `url(${dungeonImage})` }}
          >
            <div className="m-article-content">
              <h2 className="m-header">Story to be continued!</h2>
              <p className="m-paragraph">...</p>
            </div>
            <div className="copy">
                Kabay INC
            </div>
          </article>
        </div>
      </div>
    </>
  );
}

export default App;
