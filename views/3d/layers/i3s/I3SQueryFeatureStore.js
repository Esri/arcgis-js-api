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

define(["require","exports","tslib","../../../../core/Accessor","../../../../core/Evented","../../../../core/accessorSupport/decorators","../../../../core/libs/gl-matrix-2/vec4f64","../../../../geometry/support/aaBoundingBox","../../../../geometry/support/aaBoundingRect","../../support/projectionUtils"],(function(e,t,r,o,n,c,a,u,s,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I3SQueryFeatureStore=void 0;var p=function(e){function t(t){var r=e.call(this,t)||this;return r.events=new n,r}return r.__extends(t,e),t.prototype.destroy=function(){},t.prototype.forEach=function(e){this.forAllFeatures((function(t){return e(t),1}))},t.prototype.forEachBounds=function(e,t,r){for(var o=this.getFeatureExtent,n=0,c=e;n<c.length;n++){t(o(c[n],r))}},t.prototype.forEachInBounds=function(e,t){var r=this;this.forAllFeatures((function(o){var n=r.getFeatureExtent(o,d);return s.intersects(e,u.toRect(n,l))&&t(o),1}),(function(t){if(i.mbsToMbs(t.node.mbs,r.sourceSpatialReference,f,r.viewSpatialReference),f[0]>=e[0]&&f[2]<=e[2]&&f[1]>=e[1]&&f[3]<=e[3])return 1;var o=Math.max(e[0],Math.min(f[0],e[2])),n=Math.max(e[1],Math.min(f[1],e[3])),c=f[0]-o,a=f[1]-n;return c*c+a*a<=f[3]*f[3]?1:2}))},r.__decorate([c.property({constructOnly:!0})],t.prototype,"featureAdapter",void 0),r.__decorate([c.property({constructOnly:!0})],t.prototype,"forAllFeatures",void 0),r.__decorate([c.property({constructOnly:!0})],t.prototype,"getFeatureExtent",void 0),r.__decorate([c.property({constructOnly:!0})],t.prototype,"sourceSpatialReference",void 0),r.__decorate([c.property({constructOnly:!0})],t.prototype,"viewSpatialReference",void 0),t=r.__decorate([c.subclass("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],t)}(o);t.I3SQueryFeatureStore=p;var f=a.vec4f64.create(),d=u.create(),l=s.create();t.default=p}));