/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../core/maybe"],(function(e,t){"use strict";function n(e,n){switch(e){case"point":case"multipoint":return"point";case"polyline":return(t.isSome(n)&&"polyline"===n.type&&n.paths.length?n.paths[0].length:0)<2?"polylineZeroVertices":"polylineOneVertex";case"polygon":{const e=t.isSome(n)&&"polygon"===n.type&&n.rings.length?n.rings[0].length:0;return e<3?"polylineZeroVertices":e<4?"polygonOneVertex":"polygonTwoVertices"}default:return}}e.getDrawHelpMessage=n,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
