// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/libs/gl-matrix/mat4","../../core/libs/gl-matrix/vec3"],function(e,t,r,a,n){function i(e,t,n,i,o,d,c,p,u,h,f,b,m){for(var x=[t[0],t[1],t[2]],v=h;v<1;v*=2)x[0]--,x[1]=x[1]>>1,x[2]=x[2]>>1;var w={context:e,drawPhase:0,state:s,stationary:!0,pixelRatio:1,displayLevel:o.adjustLevel(d),requiredLevel:o.adjustLevel(t[0]),drawphase:0,renderer:i,layerOpacity:m,painter:null};if(c!==p)throw new Error("It is expected that tiles are square!");var E=1/h,g=o.getSchemaShift(x,E),y=g[0],S=g[1];n.tileTransform.displayCoord[0]=-1-2*E*f[0]-y,n.tileTransform.displayCoord[1]=1+2*E*(1-f[1]-h)+S;var R=n.tileTransform.transform;a.identity(R),o.isWGS84&&512===o.lockedSchemaPixelSize&&(E*=2),0===b&&(E/=2);var D=.125*E*2/c;l.set([D,-D,1]),a.scale(R,R,l),e.setBlendFunctionSeparate(1,771,1,771),e.setClearDepth(1),e.clear(e.gl.DEPTH_BUFFER_BIT),w.state.size=[c,p],w.state.width=c,w.state.height=p,i.setStateParams(w.state,w.pixelRatio,x[0]),n.attach(w),e.setFaceCullingEnabled(!1),e.setDepthFunction(515),e.setBlendingEnabled(!1),e.setDepthTestEnabled(!0),e.setDepthWriteEnabled(!0),n.processRender(w),e.setDepthWriteEnabled(!1),e.setBlendingEnabled(!0),w.drawphase=1,n.processRender(w),w.drawphase=2,n.processRender(w),r("esri-vector-tiles-debug")&&i.renderTileInfo(e,n),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!1),e.setFaceCullingEnabled(!0)}var s={extent:{xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:{wkid:102100,isWrappable:!0},intersects:function(e){return!1}},center:[0,0],scale:1,resolution:1,rotation:0,width:1,height:1,pixelRatio:1,size:[256,256],spatialReference:{wkid:102100,isWrappable:!0},worldScreenWidth:1,viewpoint:{},toMap:function(e,t,r){return null},toScreen:function(e,t,r){return null},clone:function(){return null},copy:function(e){return this},toJSON:function(){return null}},l=n.create();return i});