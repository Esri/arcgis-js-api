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

define(["require","exports","tslib","../../core/Accessor","../../core/accessorSupport/decorators","../../core/libs/gl-matrix-2/vec3","../../core/libs/gl-matrix-2/vec4f64","../../layers/support/ElevationQuery","../../views/3d/support/geometryUtils","../../views/3d/webgl-engine/lib/Intersector"],(function(e,r,t,o,n,s,i,c,a,l){"use strict";return function(e){function r(r){var t=e.call(this,r)||this;return t.numSamplesForPreview=20,t.numSamplesPerChunk=50,t}return t.__extends(r,e),r.prototype.queryElevation=function(e,r){var o,n=r.view,u=r.noDataValue;return t.__awaiter(this,void 0,void 0,(function(){var r,d,p,v,f,y,m,w,g,_;return t.__generator(this,(function(t){if("3d"!==n.type)throw new Error("can only query SceneView");for(r=n.spatialReference,d=c.GeometryDescriptor.fromGeometry(e).project(r),(p=new l.Intersector(n.state.mode)).options.selectionMode=!0,p.options.store=2,v=i.vec4f64.create(),f=i.vec4f64.create(),y=i.vec4f64.create(),m=0,w=d.coordinates;m<w.length;m++)g=w[m],s.vec3.set(f,g.x,g.y,null!==(o=g.z)&&void 0!==o?o:0),n.renderCoordsHelper.toRenderCoords(f,r,f),s.vec3.copy(v,f),n.renderCoordsHelper.setAltitude(2e5,v),_=a.ray.fromPoints(v,f),n.sceneIntersectionHelper.intersectRay(_,p,y)?(n.renderCoordsHelper.fromRenderCoords(y,y,r),g.z=y[2]):g.z=u;return[2,{geometry:d.export(),noDataValue:u}]}))}))},r=t.__decorate([n.subclass("esri.widgets.ElevationProfile.SceneElevationProvider")],r)}(o)}));