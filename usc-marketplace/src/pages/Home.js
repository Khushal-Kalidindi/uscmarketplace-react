
import './../App.css';
import ListingBox from '../listing/ListingBox';

function HomePage() {
  return (
    <div id="homeDiv" className="App container-fluid">
      <h1>HomePage</h1>
      <div className="row">
        <div>
          <ListingBox />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
