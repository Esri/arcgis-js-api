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

define(["require","exports","../core/tsSupport/extendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessoire","../geometry/SpatialReference","../core/accessoireSupport/typescript"],function(e,t,r,i,o,p,n,l){var s=function(e){function t(t){e.call(this,t),this.spatialReference=null,this.viewpoint=null}return r(t,e),t.prototype.clone=function(){return new t({spatialReference:this.spatialReference?this.spatialReference.clone():null,viewpoint:this.viewpoint?this.viewpoint.clone():null})},i([l.shared("esri.webmap.InitialViewProperties")],t.prototype,"declaredClass",void 0),i([l.property({value:null,type:n})],t.prototype,"spatialReference",void 0),i([l.property({value:null,type:o})],t.prototype,"viewpoint",void 0),t=i([l.subclass()],t)}(p);return s});