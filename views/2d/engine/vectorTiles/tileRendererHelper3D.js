// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","../../../../geometry","../../../../Viewpoint","../../ViewState"],function(e,t,i,l,a){function r(e,t,i,l,a,r,d,u,c,p){var y=r.adjustLevel(t[0]);n.context=e,n.state=o,n.painter=l,n.glyphMosaic=l.glyphMosaic,n.spriteMosaic=l.spriteMosaic,n.fadeRecorder=l.fadeRecorder,n.pixelRatio=p,n.displayLevel=y,n.requiredLevel=y,l.setContext(e);var v=r.getScale(t[0]),g=r.getShift(t,d*v),f=g[0],h=g[1],w=s*d*v/c,x=i.transforms.dvs;x[0]=w,x[4]=-w,x[6]=-1-f-u[0]*d*2,x[7]=1+h+(1-u[1])*d*2-2,n.state.size[0]=c,n.state.size[1]=c,i.attached||i.attachWithContext(e),i.triangleCount=0,l.drawTile(n,i,a)}Object.defineProperty(t,"__esModule",{value:!0});var n={context:null,drawPhase:1,state:null,stationary:!0,pixelRatio:1,displayLevel:-1,requiredLevel:-1,globalOpacity:1,renderPass:"background",styleLayer:null,styleLayerId:-1,painter:null,glyphMosaic:null,spriteMosaic:null,fadeRecorder:null,driverTestResult:null,profiler:null,renderingOptions:null,timeDelta:-1,timeline:null,hasClipping:!1},s=.125;t.renderVectorTile=r;var o=new a({viewpoint:new l({targetGeometry:new i.Point(0,0),scale:1,rotation:0}),size:[256,256]})});