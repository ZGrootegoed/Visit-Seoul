//Home page slideshow
var Album = ['palace.jpg', 'shopping.jpg', 'overview.jpg', 'cityPalace.jpg']

var nextImage = 0;
function GalleryShow() {
    document.getElementById('images').src = Album[nextImage];
    nextImage++;
    if (nextImage == Album.length) {
        nextImage = 0;
    }
    setTimeout("GalleryShow()", 3000);
}
GalleryShow();

//Home page weather
spring.addEventListener("click", function() {
    var temp = "68°F"
    weatherResult.textContent = "The average temperature in this season is: " + temp;
});
summer.addEventListener("click", function() {
    var temp = "85°F"
    weatherResult.textContent = "The average temperature in this season is: " + temp;
});
fall.addEventListener("click", function() {
    var temp = "60°F"
    weatherResult.textContent = "The average temperature in this season is: " + temp;
});
winter.addEventListener("click", function() {
    var temp = "35°F"
    weatherResult.textContent = "The average temperature in this season is: " + temp;
});

//About Seoul page USD converter that performs the function when the button is clicked
function calc() {
    var USMoney = parseFloat(document.getElementById('ConvertUSD').value);
    if (USMoney <= 0) {
        alert('Must have a value greater than 0');
    }
    else {
        CMoney = USMoney * 1271.14
        document.getElementById('result').value = CMoney.toFixed(2);
    }
}

//Food hover text
function hoverInfo1(info) {
    info = "A juicy, savory dish of grilled marinated beef, bulgogi is one of the most popular Korean meat dishes throughout the world, and was ranked as the 23rd most delicious food in the world according to CNN Travel’s reader’s poll in 2011. It is often grilled with garlic and sliced onions to add flavor to the meat. The meat is usually wrapped in lettuce and it is also traditionally eaten with ssamjang (a thick, red spicy paste)";
    document.getElementById("foodInfo").innerHTML=info;
}

function hoverInfo2(info) {
    info = "One of the oldest and probably the most essential dishes in Korean cuisine, kimchi is a spicy and sour dish made up of fermented vegetables. It is prepared with various kinds of ingredients, but the most common main ingredient is cabbage. Kimchi is popular among foreigners for its unique flavor, as well as its high nutritional value, fiber content and low calorie content. However, for Koreans, it is most popular due to its significant cultural value. Without kimchi, dinner is considered incomplete.";
    document.getElementById("foodInfo2").innerHTML=info;
}

//Contact Form 
submitButton.addEventListener("submit", function() {
    alert("Thank you!");
});

