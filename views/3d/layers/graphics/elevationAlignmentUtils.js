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
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","../../../../core/compilerUtils","../../../../core/libs/gl-matrix-2/mat4","../../../../core/libs/gl-matrix-2/mat4f64","../../../../core/libs/gl-matrix-2/vec3f64","./graphicUtils","../../support/ElevationProvider","../../support/projectionUtils"],(function(e,t,n,r,o,a,i,l,u){function f(e,t,r,o,a){var i=e.z||0;switch(r.mode){case"on-the-ground":var u=l.getElevationAtPoint(t,e,"ground")||0;return a&&(a.verticalDistanceToGround=0,a.sampledElevation=u),u;case"relative-to-ground":u=l.getElevationAtPoint(t,e,"ground")||0;var f=r.geometryZWithOffset(i,o);return a&&(a.verticalDistanceToGround=f,a.sampledElevation=u),f+u;case"relative-to-scene":u=l.getElevationAtPoint(t,e,"scene")||0,f=r.geometryZWithOffset(i,o);return a&&(a.verticalDistanceToGround=f,a.sampledElevation=u),f+u;case"absolute-height":f=r.geometryZWithOffset(i,o);if(a){var s=l.getElevationAtPoint(t,e,"ground")||0;a.verticalDistanceToGround=f-s,a.sampledElevation=s}return f;default:return n.neverReached(r.mode),0}}var s;Object.defineProperty(t,"__esModule",{value:!0}),t.applyPerVertexElevationAlignment=function(e,t,n,r,o,a,i,l,f,s,v){var p,d,g=c[v.mode],m=0;if(u.bufferToBuffer(e,t,n,r,f.spatialReference,o,l)&&(g.requiresAlignment(v)?(m=g.applyElevationAlignmentBuffer(r,o,a,i,l,f,s,v),p=a,d=i):(p=r,d=o),u.bufferToBuffer(p,f.spatialReference,d,a,s.spatialReference,i,l)))return m},t.evaluateElevationAlignmentAtPoint=f,t.elevationModeChangeUpdateType=function(e,t,n){return null==t||null==n?e.definedChanged:"on-the-ground"===t&&"on-the-ground"===n?e.staysOnTheGround:t===n||"on-the-ground"!==t&&"on-the-ground"!==n?s.UPDATE:e.onTheGroundChanged},t.needsElevationUpdates2D=function(e){return"relative-to-ground"===e||"relative-to-scene"===e},t.needsElevationUpdates3D=function(e){return"absolute-height"!==e},t.applyElevationAlignmentForHUD=function(e,t,n,o,a){var l=f(t,n,a,o,p);i.updateVertexAttributeAuxpos1w(e,p.verticalDistanceToGround);var s=p.sampledElevation,c=r.mat4.copy(v,e.objectTransformation);return d[0]=t.x,d[1]=t.y,d[2]=l,u.computeLinearTransformation(t.spatialReference,d,c,o.spatialReference)?e.objectTransformation=c:console.warn("Could not locate symbol object properly, it might be misplaced"),s},function(e){e[e.NONE=0]="NONE",e[e.UPDATE=1]="UPDATE",e[e.RECREATE=2]="RECREATE"}(s=t.SymbolUpdateType||(t.SymbolUpdateType={}));var c={"absolute-height":{applyElevationAlignmentBuffer:function(e,t,n,r,o,a,i,l){var u=l.calculateOffsetRenderUnits(i),f=l.featureExpressionInfoContext;t*=3,r*=3;for(var s=0;s<o;++s){var c=e[t+0],v=e[t+1],p=e[t+2];n[r+0]=c,n[r+1]=v,n[r+2]=null==f?p+u:u,t+=3,r+=3}return 0},requiresAlignment:function(e){var t=e.meterUnitOffset,n=e.featureExpressionInfoContext;return 0!==t||null!=n}},"on-the-ground":{applyElevationAlignmentBuffer:function(e,t,n,r,o,a){var i=0,l=a.spatialReference;t*=3,r*=3;for(var u=0;u<o;++u){var f=e[t+0],s=e[t+1],c=e[t+2],v=a.getElevation(f,s,c,l,"ground")||0;i+=v,n[r+0]=f,n[r+1]=s,n[r+2]=v,t+=3,r+=3}return i/o},requiresAlignment:function(){return!0}},"relative-to-ground":{applyElevationAlignmentBuffer:function(e,t,n,r,o,a,i,l){var u=0,f=l.calculateOffsetRenderUnits(i),s=l.featureExpressionInfoContext,c=a.spatialReference;t*=3,r*=3;for(var v=0;v<o;++v){var p=e[t+0],d=e[t+1],g=e[t+2],m=a.getElevation(p,d,g,c,"ground")||0;u+=m,n[r+0]=p,n[r+1]=d,n[r+2]=null==s?g+m+f:m+f,t+=3,r+=3}return u/o},requiresAlignment:function(){return!0}},"relative-to-scene":{applyElevationAlignmentBuffer:function(e,t,n,r,o,a,i,l){var u=0,f=l.calculateOffsetRenderUnits(i),s=l.featureExpressionInfoContext,c=a.spatialReference;t*=3,r*=3;for(var v=0;v<o;++v){var p=e[t+0],d=e[t+1],g=e[t+2],m=a.getElevation(p,d,g,c,"scene")||0;u+=m,n[r+0]=p,n[r+1]=d,n[r+2]=null==s?g+m+f:m+f,t+=3,r+=3}return u/o},requiresAlignment:function(){return!0}}},v=o.mat4f64.create(),p={verticalDistanceToGround:0,sampledElevation:0},d=a.vec3f64.create()}));