//document.body.style.border = "5px solid red";
//the above will add a red border to teh page
//---------------------------------------------------------------------
//document.body.style.backgroundColor = "black";
//the above will change backgroundcolor to blue


//---------------------------------------------------------------------
//var s = document.getElementsByTagName('div');
//for (i = 0; i < s.length; i++) {
//  s[i].setAttribute("style", "background-Color: #5C5654");
//}
// THe above will change all div tags background color to a dark grey
//---------------------------------------------------------------------
//var s=document.getElementsByTagName('p');
//for(i=0;i<s.length;i++)
//{
//    s[i].setAttribute("style","font-size: 50px");
//}
// THe above will change all text in p tag to fontsize 50

//---------------------------------------------------------------------
var element = document.body;
var child = document.body.firstElementChild;
var s = document.getElementsByTagName('div');
var a = document.getElementsByTagName('a');
var h2col =document.getElementsByTagName("h2");
var h3col = document.getElementsByTagName("h3");
var pars = document.getElementsByTagName("p");
var asi = document.getElementsByTagName("aside");
var lab = document.getElementsByTagName("label");

// creating button element
var button = document.createElement('BUTTON');
// creating text to be displayed on button
button.innerHTML = "Do Something";
var darkmode = false;
button.addEventListener("click", function() {
  if (darkmode === false) {

    element.style.border = "5px solid red";
    element.style.backgroundColor="#5C5654";
    for (i = 0; i < s.length; i++) {
      s[i].setAttribute("style", "background-color: black;");
    }
    for (i = 0; i < a.length; i++) {
      a[i].setAttribute("style", "color: white;");
    }
    for (i = 0; i < h2col.length; i++) {
      h2col[i].setAttribute("style", "color: white;");
    }
    for (i = 0; i < h3col.length; i++) {
      h3col[i].setAttribute("style", "color: white;");
    }
    for (i = 0; i < pars.length; i++) {
      pars[i].setAttribute("style", "color: white;");
    }
    for (i = 0; i < asi.length; i++) {
      asi[i].setAttribute("style", "background-color: black;");
    }
    for (i = 0; i < lab.length; i++) {
      lab[i].setAttribute("style", "color: white;");
    }

    darkmode = true;
  }

  else {
    element.style.border = "";
    element.style.backgroundColor="";
    for (i = 0; i < s.length; i++) {
      s[i].setAttribute("style", "background-Color: none");
    }
    for (i = 0; i < a.length; i++) {
      a[i].setAttribute("style", "color: none;");
    }
    for (i = 0; i < h2col.length; i++) {
      h2col[i].setAttribute("style", "color: none;");
    }
    for (i = 0; i < h3col.length; i++) {
      h3col[i].setAttribute("style", "color: none;");
    }
    for (i = 0; i < pars.length; i++) {
      pars[i].setAttribute("style", "color: none;");
    }
    for (i = 0; i < asi.length; i++) {
      asi[i].setAttribute("style", "background-color: none;");
    }
    for (i = 0; i < lab.length; i++) {
      lab[i].setAttribute("style", "color: none;");
    }

    darkmode = false;
  }


});


element.appendChild(button);
element.insertBefore(button, child);
