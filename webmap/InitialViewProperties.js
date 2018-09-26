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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../core/accessorSupport/decorators","../geometry/SpatialReference"],function(e,t,r,o,i,n,p,l){return function(e){function t(t){var r=e.call(this,t)||this;return r.spatialReference=null,r.viewpoint=null,r}r(t,e),n=t,t.prototype.clone=function(){return new n({spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():null})};var n;return o([p.shared("esri.webmap.InitialViewProperties")],t.prototype,"declaredClass",void 0),o([p.property({value:null,type:l})],t.prototype,"spatialReference",void 0),o([p.property({value:null,type:i})],t.prototype,"viewpoint",void 0),t=n=o([p.subclass()],t)}(p.declared(n))});