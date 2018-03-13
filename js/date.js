  var d = new Date();
    var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
    var date = days[d.getDay()].toUpperCase() + ", " + months[d.getMonth()].toUpperCase() + " " + d.getDate();
    document.getElementById("date").innerHTML = date;
