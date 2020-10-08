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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../Viewpoint","../../ViewState"],(function(e,t,i,r,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VectorTileRendererHelper3D=void 0;var l=function(){function e(){this.renderParams={context:null,drawPhase:1,state:new n({viewpoint:new r({targetGeometry:new i.Point(0,0),scale:1,rotation:0}),size:[256,256]}),stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerId:-1,painter:null,glyphMosaic:null,spriteMosaic:null,driverTestResult:null,profiler:null,renderingOptions:null,deltaTime:-1,timeline:null,time:0,hasClipping:!1,blendMode:null,dataUploadCounter:0,effects:null,inFadeTransition:!1}}return e.prototype.dispose=function(){this.renderParams=null},e.prototype.render=function(e,t,i,r,n,l,a,s,o,d){var p=l.adjustLevel(t[0]),u=this.renderParams;u.context=e,u.painter=r,u.glyphMosaic=r.glyphMosaic,u.spriteMosaic=r.spriteMosaic,u.pixelRatio=d,u.displayLevel=p,u.requiredLevel=p,r.setContext(e);var c=l.getScale(t[0]),y=l.getShift(t,a*c),g=y[0],v=y[1],f=.125*a*c/o,h=i.transforms.dvs;h[0]=f,h[4]=-f,h[6]=-1-g-s[0]*a*2,h[7]=1+v+(1-s[1])*a*2-2,u.state.size[0]=o,u.state.size[1]=o,i.stage||i.attachWithContext(e),i.triangleCount=0,r.drawTile(u,i,n)},e}();t.VectorTileRendererHelper3D=l}));