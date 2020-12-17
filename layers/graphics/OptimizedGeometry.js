/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../../chunks/_rollupPluginBabelHelpers"],(function(t){"use strict";return function(){function e(t=[],e=[],n=!1){this.lengths=null!=t?t:[],this.coords=null!=e?e:[],this.hasIndeterminateRingOrder=n}var n=e.prototype;return n.forEachVertex=function(t){let e=0;this.lengths.length||t(this.coords[0],this.coords[1]);for(let n=0;n<this.lengths.length;n++){const s=this.lengths[n];for(let n=0;n<s;n++){t(this.coords[2*(n+e)],this.coords[2*(n+e)+1])}e+=s}},n.clone=function(){return new e(this.lengths.slice(),this.coords.slice(),this.hasIndeterminateRingOrder)},t._createClass(e,[{key:"isPoint",get:function(){return 0===this.lengths.length}}]),e}()}));
