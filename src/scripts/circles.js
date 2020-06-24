document.addEventListener('DOMContentLoaded', ()=> {

  const submitButton = document.getElementById('submit');
  const userInput = document.querySelector('.user-input');
  const mainContainer = document.querySelector('.main-container');

  submitButton.addEventListener('click', (e)=>{
    e.preventDefault();
    
    //clears all circles
    while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
    };
    
    //iterate through the string that user inputs
    let words = userInput.value.split(" ");
    let frequencies = [];

    words.forEach(word => {
      
      //API call
      fetch(`https://wordsapiv1.p.rapidapi.com/words/${word}/frequency`, {
				"method": "GET",
				"headers": {
					"x-rapidapi-host": "wordsapiv1.p.rapidapi.com",
					"x-rapidapi-key": "6138fd298emsh11aab9ec9165981p19347fjsna835530440b1"
				}
      })
			.then(response => {
        return response.json();
      })
      .then(res => {
        let obj = {};
        obj["frequency"] = res.frequency.perMillion; 
        obj["word"] = word;
        
        frequencies.push(obj);
        // frequencies.push(res.frequency.perMillion);
        return frequencies; 
        // debugger
      })
      .then(frequencies => {
        // debugger
        //render circles here after gathering an array of radii lengths based on freq of word usage
        renderCircles(frequencies);
        // debugger
        //reset radii lengths to blank
        frequencies = [];
        // debugger
      })
			.catch(err => {
				console.log(err);
			});
    });
  })

  //So now we have circles on the screen. We want to animate now. 




  // hover over circles and see what word it represents
  // const indivCircles = document.querySelector("circle");
  // document.addEventListener('mouseover', showInfo(e));

});

function renderCircles(frequencies) {
  // debugger
  const circlesContainer = d3.select("#circles-container");
  const radiusScale = d3.scaleSqrt().domain([1, 32000]).range([5,100]);

  // const xRange = d3.scale.linear().range([100,800]).domain([0,100])
  // const yRange = d3.scale.linear().range([100,800]).domain([0,100])
  const colors = ['red', 'blue', 'green', 'yellow','purple', 'pink','orange','violet','white'];

  // debugger
  const circles = circlesContainer.selectAll('circle')
    .data(frequencies)
    .enter()
    .append('circle')
    .attr('cx', function(d,i){
      return i* 100 + 300
    })
    .attr('cy', 500)
    .attr("r", function(d){
      return radiusScale(d.frequency);
    })
    .attr('fill', function(d) {
      let index = Math.floor(Math.random() * colors.length);
      // debugger
      return colors[index]; 
    })
    // .attr("fill", "#8b008b")
    .attr('fill-opacity', .5)
    .on('click', function(d){
      console.log(d.word)
    })


  }

// function showInfo(){
//   e.preventDefault();
//   e.Target.word
// }




