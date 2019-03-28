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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","../../geometry","../../Viewpoint","../../core/has","../../core/libs/gl-matrix-2/mat4","../2d/ViewState","../webgl/renderState"],function(e,t,r,a,i,o,s,n){function l(e,t,r,a,s,n,l,m){if(n!==l)throw new Error("It is expected that tiles are square!");var f=s.adjustLevel(t[0]),h={context:e,drawPhase:0,state:d,stationary:!0,pixelRatio:m,displayLevel:f,requiredLevel:f,drawphase:0,renderer:a,layerOpacity:1,globalOpacity:1};a.initializeProgramCache(e);var u=s.getScale(t[0]),w=s.getShift(t,u),P=w[0],g=w[1];r.tileTransform.displayCoord[0]=-1-P,r.tileTransform.displayCoord[1]=1+g;var v=r.tileTransform.transform;o.mat4.identity(v);var y=.125*u*2/n;v[0]=y,v[5]=-y,h.state.size=[n,l],a.setStateParams(h.state,h.pixelRatio,t[0]),r.attachWithContext(e),e.setPipelineState(p),r.processRender(h),e.setPipelineState(c),h.drawphase=1,r.processRender(h),h.drawphase=2,r.processRender(h),i("esri-vector-tiles-debug")&&a.renderTileInfo(e,r)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderVectorTile=l;var d=new s({viewpoint:new a({targetGeometry:new r.Point(0,0),scale:1,rotation:0}),size:[256,256]}),p=n.makePipelineState({depthTest:{func:515},depthWrite:n.defaultDepthWriteParams,colorWrite:n.defaultColorWriteParams}),c=n.makePipelineState({blending:n.simpleBlendingParams(1,771),depthTest:{func:515},colorWrite:n.defaultColorWriteParams})});