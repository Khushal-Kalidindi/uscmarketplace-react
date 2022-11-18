
import './../App.css';
import ListingBox from '../listing/ListingBox';

function HomePage() {
  return (
    <div className="App container-fluid">
      <h1>HomePage</h1>
      <div className="row">
        <h2 className="col-2">Listings</h2>
        <div className="col-10">
          <ListingBox />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
