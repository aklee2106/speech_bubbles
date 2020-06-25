document.addEventListener('DOMContentLoaded', ()=> {

  const submitButton = document.getElementById('submit');
  const submitForm = document.getElementById('submit-form');
  const userInput = document.querySelector('.user-input');
  const clearButton = document.getElementById('clear');
  const speechButton = document.getElementById('speech');
  const mainContainer = document.querySelector('.main-container');
  const tooltip = d3.select('#word-preview')
  // const fakeWords = [];

  clearButton.addEventListener("click", (e)=> {
    e.preventDefault();
    
     //clears all circles
     while (mainContainer.firstChild) {
      mainContainer.removeChild(mainContainer.firstChild);
     };

     userInput.value = "";
  })

  speechButton.addEventListener('click', (e)=> {
    e.preventDefault();
    let idx = Math.floor(Math.random() * 3);
    userInput.value = speeches[idx];
  })


  submitForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    
    //iterate through the string that user inputs
    let words = userInput.value;
    let frequencies = [];

    //remove punctuation
    const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g;
    function removePunctuation(string) {
      return string.replace(regex, '') 
    }  

    //remove duplicates
    words = removePunctuation(words).toLowerCase().split(" ");
    words = words.filter((word,idx)=>{
      return words.indexOf(word) === idx
    });


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
        // debugger
        return response.json();
      })
      .then(res => {
        let obj = {};
        obj["frequency"] = res.frequency.perMillion; 
        obj["word"] = word;
        
        frequencies.push(obj);
      
        return frequencies; 
        // debugger
      })
      .then(frequencies => {
        // debugger
        
        //render circles here after gathering an array of radii lengths based on freq of word usage
        renderCircles(frequencies);
        //reset radii lengths to blank
        frequencies = [];
        // debugger
      })
			.catch(err => {
        console.log(err);
        console.log(`${word} is not a word!`);
        // fakeWords.push(`${word} is not a word!`);
			});
    });

    tooltip.text("hover over bubbles!")
    
  })

});

function renderCircles(frequencies) {
  // debugger
  const circlesContainer = d3.select("#circles-container");
  const radiusScale = d3.scaleSqrt().domain([1, 32000]).range([5,100]);
  const tooltip = d3.select('#word-preview')
  const colors = ["#F94144", "#F3722C", "#F8961E", "#F9C74F", "#90BE6D", "#43AA8B", "#577590"];

  const numNodes = frequencies.length;
  const nodes = d3.range(numNodes).map(function(d, i) {
    return {radius: radiusScale(frequencies[i].frequency),
      word: frequencies[i].word 
    }
  })

  const simulation = d3.forceSimulation(nodes)
    .force('charge', d3.forceManyBody().strength(5))
    .force('center', d3.forceCenter(500, 250))
    .force('collision', d3.forceCollide().radius(function(d) {
      return d.radius
    }))
    .on('tick', ticked)

  function ticked() {
    // debugger
    const u = d3.select('svg')
    .selectAll('circle')
    .data(nodes)

    u.enter()
      .append('circle')
      .attr('r', function(d) {
        return d.radius
      })
      .attr('fill', function(d, i) {
        // let index = Math.floor(Math.random() * colors.length);
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
        }, 7000)
      })
      .merge(u)
      .attr('cx', function(d) {
        return d.x
      })
      .attr('cy', function(d) {
        return d.y
      })

    u.exit().remove()
  }
  
}








