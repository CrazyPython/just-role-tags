if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != "undefined" ? args[number] : match;
    });
  };
}

var template = `<?xml version="1.0" encoding="UTF-8"?>
<svg height="24px" viewBox="0 0 1000 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <!-- Generator: just-credits.js - https://github.com/CrazyPython/just-credits -->
    <title>Icon credit</title>
    <desc>Created by just-credits.js</desc>
    <defs></defs>
    <g id="1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" font-size="20">
        <g id="Icon-credit" fill="#FFFFFF">
            <g id="Group">
                <text id="2" font-family="Roboto-Light, Roboto" font-weight="300">
                    <tspan x="26" y="19">{0}</tspan>
                </text>
                <text id="3" font-family="Ionicons" font-weight="normal">
                    <tspan x="0.5" y="19.5">{1}</tspan>
                </text>
            </g>
        </g>
    </g>
</svg>`;
document.addEventListener("DOMContentLoaded", function(event) { 
  function generate(icon, text) {
    return template.format(text, icon);
  }

  var icon_tag = document.getElementsByTagName("input")[0];
  var text_tag = document.getElementsByTagName("input")[1];
  function update() {
    var icon = icon_tag.value;
    var text = text_tag.value;
    document.getElementById("result").innerHTML = generate(icon, text);
  }
  update();
})
