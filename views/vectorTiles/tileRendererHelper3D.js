// COPYRIGHT © 2016 Esri
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

define(["require","exports","../../core/libs/gl-matrix/vec3","../../core/libs/gl-matrix/mat4"],function(e,t,r,a){function n(e,t,r,n,l,d,o,c,p,u,h,f){for(var b=[t[0],t[1],t[2]],v=u;1>v;v*=2)b[0]--,b[1]=b[1]>>1,b[2]=b[2]>>1;var m={context:e,budget:null,state:i,stationary:!0,devicePixelRatio:1,displayLevel:l.adjustLevel(d),requiredLevel:l.adjustLevel(t[0]),drawphase:0,renderer:n,layerOpacity:f};if(o!==c)throw new Error("It is expected that tiles are square!");var x=1/u,E=l.getSchemaShift(b,x),g=E[0],w=E[1],y=.125;r.tileTransform.displayCoord[0]=-1-2*x*h[0]-g,r.tileTransform.displayCoord[1]=1+2*x*(1-h[1]-u)+w;var D=r.tileTransform.transform;a.identity(D);var T=y*x*2/o;s.set([T,-T,1]),a.scale(D,D,s),e.setBlendFunctionSeparate(1,771,1,771),e.setClearDepth(1),e.clear(e.gl.DEPTH_BUFFER_BIT),m.state.size=[o,c],m.state.width=o,m.state.height=c,n.setStateParams(m.state,m.devicePixelRatio,b[0]),r.attach(m),e.setFaceCullingEnabled(!1),e.setDepthFunction(515),e.setBlendingEnabled(!1),e.setDepthTestEnabled(!0),e.setDepthWriteEnabled(!0),r.render(m),e.setDepthWriteEnabled(!1),e.setBlendingEnabled(!0),m.drawphase=1,r.render(m),m.drawphase=2,r.render(m),e.setDepthWriteEnabled(!0),e.setDepthTestEnabled(!1),e.setFaceCullingEnabled(!0)}var i={extent:{xmin:0,ymin:0,xmax:0,ymax:0,spatialReference:{wkid:102100,isWrappable:!0},intersects:function(e){return!1}},center:[0,0],scale:1,resolution:1,rotation:0,width:1,height:1,size:[256,256],spatialReference:{wkid:102100,isWrappable:!0},worldScreenWidth:1,viewpoint:{},toMap:function(e,t){return[0,0]},toScreen:function(e,t){return[0,0]},clone:function(){return null}},s=r.create();return n});