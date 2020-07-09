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

define(["require","exports","../../../../geometry","../../../../Viewpoint","../../ViewState"],(function(e,t,r,i,n){Object.defineProperty(t,"__esModule",{value:!0});var l=function(){function e(){this.renderParams={context:null,drawPhase:1,state:new n({viewpoint:new i({targetGeometry:new r.Point(0,0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerId:-1,painter:null,glyphMosaic:null,spriteMosaic:null,fadeRecorder:null,driverTestResult:null,profiler:null,renderingOptions:null,timeDelta:-1,timeline:null,hasClipping:!1,blendMode:null}}return e.prototype.dispose=function(){this.renderParams=null},e.prototype.render=function(e,t,r,i,n,l,a,o,s,d){var p=l.adjustLevel(t[0]),u=this.renderParams;u.context=e,u.painter=i,u.glyphMosaic=i.glyphMosaic,u.spriteMosaic=i.spriteMosaic,u.fadeRecorder=i.fadeRecorder,u.pixelRatio=d,u.displayLevel=p,u.requiredLevel=p,i.setContext(e);var c=l.getScale(t[0]),y=l.getShift(t,a*c),f=y[0],g=y[1],v=.125*a*c/s,h=r.transforms.dvs;h[0]=v,h[4]=-v,h[6]=-1-f-o[0]*a*2,h[7]=1+g+(1-o[1])*a*2-2,u.state.size[0]=s,u.state.size[1]=s,r.stage||r.attachWithContext(e),r.triangleCount=0,i.drawTile(u,r,n)},e}();t.VectorTileRendererHelper3D=l}));