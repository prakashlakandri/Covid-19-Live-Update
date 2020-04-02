/*
  Name: control.js
  Date: April/May 2014
  Description: Functions of the simple webpage page.
  Version: 1.0
*/
 
var currentEl = 'home-';
function switchDivs(thisEl) {
  document.getElementById(currentEl+'div').setAttribute("class", "hidediv");
  document.getElementById(currentEl+'li').setAttribute("class", "");
  document.getElementById(thisEl+'div').setAttribute("class", "showdiv");
  document.getElementById(thisEl+'li').setAttribute("class", "active");
  currentEl = thisEl;
};