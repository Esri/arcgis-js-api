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

define(["require","exports","tslib","../../../core/promiseUtils","../../../core/unitUtils","../../../geometry/Polyline","../../../geometry/SpatialReference","@dojo/framework/shim/Promise"],(function(e,t,r,n,s,a,o){"use strict";function i(t,s,o){return r.__awaiter(this,void 0,void 0,(function(){var i,c,h,f;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,new Promise((function(t,r){e(["../../../views/3d/support/projectionUtils"],t,r)}))];case 1:return i=r.sent(),n.throwIfAborted(o),c=t.spatialReference,i.canProject(c,s)?(h=[],i.pathsToPaths(t.paths,t.hasZ,t.hasM,c,h,s),[2,new a({spatialReference:s,hasZ:t.hasZ,hasM:t.hasM,paths:h})]):[4,new Promise((function(t,r){e(["../../../geometry/projection"],t,r)}))];case 2:return f=r.sent(),n.throwIfAborted(o),f.isLoaded()?[3,4]:[4,f.load()];case 3:r.sent(),n.throwIfAborted(o),r.label=4;case 4:if(!f.getTransformation(c,s))throw new Error("failed to project path");return[2,f.project(t,s)]}}))}))}Object.defineProperty(t,"__esModule",{value:!0}),t.densifyPath=void 0,t.densifyPath=function(t,a,c){return r.__awaiter(this,void 0,void 0,(function(){var h,f,u,d,l,m,p,w,g;return r.__generator(this,(function(r){switch(r.label){case 0:return u=null,d=t.spatialReference,l=s.getMetersPerUnitForSR(d),[4,new Promise((function(t,r){e(["../../../geometry/geometryEngineAsync"],t,r)}))];case 1:return m=r.sent(),n.throwIfAborted(c),d.isGeographic||d.isWebMercator?[4,i(t,o.WGS84,c)]:[3,6];case 2:return p=r.sent(),[4,m.geodesicLength(p,"meters")];case 3:return h=r.sent(),n.throwIfAborted(c),w=h/a.maxSamples,g=Math.max(a.samplingDistance,w),[4,m.geodesicDensify(p,g,"meters")];case 4:return u=r.sent(),n.throwIfAborted(c),[4,i(u,d,c)];case 5:return f=r.sent(),[3,9];case 6:return[4,m.planarLength(t,"meters")];case 7:return h=r.sent(),n.throwIfAborted(c),w=h/a.maxSamples,g=Math.max(a.samplingDistance,w),[4,m.densify(t,g,"meters")];case 8:f=r.sent(),n.throwIfAborted(c),r.label=9;case 9:return[2,{densifiedPath:f,densifiedPathWgs84:u,pathLength:h/l}]}}))}))}}));