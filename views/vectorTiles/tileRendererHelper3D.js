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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../geometry","../../Viewpoint","../../core/has","../../core/libs/gl-matrix-2/gl-matrix","../2d/ViewState"],function(e,t,a,r,i,n,s){function l(e,t,a,r,s,l,d){if(l!==d)throw new Error("It is expected that tiles are square!");var p=s.adjustLevel(t[0]),c={context:e,drawPhase:0,state:o,stationary:!0,pixelRatio:1,displayLevel:p,requiredLevel:p,drawphase:0,renderer:r,layerOpacity:1,globalOpacity:1};r.initializeProgramCache(e);var h=s.getScale(t[0]),g=s.getShift(t,h),b=g[0],u=g[1];a.tileTransform.displayCoord[0]=-1-b,a.tileTransform.displayCoord[1]=1+u;var w=a.tileTransform.transform;n.mat4.identity(w);var m=.125*h*2/l;w[0]=m,w[5]=-m,e.setBlendFunctionSeparate(1,771,1,771),c.state.size=[l,d],r.setStateParams(c.state,c.pixelRatio,t[0]),a.attachWithContext(e),e.setFaceCullingEnabled(!1),e.setDepthFunction(515),e.setBlendingEnabled(!1),e.setDepthTestEnabled(!0),e.setDepthWriteEnabled(!0),a.processRender(c),e.setDepthWriteEnabled(!1),e.setBlendingEnabled(!0),c.drawphase=1,a.processRender(c),c.drawphase=2,a.processRender(c),i("esri-vector-tiles-debug")&&r.renderTileInfo(e,a),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!1),e.setFaceCullingEnabled(!0)}var o=new s({viewpoint:new r({targetGeometry:new a.Point(0,0),scale:1,rotation:0}),size:[256,256]});return l});