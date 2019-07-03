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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../Viewpoint","../../../../core/libs/gl-matrix-2/mat4","../../ViewState","../../../webgl/renderState"],function(e,t,r,a,i,n,o){function l(e,t,r,a,n,o,l,m){if(o!==l)throw new Error("It is expected that tiles are square!");var c=n.adjustLevel(t[0]),f={context:e,drawPhase:0,state:s,stationary:!0,pixelRatio:m,displayLevel:c,requiredLevel:c,drawphase:0,renderer:a,layerOpacity:1,globalOpacity:1};a.initializeProgramCache(e);var h=n.getScale(t[0]),u=n.getShift(t,h),w=u[0],P=u[1];r.tileTransform.displayCoord[0]=-1-w,r.tileTransform.displayCoord[1]=1+P;var y=r.tileTransform.transform;i.mat4.identity(y);var g=.125*h*2/o;y[0]=g,y[5]=-g,f.state.size=[o,l],a.setStateParams(f.state,f.pixelRatio,t[0]),r.attachWithContext(e),e.setPipelineState(d),r.render(f),e.setPipelineState(p),f.drawphase=1,r.render(f),f.drawphase=2,r.render(f)}Object.defineProperty(t,"__esModule",{value:!0}),t.renderVectorTile=l;var s=new n({viewpoint:new a({targetGeometry:new r.Point(0,0),scale:1,rotation:0}),size:[256,256]}),d=o.makePipelineState({depthTest:{func:515},depthWrite:o.defaultDepthWriteParams,colorWrite:o.defaultColorWriteParams}),p=o.makePipelineState({blending:o.simpleBlendingParams(1,771),depthTest:{func:515},colorWrite:o.defaultColorWriteParams})});