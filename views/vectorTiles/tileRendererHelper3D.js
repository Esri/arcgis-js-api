// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["require","exports","dojo/has","../../core/libs/gl-matrix/vec3","../../core/libs/gl-matrix/mat4"],function(e,t,r,a,n){function i(e,t,a,i,d,o,c,p,u,h,f,b){for(var v=[t[0],t[1],t[2]],m=h;1>m;m*=2)v[0]--,v[1]=v[1]>>1,v[2]=v[2]>>1;var g={context:e,budget:null,state:s,stationary:!0,devicePixelRatio:1,displayLevel:d.adjustLevel(o),requiredLevel:d.adjustLevel(t[0]),drawphase:0,renderer:i,layerOpacity:b};if(c!==p)throw new Error("It is expected that tiles are square!");var x=1/h,E=d.getSchemaShift(v,x),w=E[0],y=E[1],D=.125;a.tileTransform.displayCoord[0]=-1-2*x*f[0]-w,a.tileTransform.displayCoord[1]=1+2*x*(1-f[1]-h)+y;var T=a.tileTransform.transform;n.identity(T);var F=D*x*2/c;l.set([F,-F,1]),n.scale(T,T,l),e.setBlendFunctionSeparate(1,771,1,771),e.setClearDepth(1),e.clear(e.gl.DEPTH_BUFFER_BIT),g.state.size=[c,p],g.state.width=c,g.state.height=p,i.setStateParams(g.state,g.devicePixelRatio,v[0]),a.attach(g),e.setFaceCullingEnabled(!1),e.setDepthFunction(515),e.setBlendingEnabled(!1),e.setDepthTestEnabled(!0),e.setDepthWriteEnabled(!0),a.render(g),e.setDepthWriteEnabled(!1),e.setBlendingEnabled(!0),g.drawphase=1,a.render(g),g.drawphase=2,a.render(g),r("esri-vector-tiles-debug")&&i.renderTileInfo(e,a),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!1),e.setFaceCullingEnabled(!0)}var s={extent:{xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:{wkid:102100,isWrappable:!0},intersects:function(e){return!1}},center:[0,0],scale:1,resolution:1,rotation:0,width:1,height:1,size:[256,256],spatialReference:{wkid:102100,isWrappable:!0},worldScreenWidth:1,viewpoint:{},toMap:function(e,t){return[0,0]},toScreen:function(e,t){return[0,0]},clone:function(){return null}},l=a.create();return i});