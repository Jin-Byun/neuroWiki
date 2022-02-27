var count_click = 0;


document.querySelector("#frontal").addEventListener("click", function(e) {
  e.preventDefault();
  if (count_click > 0) {
    console.log("already clicked");
  } else {
    count_click = 14;
    document.getElementById('frontal').firstChild.removeAttribute("title");  
  document.getElementById('frontal').style.gridRow = `1 / span 10`;
  document.getElementById('frontal').style.gridColumn = `1 / span 10`;
  document.getElementById('frontal').style.width = `100%`;
  document.getElementById('frontal').style.height = `100%`;
  document.getElementById('frontal').firstChild.style.width = `100%`;
  document.getElementById('parietal').style.display = `none`;
  document.getElementById('occipital').style.display = `none`;
  document.getElementById('temporal').style.display = `none`;
  document.getElementById('container').style.gridRow = `3 / span 1`;
  document.getElementById('container').style.gridColumn = `2 / span 1`;
  document.getElementById('container').style.height = `100%`;
  document.getElementById('container').style.width = `auto`;
  let hoverTitle = document.querySelector('.img_title');
  hoverTitle.remove();
  document.querySelector('.lobe_container').firstChild.style.cursor = `pointer`;
  let label = document.createElement("div");
  label.style.gridRow = `3 / span 1`;
  label.style.gridColumn = `3 / span 1`;
  label.style.fontSize = `7.5vw`;
  label.style.fontWeight = `bold`;
  label.style.height = `min-content`;
  let labelContent = document.createTextNode("Frontal Lobe");
  label.appendChild(labelContent);
  document.body.append(label);
    getFrequentWd("frontal");
  }
  
})

document.querySelector("#parietal").addEventListener("click", function(e) {
  e.preventDefault();
  if (count_click > 0) {
    console.log("already clicked");
  } else {
    count_click = 14;
    document.getElementById('parietal').firstChild.removeAttribute("title");  
  document.getElementById('parietal').style.gridRow = `1 / span 10`;
  document.getElementById('parietal').style.gridColumn = `1 / span 10`;
  document.getElementById('parietal').style.width = `100%`;
  document.getElementById('parietal').style.height = `100%`;
  document.getElementById('parietal').firstChild.style.width = `100%`;
  document.getElementById('frontal').style.display = `none`;
  document.getElementById('occipital').style.display = `none`;
  document.getElementById('temporal').style.display = `none`;
  document.getElementById('container').style.gridRow = `3 / span 1`;
  document.getElementById('container').style.gridColumn = `2 / span 1`;
  document.getElementById('container').style.height = `100%`;
  document.getElementById('container').style.width = `auto`;
  let hoverTitle = document.querySelector('.img_title');
  hoverTitle.remove();
  document.querySelector('.lobe_container').firstChild.style.cursor = `pointer`;
  let label = document.createElement("div");
  label.style.gridRow = `3 / span 1`;
  label.style.gridColumn = `3 / span 1`;
  label.style.fontSize = `7.5vw`;
  label.style.fontWeight = `bold`;
  label.style.height = `min-content`;
  let labelContent = document.createTextNode("Parietal Lobe");
  label.appendChild(labelContent);
  document.body.append(label);
    getFrequentWd("parietal");
  }
  
})

document.querySelector("#occipital").addEventListener("click", function(e) {
  e.preventDefault();
  if (count_click > 0) {
    console.log("already clicked");
  } else {
    count_click = 14;
    document.getElementById('occipital').firstChild.removeAttribute("title");  
  document.getElementById('occipital').style.gridRow = `1 / span 10`;
  document.getElementById('occipital').style.gridColumn = `1 / span 10`;
  document.getElementById('occipital').style.width = `100%`;
  document.getElementById('occipital').style.height = `100%`;
  document.getElementById('occipital').firstChild.style.width = `100%`;
  document.getElementById('frontal').style.display = `none`;
  document.getElementById('parietal').style.display = `none`;
  document.getElementById('temporal').style.display = `none`;
  document.getElementById('container').style.gridRow = `3 / span 1`;
  document.getElementById('container').style.gridColumn = `2 / span 1`;
  document.getElementById('container').style.height = `100%`;
  document.getElementById('container').style.width = `auto`;
  let hoverTitle = document.querySelector('.img_title');
  hoverTitle.remove();
  document.querySelector('.lobe_container').firstChild.style.cursor = `pointer`;
  let label = document.createElement("div");
  label.style.gridRow = `3 / span 1`;
  label.style.gridColumn = `3 / span 1`;
  label.style.fontSize = `6.5vw`;
  label.style.fontWeight = `bold`;
  label.style.height = `min-content`;
  let labelContent = document.createTextNode("Occipital Lobe");
  label.appendChild(labelContent);
  document.body.append(label);
    getFrequentWd("occipital");
  }
  
})

document.querySelector("#temporal").addEventListener("click", function(e) {
  e.preventDefault();
  if (count_click > 0) {
    console.log("already clicked");
  } else {
    count_click = 14;
    document.getElementById('temporal').firstChild.removeAttribute("title");  
  document.getElementById('temporal').style.gridRow = `1 / span 10`;
  document.getElementById('temporal').style.gridColumn = `1 / span 10`;
  document.getElementById('temporal').style.width = `100%`;
  document.getElementById('temporal').style.height = `100%`;
  document.getElementById('temporal').firstChild.style.width = `100%`;
  document.getElementById('frontal').style.display = `none`;
  document.getElementById('parietal').style.display = `none`;
  document.getElementById('occipital').style.display = `none`;
  document.getElementById('container').style.gridRow = `3 / span 1`;
  document.getElementById('container').style.gridColumn = `2 / span 1`;
  document.getElementById('container').style.height = `100%`;
  document.getElementById('container').style.width = `auto`;
  let hoverTitle = document.querySelector('.img_title');
  hoverTitle.remove();
  document.querySelector('.lobe_container').firstChild.style.cursor = `pointer`;
  let label = document.createElement("div");
  label.style.gridRow = `3 / span 1`;
  label.style.gridColumn = `3 / span 1`;
  label.style.fontSize = `7.5vw`;
  label.style.fontWeight = `bold`;
  label.style.height = `min-content`;
  let labelContent = document.createTextNode("Temporal Lobe");
  label.appendChild(labelContent);
  document.body.append(label);
    getFrequentWd("temporal");
  }
  
})

function getHoveringTitle() {
var title = "";
$(document).mousemove(function (e) {    
  
  $(".lobe_container").each(function(i, s){
  
      var container = s;
      var img = $(this).children()[0];
      
      if((e.pageY < $(img).offset().top || 
         e.pageY > $(img).offset().top + $(img).height() ||
         e.pageX < $(img).offset().left ||
         e.pageX > $(img).offset().left + $(img).width()) ){
         
          if( $(container).children().length == 2){
             $(container).children()[0].title = $($(container).children()[1]).html();
             container.removeChild($(container).children()[1]);
          }
  
      }
      else{  
          if($(container).children().length == 1){
              console.log("printing title");
              title = $("<div class='img_title'>" + $(container).children()[0].title + "</div>");
              $(container).children()[0].title = "";
              $(container).append(title);
          }
          title.offset({
              top: (e.pageY ? e.pageY : e.clientX),
              left: (e.pageX ? e.pageX : e.clientY)
          });
      }
  });
               
});
}
getHoveringTitle();

async function getFrequentWd(lobe) {
  let targettxt = './frequentWords/';
  targettxt += lobe;
  targettxt += '.txt'
  const response = await fetch(targettxt) //send get request
  const data = await response.text(); //get file response
  const words = data.split(', '); //get token
  let details = "";
  words.forEach(word => {
    details += word + "\n";
  }) 
  console.log(details);
  let list = document.createElement("div");
  list.style.gridRow = `3 / span 2`;
  list.style.gridColumn = `3 / span 1`;
  list.style.fontSize = `clamp(8pt,4.2vw,16pt)`;
  list.style.marginTop = `15vw`;
  list.style.height = `min-content`;
  list.style.width = `100%`;
  list.innerHTML = details;
  document.body.append(list);
}

//------------------------------------------------------
// Get data from a CSV file with ".fetch()"
// Since this file is local, you must use "live serve"
//------------------------------------------------------
async function getCSVdata(lobe) {
  let targetCSV = './csv/';
  targetCSV += lobe;
  targetCSV += '.csv'
  const response = await fetch(targetCSV) //send get request
  const data = await response.text(); //get file response
  const list = data.split('\n').slice(1); //get line
  list.forEach(row => {
    const columns = row.split(','); //get token
    const publDate = columns[0]; //published date
    const journal = columns[1]; //the journal which the paper was published in
    const title = columns[2]; // the title of paper
    const author = columns[3]; // last author et al.
      db.collection("countries").set({ //write to firestore
        pubDate: publDate,
        details: details
      })
    })}