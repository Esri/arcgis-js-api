/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../chunks/quat","../../../../../chunks/quatf64","../../../../../chunks/vec3f64"],(function(e,t,o,n,s){"use strict";let i=function(){function e(e){this.mesh=e,this.name="",this.translation=s.create(),this.rotation=n.create(),this.scale=s.clone(s.ONES),this._nodes=[]}var i=e.prototype;return i.addNode=function(e){if(this._nodes.includes(e))throw new Error("Node already added");this._nodes.push(e)},i.forEachNode=function(e){this._nodes.forEach(e)},t._createClass(e,[{key:"rotationAngles",set:function(e){o.fromEuler(this.rotation,e[0],e[1],e[2])}}]),e}();e.Node=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
