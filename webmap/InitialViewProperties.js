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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../core/lang","../core/accessorSupport/decorators","../geometry/SpatialReference","../webdoc/RangeInfo","./background/ColorBackground"],function(e,r,o,t,n,p,i,a,c,l,s){return function(e){function r(r){var o=e.call(this,r)||this;return o.background=null,o.rangeInfo=null,o.spatialReference=null,o.viewpoint=null,o}o(r,e),p=r,r.prototype.clone=function(){return new p(i.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))};var p;return t([a.property({type:s})],r.prototype,"background",void 0),t([a.property({type:l})],r.prototype,"rangeInfo",void 0),t([a.property({type:c})],r.prototype,"spatialReference",void 0),t([a.property({type:n})],r.prototype,"viewpoint",void 0),r=p=t([a.subclass("esri.webmap.InitialViewProperties")],r)}(a.declared(p))});