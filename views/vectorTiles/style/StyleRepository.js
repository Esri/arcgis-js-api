// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","./StyleLayer","dojo/has"],function(e,r,t,i){var a=function(){function e(r,t){if(this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=t?t.spriteUrl:r.sprite,this.glyphs=t?t.glyphsUrl:r.glyphs,i("stable-symbol-rendering")){var a=(r.layers||[]).filter(function(e){return e.layout&&e.layout["text-font"]})[0];a&&(r.layers||[]).forEach(function(e){e.layout&&e.layout["text-font"]&&(e.layout["text-font"]=a.layout["text-font"])})}this.layers=(r.layers||[]).map(e._create),this._identifyRefLayers()}return e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,i=this.layers;t<i.length;t++){var a=i[t];if(1===a.type){var y=a.sourceLayer;y+="|"+JSON.stringify(a.minzoom),y+="|"+JSON.stringify(a.maxzoom),y+="|"+JSON.stringify(a.filter),e.push({key:y,layer:a})}if(2===a.type){var y=a.sourceLayer;y+="|"+JSON.stringify(a.minzoom),y+="|"+JSON.stringify(a.maxzoom),y+="|"+JSON.stringify(a.filter),y+="|"+JSON.stringify(a.layout["line-cap"]),y+="|"+JSON.stringify(a.layout["line-join"]),r.push({key:y,layer:a})}}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){e.sort(function(e,r){return e.key<r.key?-1:e.key>r.key?1:0});for(var r,t,i=e.length,a=0;i>a;a++){var y=e[a];if(y.key===r)y.layer.refLayerId=t;else if(r=y.key,t=y.layer.id,1===y.layer.type&&!y.layer.hasPaintProperty("fill-outline-color"))for(var n=a+1;i>n;n++){var o=e[n];if(o.key!==r)break;if(o.layer.hasPaintProperty("fill-outline-color")){e[a]=o,e[n]=y,t=o.layer.id;break}}}},e._create=function(e,r,i){var a=1/(i.length+1),y=1-(1+r)*a;switch(e.type){case"background":return new t.StyleLayer(0,e,y);case"fill":return new t.StyleLayer(1,e,y);case"line":return new t.StyleLayer(2,e,y);case"symbol":return new t.StyleLayer(3,e,y);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":throw new Error("Unsupported vector tile circle layer")}throw new Error("Unknown vector tile layer")},e}();return a});