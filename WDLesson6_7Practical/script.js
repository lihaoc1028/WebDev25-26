let data, info;

async function init(){   
  let link = "MVC.json"; //let link = "https://data.cityofnewyork.us/resource/erm2-nwe9.json?$limit=1000";
  info = await fetch(link);
  data = await info.json();
  
  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
                 <h3>id = ${complaint.collision_id}</h3>
                 <hr>
                 <p>#killed: ${complaint.number_of_persons_killed}</p>
                 <p>#injured: ${complaint.number_of_persons_injured}</p>
                 <hr>
                 <p>#cartype: ${complaint.vehicle_type_code1}</p>
                 <p>#date: ${complaint.crash_date}</p>
                 <hr>
                 <p>${complaint.on_street_name}</p>
              </div>`    
  }
  output.innerHTML = build;
}

// Code below demonstrates the basic process to filter information by borough. Use this as a guide for Challenges 2 and 4 below.
function filterByid(){
  let output = document.getElementById("output");
  let cid = document.getElementById("crashid").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.collision_id == cid){
      build += `<div class="fitted card">
                 <h3>id = ${crash.collision_id}</h3>
                 <hr>
                 <p>#killed: ${crash.number_of_persons_killed}</p>
                 <p>#injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>#cartype: ${crash.vehicle_type_code1}</p>
                 <p>#date: ${crash.crash_date}</p>
                 <hr>
                 <p>${crash.on_street_name}</p>
              </div>`        
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 2: Create an event handler (function) to filter the 311 Service Request by zip code.

function filterByid(){
  let output = document.getElementById("output");
  let ccartype = document.getElementById("cartype").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.vehicle_type_code1 == ccartype){
      build += `<div class="fitted card">
                 <h3>id = ${crash.collision_id}</h3>
                 <hr>
                 <p>#killed: ${crash.number_of_persons_killed}</p>
                 <p>#injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>#cartype: ${crash.vehicle_type_code1}</p>
                 <p>#date: ${crash.crash_date}</p>
                 <hr>
                 <p>${crash.on_street_name}</p>
              </div>`        
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}

// Challenge 4: Create an event handler (function) to filter the 311 Service Request by complaint type.
function filterByid(){
  let output = document.getElementById("output");
  let kill = document.getElementById("killed").value;
  let build = "";
  let ct = 0;

  for(let i = 0; i < data.length; i+=1){
    let crash = data[i];
    if(crash.number_of_pedestrians_killed == kill){
      build += `<div class="fitted card">
                 <h3>id = ${crash.collision_id}</h3>
                 <hr>
                 <p>#killed: ${crash.number_of_persons_killed}</p>
                 <p>#injured: ${crash.number_of_persons_injured}</p>
                 <hr>
                 <p>#cartype: ${crash.vehicle_type_code1}</p>
                 <p>#date: ${crash.crash_date}</p>
                 <hr>
                 <p>${crash.on_street_name}</p>
              </div>`        
      ct += 1;
    }
  }
  result.innerHTML = `${ct} Results found.`
  output.innerHTML = build;
}
