function plotPoint() {
    var x0 = parseInt(document.getElementById("x0").value);
    var y0 = parseInt(document.getElementById("y0").value);
    var x = parseInt(document.getElementById("x").value);
    var y = parseInt(document.getElementById("y").value);

    console.log(x0, y0, x, y); //previously line#2

    var in1 = document.getElementById("in1");
    var out1 = document.getElementById("out1");

    in1.innerHTML = x0 + " " + y0 + " " + x + " " + y; //previously line#3
    var point = document.createElement('div');  
    point.className = 'point';
    /* control where to place the div on the screen using left and bottom of position:absolute */
    point.style.left = (x - x0 + 200 - 5) + 'px'; // subtract half the width of the point to center it by changing left css property & previously line#7
    point.style.bottom = (y - y0 + 200 - 5) + 'px'; // subtract half the height of the point to center it by changing bottom css property & previously line#8
    document.getElementById('coordinatePlane').appendChild(point);

    if (x > x0 && y > y0){
      out1.innerHTML = "NE" //previousy line#12 to 25
    }
    else if (x < x0 && y < y0){
      out1.innerHTML = "SO"
    }
    else if (x > x0 && y < y0){
      out1.innerHTML = "SE"
    }
    else if (x < x0 && y > y0){
      out1.innerHTML = "NO"
    }
    else{
      out1.innerHTML = "divisa"
    }
  } //previously line 26