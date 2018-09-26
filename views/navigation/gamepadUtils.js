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

define(["require","exports","../3d/lib/gl-matrix"],function(t,a,n){function e(t){var a=t*t;return t<0&&(a*=-1),a}function i(t){return t.translation[0]=0,t.translation[1]=0,t.translation[2]=0,t.heading=0,t.tilt=0,t}function r(t,a,i){var r=i,s=t.state,o=t.device,l="forward-down"===a.tiltDirection?1:-1;return"standard"===o.deviceType?(r.translation[0]=e(s.axes[0]),r.translation[1]=e(s.axes[1]),r.translation[2]=e(s.buttons[7])-e(s.buttons[6]),r.heading=e(s.axes[2]),r.tilt=e(s.axes[3])):"spacemouse"===o.deviceType&&(r.translation[0]=1.2*e(s.axes[0]),r.translation[1]=1.2*e(s.axes[1]),r.translation[2]=2*-e(s.axes[2]),r.heading=1.2*e(s.axes[5]),r.tilt=1.2*e(s.axes[3])),r.tilt*=l,n.vec3d.scale(r.translation,1),r}function s(t){return 0===t.translation[0]&&0===t.translation[1]&&0===t.translation[2]&&0===t.heading&&0===t.tilt}Object.defineProperty(a,"__esModule",{value:!0}),a.quadraticAccentuation=e,a.resetTransformation=i,a.extractTransformation=r,a.isZeroTransformation=s});