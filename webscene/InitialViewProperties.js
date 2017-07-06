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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../geometry/HeightModelInfo","../geometry/SpatialReference","./Environment","../core/accessorSupport/decorators"],function(e,t,o,n,r,i,p,l,c,s){var a=u=function(e){function t(t){var o=e.call(this,t)||this;return o.environment=new c,o.spatialReference=null,o.heightModelInfo=null,o.viewpoint=null,o}return o(t,e),Object.defineProperty(t.prototype,"viewingMode",{set:function(e){("local"===e||"global"===e)&&this._set("viewingMode",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new u({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})},t}(s.declared(i));n([s.property({type:c})],a.prototype,"environment",void 0),n([s.property({type:l})],a.prototype,"spatialReference",void 0),n([s.property({type:p})],a.prototype,"heightModelInfo",void 0),n([s.property()],a.prototype,"viewingMode",null),n([s.property({type:r})],a.prototype,"viewpoint",void 0),a=u=n([s.subclass("esri.webscene.InitialViewProperties")],a);var u;return a});