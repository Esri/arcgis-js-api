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

define(["require","exports","../core/tsSupport/declareExtendsHelper","../core/tsSupport/decorateHelper","../Viewpoint","../core/Accessor","../geometry/SpatialReference","./Environment","../core/accessorSupport/decorators"],function(e,t,n,o,i,r,p,l,c){var s=function(e){function t(t){e.call(this,t),this.environment=new l,this.spatialReference=null,this.viewpoint=null}return n(t,e),Object.defineProperty(t.prototype,"viewingMode",{set:function(e){("local"===e||"global"===e)&&this._set("viewingMode",e)},enumerable:!0,configurable:!0}),t.prototype.clone=function(){return new t({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})},o([c.property({type:l})],t.prototype,"environment",void 0),o([c.property({type:p})],t.prototype,"spatialReference",void 0),o([c.property()],t.prototype,"viewingMode",null),o([c.property({type:i})],t.prototype,"viewpoint",void 0),t=o([c.subclass("esri.webscene.InitialViewProperties")],t)}(c.declared(r));return s});