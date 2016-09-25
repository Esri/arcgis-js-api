// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["require","exports","../../../core/urlUtils","./StyleLayer"],function(e,r,t,i){var s=function(){function e(r,i){void 0===i&&(i=""),this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=r.sprite,t.isAbsolute(this.sprite)||(this.sprite=t.join(i,this.sprite)),this.glyphs=r.glyphs,t.isAbsolute(this.glyphs)||(this.glyphs=t.join(i,this.glyphs)),this.layers=(r.layers||[]).map(e._create),this._identifyRefLayers()}return e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,i=this.layers;t<i.length;t++){var s=i[t];if(1===s.type){var y=s.sourceLayer;y+="|"+JSON.stringify(s.minzoom),y+="|"+JSON.stringify(s.maxzoom),y+="|"+JSON.stringify(s.filter),e.push({key:y,layer:s})}if(2===s.type){var y=s.sourceLayer;y+="|"+JSON.stringify(s.minzoom),y+="|"+JSON.stringify(s.maxzoom),y+="|"+JSON.stringify(s.filter),y+="|"+JSON.stringify(s.layout["line-cap"]),y+="|"+JSON.stringify(s.layout["line-join"]),r.push({key:y,layer:s})}}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){e.sort(function(e,r){return e.key<r.key?-1:e.key>r.key?1:0});for(var r,t,i=e.length,s=0;i>s;s++){var y=e[s];if(y.key===r)y.layer.refLayerId=t;else if(r=y.key,t=y.layer.id,1===y.layer.type&&!y.layer.hasPaintProperty("fill-outline-color"))for(var a=s+1;i>a;a++){var n=e[a];if(n.key!==r)break;if(n.layer.hasPaintProperty("fill-outline-color")){e[s]=n,e[a]=y,t=n.layer.id;break}}}},e._create=function(e,r,t){var s=1/(t.length+1),y=1-(1+r)*s;switch(e.type){case"background":return new i.StyleLayer(0,e,y);case"fill":return new i.StyleLayer(1,e,y);case"line":return new i.StyleLayer(2,e,y);case"symbol":return new i.StyleLayer(3,e,y);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":throw new Error("Unsupported vector tile circle layer")}throw new Error("Unknown vector tile layer")},e}();return s});