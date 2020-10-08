// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../Viewpoint","../core/JSONSupport","../core/accessorSupport/decorators","../geometry/SpatialReference","./Environment"],(function(e,t,i,n,o,r,p,s){"use strict";return function(e){function t(t){var i=e.call(this,t)||this;return i.environment=new s,i.spatialReference=null,i.viewpoint=null,i}var o;return i.__extends(t,e),o=t,Object.defineProperty(t.prototype,"viewingMode",{set:function(e){this._set("viewingMode",e)},enumerable:!1,configurable:!0}),t.prototype.clone=function(){return new o({environment:this.environment.clone(),spatialReference:this.spatialReference?this.spatialReference.clone():null,viewingMode:this.viewingMode,viewpoint:this.viewpoint?this.viewpoint.clone():null})},i.__decorate([r.property({type:s,json:{write:{isRequired:!0}}})],t.prototype,"environment",void 0),i.__decorate([r.property({type:p})],t.prototype,"spatialReference",void 0),i.__decorate([r.property({type:["local","global"]})],t.prototype,"viewingMode",null),i.__decorate([r.property({type:n,json:{write:{isRequired:!0}}})],t.prototype,"viewpoint",void 0),t=o=i.__decorate([r.subclass("esri.webscene.InitialViewProperties")],t)}(o.JSONSupport)}));