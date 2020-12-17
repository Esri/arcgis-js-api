/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports"],(function(e){"use strict";let n=function(){function e(){this.name="",this.nodes=[]}var n=e.prototype;return n.addNode=function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)},n.forEachNode=function(e){this.nodes.forEach(e)},e}();e.Scene=n,Object.defineProperty(e,"__esModule",{value:!0})}));
