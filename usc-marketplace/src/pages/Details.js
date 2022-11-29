import React, { useEffect, useState } from "react";
import "./../App.css";
import "./style.css";
import "./../App.css";
import "./detailsstyle.css";
import tshirt from "./../img/tshirt.jpeg";
import bed from "./../img/bed.jpg";
import desk from "./../img/desk.jpg";
import josh from "./../img/josh.jpg";
import lamp from "./../img/lamp.jpg";
import set from "./../img/set.jpg";
import shoe from "./../img/shoe.jpg";
import shopping from "./../img/shopping.jpg";
import usc from "./../img/usc.jpg";

function DetailsPage() {
  const [isLoggedin, setLoggedin] = useState(false);
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
              <h2>Button Down Shirt</h2>

              <h5>Size: Large</h5>
              <h5>Color: Black</h5>
              <h5>Condition: New</h5>
              <h5>Price: $100</h5>
              <h5>Description: Good </h5>
              {/* {isLoggedin && (
                <div>
                  <button>Edit Listing</button>
                  <button>Delete Listing</button>
                </div>
              )} */}
            </div>

            <div class="descriptionphotos">
              <img class="itemimages" src={tshirt} alt="" />
            </div>
          </div>
        </div>
      </body>
    </html>
    // <div>
    //   <h1>HomePage</h1>
    //   <div id="content">
    //     <div id="left">
    //       <img
    //         src="https://images.unsplash.com/photo-1598032895397-b9472444bf93?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8c2hpcnR8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
    //         height="500"
    //         width="500"
    //       ></img>
    //     </div>

    //     <div id="right">
    //       <div id="rightinner">
    //         <h1>Button Down Shirt</h1>
    //         <h4>Size: Large</h4>
    //         <h4>Color: Black</h4>
    //         <h4>Condition: New</h4>
    //         <h4>Price: $100</h4>
    //         <h4>Description: Good t:shirt</h4>
    //         {isLoggedin && (
    //           <div>
    //             <button>Edit Listing</button>
    //             <button>Delete Listing</button>
    //           </div>
    //         )}
    //       </div>
    //       <h3>James John</h3>
    //       <h4>****</h4>
    //     </div>
    //   </div>
    // </div>
  );
}

export default DetailsPage;
