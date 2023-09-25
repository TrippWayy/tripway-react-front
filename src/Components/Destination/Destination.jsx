import { Link } from 'react-router-dom';
import './Destionation.scss';
const Destination = () => {
  return (
    <div className="destionation">
      <div className="container">
        <div className="destination_title">
          <h3>Top Destination</h3>
          <div className="horizantal"></div>
        </div>
        <div className="row">
          <div className="col-12 col-lg-6 col-md-6">
            <div className="destination_card" id="destination-bg-1">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                  United Kingdom
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-6 col-md-6">
            <div className="destination_card" id="destination-bg-2">
              <div className="destination-content">
                <Link to="/" className="destination-city">
                  Turkey
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-3">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                  United States
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-4">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                  Ukranie
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-5">
              <div className="destination-content ">
                <Link to="/" className="destination-city">
                  France
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-3 col-md-6">
            <div className="destination_card" id="destination-bg-6">
              <div className="destination-content">
                <Link to="/" className="destination-city">
                  India
                </Link>
                <ul className="destination-dropdown">
                  <li>
                    <Link to="/">
                      <span>20</span>
                      <span>Hotel</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>48</span>
                      <span>Tours</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>46</span>
                      <span>Activity</span>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <span>32</span>
                      <span>Yachts</span>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destination;
