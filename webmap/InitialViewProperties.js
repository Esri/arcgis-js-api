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
// See http://js.arcgis.com/4.5/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../geometry/SpatialReference","../core/accessorSupport/decorators"],function(e,r,t,o,i,n,p,l){var a=function(e){function r(r){var t=e.call(this,r)||this;return t.spatialReference=null,t.viewpoint=null,t}return t(r,e),n=r,r.prototype.clone=function(){return new n({spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():null})},o([l.shared("esri.webmap.InitialViewProperties")],r.prototype,"declaredClass",void 0),o([l.property({value:null,type:p})],r.prototype,"spatialReference",void 0),o([l.property({value:null,type:i})],r.prototype,"viewpoint",void 0),r=n=o([l.subclass()],r);var n}(l.declared(n));return a});