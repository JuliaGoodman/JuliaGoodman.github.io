const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

var storyText = "It was 94 fahrenheit outside, so :insertx: went for a long drive. When they finally arrived at :inserty:, they gazed longingly because the day started out so smoothley, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a mild day.";
var insertX = ["Jack Johnson", "Jane Doe", "Shawn White"];
var insertY = ["the sink", "the moon", "ur moms house"];
var insertZ = ["blew up", "fell off of a bike", "became stone and fell over"];

randomize.addEventListener('click', result);
function result() {
    console.log("testing");
    var newStory = storyText;

    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);
    newStory = newStory.replaceAll(":insertx:",xItem);
    newStory = newStory.replace(":inserty:",yItem);
    newStory = newStory.replace(":insertz:",zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace("Bob", name);

  }

  if(document.getElementById("uk").checked) {
    const weight = Math.round(300/14) + (' stone');
    const temperature = `${Math.round((94-32) * 5/9)} centigrade`;
    newStory = newStory.replace ("300 pounds", weight);
    newStory = newStory.replace ("94 fahrenheit", temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}