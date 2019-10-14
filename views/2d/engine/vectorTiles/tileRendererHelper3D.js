// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../Viewpoint","../../../../core/has","../../../../core/libs/gl-matrix-2/mat4","../../ViewState","../../../webgl/renderState"],function(e,t,a,r,i,n,o,s){function l(e,t,a,r,o,s,l,c,u,h,g){var P=s.adjustLevel(t[0]),v={context:e,drawPhase:0,state:p,stationary:!0,pixelRatio:h,displayLevel:P,requiredLevel:P,drawphase:1,renderer:r,layerOpacity:g,globalOpacity:1};r.initializeProgramCache(e);var y=s.getScale(t[0]),w=s.getShift(t,l*y),S=w[0],W=w[1];a.tileTransform.displayCoord[0]=-1-S-c[0]*l*2,a.tileTransform.displayCoord[1]=1+W+(1-c[1])*l*2-2;var b=a.tileTransform.transform;n.mat4.identity(b);var C=.125*l*y/u;b[0]=C,b[5]=-C,v.state.size[0]=u,v.state.size[1]=u,r.setStateParams(v.state,v.pixelRatio,t[0]),a.attached||a.attachWithContext(e),a.triangleCount=0,d(e,a,r,o,P,g),e.setPipelineState(m),v.drawphase=1,a.processRender(v),e.setPipelineState(f),v.drawphase=2,a.processRender(v),v.drawphase=3,a.processRender(v),i("esri-vector-tiles-debug")&&r.renderTileInfo(e,a)}function d(e,t,a,r,i,n){var o=r.backgroundBucketIds;if(o&&o.length>0){e.setPipelineState(c);for(var s=0,l=o;s<l.length;s++){var d=l[s],p=r.layers[d];a.renderBackGroundLayer(e,p,d,t,i,0,n)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.renderVectorTile=l;var p=new o({viewpoint:new r({targetGeometry:new a.Point(0,0),scale:1,rotation:0}),size:[256,256]}),c=s.makePipelineState({blending:s.simpleBlendingParams(1,771),depthTest:{func:515},colorWrite:s.defaultColorWriteParams}),m=s.makePipelineState({depthTest:{func:515},depthWrite:s.defaultDepthWriteParams,colorWrite:s.defaultColorWriteParams}),f=s.makePipelineState({blending:s.simpleBlendingParams(1,771),depthTest:{func:515},colorWrite:s.defaultColorWriteParams})});