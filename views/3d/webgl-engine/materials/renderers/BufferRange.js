/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(e,t){"use strict";let o=function(){function e(e=0,t=0){this.from=e,this.to=t}return t._createClass(e,[{key:"numElements",get:function(){return this.to-this.from}}]),e}();function n(e){const t=new Map;e.forAll((e=>t.set(e.from,e)));let o=!0;for(;o;)o=!1,e.forEach((n=>{const r=t.get(n.to);r&&(n.to=r.to,t.delete(r.from),e.removeUnordered(r),o=!0)}))}e.BufferRange=o,e.mergeAdjacentRanges=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
