// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../../../Color","../../../../core/screenUtils"],function(o,t,e,r){Object.defineProperty(t,"__esModule",{value:!0});var i=function(){function o(o){this.definition=o,this.key=JSON.stringify(o),this.haloSize=Math.round(o.halo.size),this.fillStyle=this.colorToRGBA(o.color),this.haloStyle=this.colorToRGB(o.halo.color)}return o.prototype.colorToRGB=function(o){return"rgb("+o.slice(0,3).map(function(o){return Math.floor(255*o)}).toString()+")"},o.prototype.colorToRGBA=function(o){return"rgba("+o.slice(0,3).map(function(o){return Math.floor(255*o)}).toString()+","+o[3]+")"},o.fromSymbol=function(t,i){void 0===i&&(i=1);var l=t.material?e.toUnitRGBA(t.material.color):n,a=t.halo&&t.halo.color&&t.halo.size>0;return new o({size:null!=t.size?r.pt2px(t.size):12,color:l,font:{family:t.font&&t.font.family?t.font.family:"sans-serif",weight:t.font&&t.font.weight?t.font.weight:"normal",style:t.font&&t.font.style?t.font.style:"normal"},halo:{size:a?r.pt2px(t.halo.size):0,color:a?e.toUnitRGBA(t.halo.color):n},pixelRatio:i})},o}();t.TextRenderParameters=i;var n=[1,1,1,1];t.default=i});