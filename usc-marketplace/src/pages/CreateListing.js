
import './../App.css';
import './CreateListing.css';

function AboutPage() {
  return (
    <div id="main">
            <form method="POST" name="newListing">
                <div id="form">
                    <div class="inputs"><p>Item Name: </p><input type="text" name="iname" placeholder="Ex. Used backetball" required/></div>
                    <div class="inputs"><p>Selling Price ($): </p><input type="text" name="price" placeholder="Ex. 20.99" required/></div>
                    <div class="inputs"><p>Item Description: </p><textarea name="description" rows="3" maxlenghth="200" placeholder="Ex. Nike Adult Indoor Basketball" required></textarea></div>
                    <div class="inputs"><p>Image URL: </p><input type="text" name="url" placeholder="Ex. Paste the link to your image" required/></div>    
                    <div class="inputs">
                        <input type="submit" name="submit" value="Post" id="submit"/>
                        <input type="reset" name="reset" value="Clear" id="reset"/>
                    </div>
                </div>
            </form>
        </div>
  );
}

export default AboutPage;
