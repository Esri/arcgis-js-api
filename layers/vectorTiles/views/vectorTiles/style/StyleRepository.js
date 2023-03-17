// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["require","exports","dojo/has","./StyleLayer"],(function(e,r,t,i){return function(){function e(r,i){if(this.styleJSON=r,this.version=parseFloat(r.version),this.sprite=i?i.spriteUrl:r.sprite,this.glyphs=i?i.glyphsUrl:r.glyphs,t("stable-symbol-rendering")){var a=(r.layers||[]).filter((function(e){return e.layout&&e.layout["text-font"]}))[0];a&&(r.layers||[]).forEach((function(e){e.layout&&e.layout["text-font"]&&(e.layout["text-font"]=a.layout["text-font"])}))}this.layers=(r.layers||[]).map(e._create),this._identifyRefLayers()}return e.prototype._identifyRefLayers=function(){for(var e=[],r=[],t=0,i=0,a=this.layers;i<a.length;i++){var n=a[i];if(1===n.type){var y=n,l=n.sourceLayer;l+="|"+JSON.stringify(n.minzoom),l+="|"+JSON.stringify(n.maxzoom),l+="|"+JSON.stringify(n.filter),(y.hasDataDrivenFill||y.hasDataDrivenOutline)&&(l+="|"+JSON.stringify(t)),e.push({key:l,layer:n})}if(2===n.type){var o=n;l=n.sourceLayer;l+="|"+JSON.stringify(n.minzoom),l+="|"+JSON.stringify(n.maxzoom),l+="|"+JSON.stringify(n.filter),l+="|"+JSON.stringify(n.layout&&n.layout["line-cap"]),l+="|"+JSON.stringify(n.layout&&n.layout["line-join"]),o.hasDataDrivenLine&&(l+="|"+JSON.stringify(t)),r.push({key:l,layer:n})}++t}this._assignRefLayers(e),this._assignRefLayers(r)},e.prototype._assignRefLayers=function(e){var r,t;e.sort((function(e,r){return e.key<r.key?-1:e.key>r.key?1:0}));for(var i=e.length,a=0;a<i;a++){var n=e[a];if(n.key===r)n.layer.refLayerId=t;else if(r=n.key,t=n.layer.id,1===n.layer.type&&!n.layer.getPaintProperty("fill-outline-color"))for(var y=a+1;y<i;y++){var l=e[y];if(l.key!==r)break;if(l.layer.getPaintProperty("fill-outline-color")){e[a]=l,e[y]=n,t=l.layer.id;break}}}},e._create=function(e,r,t){var a=1-(1+r)*(1/(t.length+1));switch(e.type){case"background":return new i.BackgroundStyleLayer(0,e,a);case"fill":return new i.FillStyleLayer(1,e,a);case"line":return new i.LineStyleLayer(2,e,a);case"symbol":return new i.SymbolStyleLayer(3,e,a);case"raster":throw new Error("Unsupported vector tile raster layer");case"circle":return new i.CircleStyleLayer(4,e,a)}throw new Error("Unknown vector tile layer")},e}()}));