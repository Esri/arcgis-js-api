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

define(["require","exports"],function(i,t){var n=function(){function i(i,t){this.color=i,this.intensity=t}return i.prototype.set=function(i){void 0!==i.color&&(this.color=i.color),void 0!==i.intensity&&(this.intensity=i.intensity)},i}();t.AmbientLight=n;var o=function(){function i(i,t,n){this.color=i,this.intensity=t,this.direction=n}return i.prototype.set=function(i){void 0!==i.color&&(this.color=i.color),void 0!==i.intensity&&(this.intensity=i.intensity),void 0!==i.direction&&(this.direction=i.direction)},i}();t.DirectionalLight=o});