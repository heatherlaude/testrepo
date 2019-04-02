var ext_link = document.getElementById("external_link");
ext_link.addEventListener("click",
	function(event) {
		var is_sure = confirm("This link will take you to an external page.  Are you sure you want to leave?");
		if (is_sure === false) {
			event.preventDefault(); //This prevents the default click behavior of sending someone away from your site
			alert("Okay! You can stay.");
		}
	}, false
);

console.log(window.innerHeight);
console.log(window.innerWidth);


//RANDOM QUOTES
var quotes = [
"Well, um, actually a pretty nice little Saturday, we’re going to go to Home Depot. Yeah, buy some wallpaper, maybe get some flooring, stuff like that. Maybe Bed, Bath, & Beyond, I don’t know, I don’t know if we’ll have enough time.",
"I'm Ron Burgundy?",
"HEY MOM! CAN WE GET SOME MEATLOAF? What is she doing back there? I never know what she’s doing.",
"We elves try to stick to the four main food groups, candy, candy cane, candy corn, and syrup…"
];

var q_article = document.getElementById("my_quote");
var rand_int = Math.floor(Math.random() * 4); //This gets random() to return a total of 4 numbers
q_article.innerHTML = quotes[rand_int];

//RANDOM IMAGES
var r_image = [
	"images/wf.jpg",
	"images/buddy.jpg",
	"images/ronburgundy.jpg",
	"images/wf_weddingcrashers.jpeg"
	],

	im = document.getElementById("my_image");

im.src = r_image[rand_int];




