/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/quat","../../../../../chunks/quatf64","../../../../../chunks/vec3f64"],(function(e,t,n,o,s){"use strict";let i=function(){function e(){this.name="",this.mesh=null,this.translation=s.create(),this.rotation=o.create(),this.scale=s.clone(s.ONES),this.nodes=[]}var i=e.prototype;return i.addNode=function(e){if(this.nodes.indexOf(e)>=0)throw new Error("Node already added");this.nodes.push(e)},i.forEachNode=function(e){this.nodes.forEach(e)},t._createClass(e,[{key:"rotationAngles",set:function(e){n.fromEuler(this.rotation,e[0],e[1],e[2])}}]),e}();e.Node=i,Object.defineProperty(e,"__esModule",{value:!0})}));
