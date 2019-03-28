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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../core/accessorSupport/decorators","../geometry/SpatialReference","./background/ColorBackground"],function(e,r,t,o,n,i,p,c,l){return function(e){function r(r){var t=e.call(this,r)||this;return t.background=null,t.spatialReference=null,t.viewpoint=null,t}t(r,e),i=r,r.prototype.clone=function(){return new i({background:this.background?this.background.clone():null,spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():null})};var i;return o([p.property({type:l})],r.prototype,"background",void 0),o([p.property({type:c})],r.prototype,"spatialReference",void 0),o([p.property({type:n})],r.prototype,"viewpoint",void 0),r=i=o([p.subclass("esri.webmap.InitialViewProperties")],r)}(p.declared(i))});