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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","./StyleLayer"],function(e,r,t){var i=function(){function e(r,t){this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=t?t.spriteUrl:r.sprite,this.glyphs=t?t.glyphsUrl:r.glyphs,this.layers=(r.layers||[]).map(e._create),this._identifyRefLayers()}return e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,i=this.layers;t<i.length;t++){var y=i[t];if(1===y.type){var a=y.sourceLayer;a+="|"+JSON.stringify(y.minzoom),a+="|"+JSON.stringify(y.maxzoom),a+="|"+JSON.stringify(y.filter),e.push({key:a,layer:y})}if(2===y.type){var a=y.sourceLayer;a+="|"+JSON.stringify(y.minzoom),a+="|"+JSON.stringify(y.maxzoom),a+="|"+JSON.stringify(y.filter),a+="|"+JSON.stringify(y.layout["line-cap"]),a+="|"+JSON.stringify(y.layout["line-join"]),r.push({key:a,layer:y})}}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){e.sort(function(e,r){return e.key<r.key?-1:e.key>r.key?1:0});for(var r,t,i=e.length,y=0;i>y;y++){var a=e[y];if(a.key===r)a.layer.refLayerId=t;else if(r=a.key,t=a.layer.id,1===a.layer.type&&!a.layer.hasPaintProperty("fill-outline-color"))for(var n=y+1;i>n;n++){var s=e[n];if(s.key!==r)break;if(s.layer.hasPaintProperty("fill-outline-color")){e[y]=s,e[n]=a,t=s.layer.id;break}}}},e._create=function(e,r,i){var y=1/(i.length+1),a=1-(1+r)*y;switch(e.type){case"background":return new t.StyleLayer(0,e,a);case"fill":return new t.StyleLayer(1,e,a);case"line":return new t.StyleLayer(2,e,a);case"symbol":return new t.StyleLayer(3,e,a);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":throw new Error("Unsupported vector tile circle layer")}throw new Error("Unknown vector tile layer")},e}();return i});