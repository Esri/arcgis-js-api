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
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../core/has","../../core/libs/gl-matrix/mat4"],function(e,t,r,n){function a(e,t,a,s,l,o,d){if(o!==d)throw new Error("It is expected that tiles are square!");var c=l.adjustLevel(t[0]),p={context:e,drawPhase:0,state:i,stationary:!0,pixelRatio:1,displayLevel:c,requiredLevel:c,drawphase:0,renderer:s,layerOpacity:1,painter:null};s.initializeProgramCache(e);var u=l.getScale(t[0]),h=l.getShift(t,u),f=h[0],b=h[1];a.tileTransform.displayCoord[0]=-1-f,a.tileTransform.displayCoord[1]=1+b;var m=a.tileTransform.transform;n.identity(m);var w=.125*u*2/o;m[0]=w,m[5]=-w,e.setBlendFunctionSeparate(1,771,1,771),p.state.size=[o,d],p.state.width=o,p.state.height=d,s.setStateParams(p.state,p.pixelRatio,t[0]),a.attach(p),e.setFaceCullingEnabled(!1),e.setDepthFunction(515),e.setBlendingEnabled(!1),e.setDepthTestEnabled(!0),e.setDepthWriteEnabled(!0),a.processRender(p),e.setDepthWriteEnabled(!1),e.setBlendingEnabled(!0),p.drawphase=1,a.processRender(p),p.drawphase=2,a.processRender(p),r("esri-vector-tiles-debug")&&s.renderTileInfo(e,a),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!1),e.setFaceCullingEnabled(!0)}var i={extent:{xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:{wkid:102100,isWrappable:!0},intersects:function(e){return!1}},center:[0,0],scale:1,resolution:1,rotation:0,width:1,height:1,pixelRatio:1,size:[256,256],spatialReference:{wkid:102100,isWrappable:!0},worldScreenWidth:1,viewpoint:{},toMap:function(e,t,r){return null},toScreen:function(e,t,r){return null},clone:function(){return null},copy:function(e){return this},toJSON:function(){return null}};return a});