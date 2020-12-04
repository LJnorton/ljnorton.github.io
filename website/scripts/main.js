//Code for live clock//

function showTime() {
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var session = "AM";
    
    if(h === 0){
        h = 12;
    }
    
    if(h > 12){
        h = h - 12;
        session = "PM";
    }
    
    h = (h < 10) ? "0" + h : h;
    m = (m < 10) ? "0" + m : m;
    s = (s < 10) ? "0" + s : s;
    
    var time = h + ":" + m + ":" + s + " " + session;
    document.getElementById("MyClockDisplay").innerText = time;
    document.getElementById("MyClockDisplay").textContent = time;
    
    setTimeout(showTime, 1000);
    
}

showTime();

//Code for Silly Story Generator//

var customName = document.getElementById('customname');
var randomize = document.querySelector('.randomize');
var story = document.querySelector('.story');

function randomValueFromArray(array) {
  return array[Math.floor(Math.random() * array.length)];
}

var storyText = "It was a warm Summer day, so :insertv: went for a walk. When they got to :insertw:, they were stopped by :insertx: who told them :inserty: Shocked, :insertv: went back home, having learned something of value today: :insertz:";

var insertV = ["Bill", "Big Jon", "Charlie 'Carl' Charles"];
var insertW = ["the park", "the forest", "their front gate"];
var insertX = ["their neighbour Jim", "the police", "their overpowering guilt"];
var insertY = ["they had left the oven on.", "the trees have eyes.", "they did not have a license for that."];
var insertZ = ["sunny days are always eventful.", "even a broken clock is right twice a day.", "the moon isn't made of cheese."];
randomize.addEventListener('click', result);

function result() {
  var newStory = storyText;
  var vItem = randomValueFromArray(insertV);
  var wItem = randomValueFromArray(insertW);
  var xItem = randomValueFromArray(insertX);
  var yItem = randomValueFromArray(insertY);
  var zItem = randomValueFromArray(insertZ);

  var newStory = newStory.replace(':insertv:', vItem);
  var newStory = newStory.replace(':insertv:', vItem);
  var newStory = newStory.replace(':insertw:', wItem);
  var newStory = newStory.replace(':insertx:', xItem);
  var newStory = newStory.replace(':inserty:', yItem);
  var newStory = newStory.replace(':insertz:', zItem);
 
  if (customName.value !== '') {
    var name = customName.value;
    newStory = newStory.replace(vItem, name);
    newStory = newStory.replace(vItem, name);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';

}
