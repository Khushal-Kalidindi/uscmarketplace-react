import "./../App.css";
import "./profilestyle.css";
import tshirt from "./../img/tshirt.jpeg";
import bed from "./../img/bed.jpg";
import desk from "./../img/desk.jpg";
import josh from "./../img/josh.jpg";
import lamp from "./../img/lamp.jpg";
import set from "./../img/set.jpg";
import shoe from "./../img/shoe.jpg";
import shopping from "./../img/shopping.jpg";
import usc from "./../img/usc.jpg";

function ProfilePage() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile Page</title>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
        />

        <link rel="stylesheet" href="css/profilestyle.css" />
      </head>
      <body>
        <div class="header__wrapper">
          <header></header>
          <div class="cols__container">
            <div class="left__col">
              <div class="img__container">
                <img src={josh} alt="Josh Williams" />
              </div>
              <h2>Josh Williams</h2>
              <p>Welcome to my profile!</p>
              <p>joshw@usc.com</p>

              <div class="content">
                <p>
                  Hi! My name is Josh, I'm a senior at USC. I'm moving out of my
                  apartment next month, so I am selling the items that I don't
                  need anymore. You can find the list of items that I'm selling
                  on the right. Click on the pictures to see more details!
                </p>
              </div>
            </div>
            <div class="right__col">
              <div class="photos">
                <img src={tshirt} alt="" />
                <img src={desk} alt="Photo" />
                <img src={lamp} alt="Photo" />
                <img src={set} alt="Photo" />
                <img src={usc} alt="Photo" />
                <img src={shoe} alt="Photo" />
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

export default ProfilePage;
