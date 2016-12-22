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

define(["require","exports","../easing","./Definition","./Settings","./apex/Path"],function(t,i,e,n,a,o){var s={zoom:0,pan:0,rotate:0},r=function(){function t(t){this.createCamera=t,this.time=0,this.definition=new n.Definition(t),this.path=new o.Path}return t.prototype.update=function(t,i,e){this.definition.update(t,i,e),this.path.update(this.definition,e),this.time=this._applyTimeSettings(this.path.time,e),this.settings=e},t.prototype.cameraAt=function(t,i){i||(i=this.createCamera()),t=Math.min(Math.max(0,t),1),t=this.settings.easing?this.settings.easing(t,1e3*this.time):this.time>=1?e.inOutCoastQuad(t):e.outExpo(t);var n=this.path.interpolateComponentsAt(t,s);return i.interpolate(this.definition.source,this.definition.target,n),i},t.prototype._applyTimeSettings=function(t,i){var e=null!=i.speedFactor?i.speedFactor:1;null!=i.duration?t=i.duration:null!=i.speedFactor&&(t/=e);var n=null!=i.minDuration?i.minDuration:a.defaultSettings.minDuration/e,o=null!=i.maxDuration?i.maxDuration:a.defaultSettings.maxDuration/e;return t=Math.min(Math.max(n,t),o)},t}();i.Animation=r,Object.defineProperty(i,"__esModule",{value:!0}),i["default"]=r});