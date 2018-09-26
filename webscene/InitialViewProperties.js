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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../core/accessorSupport/decorators","../geometry/SpatialReference","./Environment"],function(e,t,n,r,i,o,p,s,l){return function(e){function t(t){var n=e.call(this,t)||this;return n.environment=new l,n.spatialReference=null,n.viewpoint=null,n}n(t,e),o=t,Object.defineProperty(t.prototype,"viewingMode",{set:function(e){this._set("viewingMode",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new o({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})};var o;return r([p.property({type:l,json:{write:{isRequired:!0}}})],t.prototype,"environment",void 0),r([p.property({type:s})],t.prototype,"spatialReference",void 0),r([p.property({type:["local","global"]})],t.prototype,"viewingMode",null),r([p.property({type:i,json:{write:{isRequired:!0}}})],t.prototype,"viewpoint",void 0),t=o=r([p.subclass("esri.webscene.InitialViewProperties")],t)}(p.declared(o))});