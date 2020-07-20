/*
debounce function 
it limits the rate at which a function gets invoked.
*/
const debounce = (func, delay) => { 
  let debounceTimer 
  return function() { 
    const context = this
    const args = arguments 
    clearTimeout(debounceTimer) 
    debounceTimer = setTimeout(() => func.apply(context, args), delay) 
  } 
}
/**
 * throttling will kill all events that occurs during delay time
 */














const saveToLocalStorageAfterDelay = (getFlights, delay) => {
  let timeoutFunc;  
  return function () {
    var context = this,
    var args = arguments;
    clearTimeout(timeoutFunc);
    timeoutFunc = setTimeout(() => {
      getFlights.apply(context, args);
    }, delay);
  };
};

async function getFlights(...args) {
  let query = document.getElementById("flight_input").value;
  if (query.trim() === "") {
    document.getElementById("search-list").innerHTML = "";
    return;
  }

  let url = `https://voyager.goibibo.com/api/v2/flights_search/find_node_by_name_v2/?limit=15&search_query=${query}&v=2`;
  try {
    let response = await fetch(url);
    let data = await response.json();

    let html = "";
    let f_data = data.data.r;
    f_data.forEach((flight) => {
      html += `<div><button onclick="saveToLocalStorage('${flight.n}')"> ${flight.n}</button></div>`;
    });

    document.getElementById("search-list").innerHTML = html;
  } catch (e) {
    console.log(e);
    alert("eror in fetching api");
    document.getElementById("search-list").innerHTML = "";
  }
}

const saveToLocalStorage = (data) => {
  let dataArray = JSON.parse(localStorage.getItem("recent")) || [];
  dataArray.unshift(data);
  dataArray = dataArray.slice(0, 5);

  localStorage.setItem("recent", JSON.stringify(dataArray));
  let html = "";
  dataArray.forEach((data) => {
    html += `<div> ${data}</div>`;
  });

  document.getElementById("recent-search-list").innerHTML = html;
};

function addRecentOnpageLoad() {
  let dataArray = JSON.parse(localStorage.getItem("recent")) || [];
  dataArray = dataArray.slice(0, 5);
  let html = "";
  dataArray.forEach((data) => {
    html += `<div> ${data}</div>`;
  });

  document.getElementById("recent-search-list").innerHTML = html;
}
addRecentOnpageLoad();

let delayTime = 300;
let save = saveToLocalStorageAfterDelay(getFlights, delayTime);
