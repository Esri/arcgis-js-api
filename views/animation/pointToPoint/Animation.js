// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../easing","./Definition","./Settings","./apex/Path"],function(t,i,n,e,a,o){Object.defineProperty(i,"__esModule",{value:!0});var r={zoom:0,pan:0,rotate:0},s=function(){function t(t){this.createCamera=t,this.time=0,this.definition=new e.Definition(t),this.path=new o.Path}return t.prototype.update=function(t,i,n){this.definition.update(t,i,n),this.path.update(this.definition,n),this.time=this._applyTimeSettings(this.path.time,n),this.settings=n},t.prototype.cameraAt=function(t,i){i=i||this.createCamera(),t=Math.min(Math.max(0,t),1),t=this.settings.easing?this.normalizedEasing(this.settings.easing,t):this.time>=1?this.normalizedEasing(n.inOutCoastQuad,t):this.normalizedEasing(n.outExpo,t);var e=this.path.interpolateComponentsAt(t,r);return i.interpolate(this.definition.source,this.definition.target,e),i},t.prototype.normalizedEasing=function(t,i){var n=t(0),e=t(1);return(t(i)-n)/(e-n)},t.prototype._applyTimeSettings=function(t,i){var n=null!=i.speedFactor?i.speedFactor:1;null!=i.duration?t=i.duration:null!=i.speedFactor&&(t/=n);var e=null!=i.minDuration?i.minDuration:a.defaultSettings.minDuration/n,o=null!=i.maxDuration?i.maxDuration:a.defaultSettings.maxDuration/n;return t=Math.min(Math.max(e,t),o)},t}();i.Animation=s,i.default=s});