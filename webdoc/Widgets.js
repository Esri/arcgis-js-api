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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../core/JSONSupport","../core/lang","../core/accessorSupport/decorators","./widgets/Range","./widgets/TimeSlider"],function(e,r,t,o,i,n,p,c,s){return function(e){function r(r){var t=e.call(this,r)||this;return t.range=null,t.timeSlider=null,t}t(r,e),i=r,r.prototype.clone=function(){return new i(n.clone({range:this.range,timeSlider:this.timeSlider}))};var i;return o([p.property({type:c,json:{write:!0}})],r.prototype,"range",void 0),o([p.property({type:s,json:{write:!0}})],r.prototype,"timeSlider",void 0),r=i=o([p.subclass("esri.webdoc.Widgets")],r)}(p.declared(i.JSONSupport))});