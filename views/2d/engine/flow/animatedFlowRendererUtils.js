/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../core/screenUtils"],(function(e,n){"use strict";function i(e){const i=n.pt2px(e.lineWidth),t=2*i,o=Math.round(n.pt2px(e.lineLength)/t)+1,r=i,l=10,d=e.lineColor.toRgba(),s=[d[0]/255,d[1]/255,d[2]/255,d[3]],{lineSpeed:p,fadeDuration:a,density:h}=e;return{lineRenderWidth:i,segmentLength:t,verticesPerLine:o,lineCollisionWidth:r,lineSpacing:l,lineColor:s,lineSpeed:p,fadeDuration:a,density:h,smoothing:n.pt2px(e.smoothing),velocityScale:1,minWeightThreshold:.001,minSpeedThreshold:.001,maxTurnAngle:1,mergeLines:!0,interpolate:!0,profile:!1}}e.createAnimatedFlowRendererSettings=i,Object.defineProperty(e,"__esModule",{value:!0})}));
