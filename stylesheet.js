;(function(window) {

var dom = null;
var dom = document.createElement("style");
dom.type = "text/css";
document.body.appendChild(dom);

function getRulesFromStyles(styles) {
  var rules = '';

  for(var sel in styles) {
    if(styles.hasOwnProperty(sel)) {
      var style = styles[sel];
      var rule = sel + '{';
      for(var k in style) {
        if(style.hasOwnProperty(k) && style[k] !== null
          && typeof style[k] !== 'undefined') {
          rule += (k+':'+style[k]+';');
        }
      }
      rule += '}';
      rules += rule;
    }
  }

  return rules;
}

function Stylesheet(styles) {
  var rules = getRulesFromStyles(styles);
  dom.innerHTML = rules;
}

window.Stylesheet = Stylesheet;

}) (window);