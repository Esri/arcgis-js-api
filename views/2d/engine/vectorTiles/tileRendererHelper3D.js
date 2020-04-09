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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../Viewpoint","../../ViewState"],(function(e,t,i,l,a){Object.defineProperty(t,"__esModule",{value:!0});var r={context:null,drawPhase:1,state:null,stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerId:-1,painter:null,glyphMosaic:null,spriteMosaic:null,fadeRecorder:null,driverTestResult:null,profiler:null,renderingOptions:null,timeDelta:-1,timeline:null,hasClipping:!1};t.renderVectorTile=function(e,t,i,l,a,s,o,d,u,c){var p=s.adjustLevel(t[0]);r.context=e,r.state=n,r.painter=l,r.glyphMosaic=l.glyphMosaic,r.spriteMosaic=l.spriteMosaic,r.fadeRecorder=l.fadeRecorder,r.pixelRatio=c,r.displayLevel=p,r.requiredLevel=p,l.setContext(e);var y=s.getScale(t[0]),v=s.getShift(t,o*y),g=v[0],f=v[1],h=.125*o*y/u,w=i.transforms.dvs;w[0]=h,w[4]=-h,w[6]=-1-g-d[0]*o*2,w[7]=1+f+(1-d[1])*o*2-2,r.state.size[0]=u,r.state.size[1]=u,i.attached||i.attachWithContext(e),i.triangleCount=0,l.drawTile(r,i,a)};var n=new a({viewpoint:new l({targetGeometry:new i.Point(0,0),scale:1,rotation:0}),size:[256,256]})}));