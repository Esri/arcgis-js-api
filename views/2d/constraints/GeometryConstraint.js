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

define(["require","exports","tslib","../../../core/Accessor","../../../core/Logger","../../../core/accessorSupport/decorators","../../../geometry/projection","../../../geometry/support/contains","../../../geometry/support/near","../../../geometry/support/webMercatorUtils"],(function(e,t,r,o,n,i,s,a,c,p){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.GeometryConstraint=void 0;var l=n.getLogger("esri.views.MapView"),y=function(e){function t(t){var r=e.call(this,t)||this;return r.geometry=null,r.spatialReference=null,r}var o;return r.__extends(t,e),o=t,Object.defineProperty(t.prototype,"normalizedGeometry",{get:function(){return this.geometry&&this.spatialReference?this.spatialReference.equals(this.geometry.spatialReference)?this.geometry:p.canProject(this.geometry,this.spatialReference)?p.project(this.geometry,this.spatialReference):s.isLoaded()?s.project(this.geometry,this.spatialReference):(l.error("#constraints.geometry","unsupported coordinate system. The source geometry cannot be projected to the view's coordinate system. The projection engine cannot be loaded.",{geometry:this.geometry}),null):null},enumerable:!1,configurable:!0}),t.prototype.constrain=function(e,t){if(!this.normalizedGeometry)return e;var r=e.targetGeometry;if("extent"===this.normalizedGeometry.type?a.extentContainsPoint(this.normalizedGeometry,r):a.polygonContainsPoint(this.normalizedGeometry,r))return e;var o=c.nearestCoordinate(this.normalizedGeometry,r).coordinate;return o?(e.targetGeometry=o,e):e},t.prototype.clone=function(){var e,t;return new o({geometry:null===(e=this.geometry)||void 0===e?void 0:e.clone(),spatialReference:null===(t=this.spatialReference)||void 0===t?void 0:t.clone()})},r.__decorate([i.property({constructOnly:!0})],t.prototype,"geometry",void 0),r.__decorate([i.property({readOnly:!0,dependsOn:["geometry","spatialReference"]})],t.prototype,"normalizedGeometry",null),r.__decorate([i.property({constructOnly:!0})],t.prototype,"spatialReference",void 0),t=o=r.__decorate([i.subclass("esri.views.2d.constraints.GeometryConstraint")],t)}(o);t.GeometryConstraint=y}));