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

define(["require","exports","../../core/libs/gl-matrix-2/vec3"],(function(t,a,n){function r(t){var a=t*t;return t<0&&(a*=-1),a}Object.defineProperty(a,"__esModule",{value:!0}),a.quadraticAccentuation=r,a.resetTransformation=function(t){return t.translation[0]=0,t.translation[1]=0,t.translation[2]=0,t.heading=0,t.tilt=0,t},a.extractTransformation=function(t,a,e){var i=e,o=t.state,s=t.device,l="forward-down"===a.tiltDirection?1:-1;return"standard"===s.deviceType?(i.translation[0]=r(o.axes[0]),i.translation[1]=r(o.axes[1]),i.translation[2]=r(o.buttons[7])-r(o.buttons[6]),i.heading=r(o.axes[2]),i.tilt=r(o.axes[3])):"spacemouse"===s.deviceType&&(i.translation[0]=1.2*r(o.axes[0]),i.translation[1]=1.2*r(o.axes[1]),i.translation[2]=2*-r(o.axes[2]),i.heading=1.2*r(o.axes[5]),i.tilt=1.2*r(o.axes[3])),i.tilt*=l,n.vec3.scale(i.translation,i.translation,1),i},a.extractTransformationKeyboard=function(t,a){var n=a;return n.translation[0]=t[1]-t[0],n.translation[1]=t[3]-t[2],n.translation[2]=t[4]-t[5],n.heading=t[7]-t[6],n.tilt=t[8]-t[9],n.zoom=t[10]-t[11],n},a.isZeroTransformation=function(t){return 0===t.translation[0]&&0===t.translation[1]&&0===t.translation[2]&&0===t.heading&&0===t.tilt&&0===t.zoom}}));