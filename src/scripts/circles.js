document.addEventListener('DOMContentLoaded', ()=> {

  const submitButton = document.getElementById('submit');
  const submitForm = document.getElementById('submit-form');
  const userInput = document.querySelector('.user-input');
  const clearButton = document.getElementById('clear');
  const mainContainer = document.querySelector('.main-container');
  const tooltip = d3.select('#word-preview')
  const fakeWords = [];

  clearButton.addEventListener("click", (e)=> {
    e.preventDefault();
    
     //clears all circles
     while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
     };
     
     userInput.value = "";
  })


  submitForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    //iterate through the string that user inputs
    let words = userInput.value.split(" ");

    //remove punctuation
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    function removePunctuation(word) {
      return word.replace(regex, '') 
    }  

    let frequencies = [];

    words.forEach(word => {
      word = removePunctuation(word);
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
        console.log(`${word} is not a word!`);
        fakeWords.push(`${word} is not a word!`);
			});
    });

    tooltip.text("hover over bubbles!")
    
  })



  // hover over circles and see what word it represents
  // const indivCircles = document.querySelector("circle");
  // document.addEventListener('mouseover', showInfo(e));

});

function renderCircles(frequencies) {
  // debugger
  const circlesContainer = d3.select("#circles-container");
  const radiusScale = d3.scaleSqrt().domain([1, 32000]).range([5,100]);
  const tooltip = d3.select('#word-preview')
  //pastel
  // const colors = ["#FFADAD", "#FFD6A5", "#FDFFB6", "#CAFFBF", "#9BF6FF", "#A0C4FF", "#BDB2FF", "#FFC6FF", "#FFFFFC"];

  const colors = ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"];

  // debugger

  const circles = circlesContainer.selectAll('.node')
    .data(frequencies)
    .enter()
    .append('circle')
    .attr('class', 'node')
    // .attr('cx', function(d,i){
    //   return 500
    // })
    // .attr('cy', function(d,i){
    //   return 500
    // })
    .attr("r", function(d,i){
      return radiusScale(d.frequency);
    })
    .attr('fill', function(d, i) {
      let index = Math.floor(Math.random() * colors.length);
      // debugger
      return colors[i % 7]; 
    })
    .attr('fill-opacity', .7)
    .on('click', function(d){
      console.log(d.word)
    })
    .on('mouseover', function(d) {
      return tooltip
        .text(d.word)
        .style('visibility', 'visible')
    })
    .on("mouseout", function() {
      setTimeout(()=>{
        return tooltip.text("")
      }, 5000)
  });
  
  // d3.queue()
  // .defer()
  //   .await(ready)
  // debugger

  const simulation = d3.forceSimulation()
    .force('x', d3.forceX(600).strength(.25))
    .force('y', d3.forceY(600).strength(.25))
    // .force('charge', d3.forceManyBody().strength(30))

    simulation.nodes(frequencies)
      .on('tick', ticked)
      
    function ticked() {
      circles
      .attr('cx', function(d) {
        // debugger
        return d.frequency
      })
      .attr('cy', function(d) {
        // debugger
        return d.frequency
      })
    // var u = d3.select('svg')
    //   .selectAll('circle')
    //   .data(frequencies)
  
    // u.enter()
    //   .append('circle')
    //   .attr('r', function(d){
    //     10
    //   })
    //   .merge(u)
    //   .attr('cx', function(d) {
    //     return d.x
    //   })
    //   .attr('cy', function(d) {
    //     return d.y
    //   })
      
    // u.exit().remove()

    


}
  
}

