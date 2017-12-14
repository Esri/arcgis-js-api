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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","./StyleLayer","dojo/has"],function(e,r,t,i){var a=function(){function e(r,t){if(this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=t?t.spriteUrl:r.sprite,this.glyphs=t?t.glyphsUrl:r.glyphs,i("stable-symbol-rendering")){var a=(r.layers||[]).filter(function(e){return e.layout&&e.layout["text-font"]})[0];a&&(r.layers||[]).forEach(function(e){e.layout&&e.layout["text-font"]&&(e.layout["text-font"]=a.layout["text-font"])})}this.layers=(r.layers||[]).map(e._create),this._identifyRefLayers()}return e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,i=0,a=this.layers;i<a.length;i++){var n=a[i];if(1===n.type){var y=n,o=n.sourceLayer;o+="|"+JSON.stringify(n.minzoom),o+="|"+JSON.stringify(n.maxzoom),o+="|"+JSON.stringify(n.filter),(y.hasDataDrivenFill||y.hasDataDrivenOutline)&&(o+="|"+JSON.stringify(t)),e.push({key:o,layer:n})}if(2===n.type){var l=n,o=n.sourceLayer;o+="|"+JSON.stringify(n.minzoom),o+="|"+JSON.stringify(n.maxzoom),o+="|"+JSON.stringify(n.filter),o+="|"+JSON.stringify(n.layout&&n.layout["line-cap"]),o+="|"+JSON.stringify(n.layout&&n.layout["line-join"]),l.hasDataDrivenLine&&(o+="|"+JSON.stringify(t)),r.push({key:o,layer:n})}++t}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){e.sort(function(e,r){return e.key<r.key?-1:e.key>r.key?1:0});for(var r,t,i=e.length,a=0;i>a;a++){var n=e[a];if(n.key===r)n.layer.refLayerId=t;else if(r=n.key,t=n.layer.id,1===n.layer.type&&!n.layer.getPaintProperty("fill-outline-color"))for(var y=a+1;i>y;y++){var o=e[y];if(o.key!==r)break;if(o.layer.getPaintProperty("fill-outline-color")){e[a]=o,e[y]=n,t=o.layer.id;break}}}},e._create=function(e,r,i){var a=1/(i.length+1),n=1-(1+r)*a;switch(e.type){case"background":return new t.BackgroundStyleLayer(0,e,n);case"fill":return new t.FillStyleLayer(1,e,n);case"line":return new t.LineStyleLayer(2,e,n);case"symbol":return new t.SymbolStyleLayer(3,e,n);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":throw new Error("Unsupported vector tile circle layer")}throw new Error("Unknown vector tile layer")},e}();return a});