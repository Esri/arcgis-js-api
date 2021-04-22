/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../chunks/vec3"],(function(t,n){"use strict";function a(t){let n=t*t;return t<0&&(n*=-1),n}function e(t){return t.translation[0]=0,t.translation[1]=0,t.translation[2]=0,t.heading=0,t.tilt=0,t}function i(t,e,i){const o=i,r=t.state,s=t.device,l="forward-down"===e.tiltDirection?1:-1,c=1;return"standard"===s.deviceType?(o.translation[0]=a(r.axes[0]),o.translation[1]=a(r.axes[1]),o.translation[2]=a(r.buttons[7])-a(r.buttons[6]),o.heading=a(r.axes[2]),o.tilt=a(r.axes[3])):"spacemouse"===s.deviceType&&(o.translation[0]=1.2*a(r.axes[0]),o.translation[1]=1.2*a(r.axes[1]),o.translation[2]=2*-a(r.axes[2]),o.heading=1.2*a(r.axes[5]),o.tilt=1.2*a(r.axes[3])),o.tilt*=l,n.scale(o.translation,o.translation,c),o}function o(t,n){const a=n;return a.translation[0]=t[1]-t[0],a.translation[1]=t[3]-t[2],a.translation[2]=t[4]-t[5],a.heading=t[7]-t[6],a.tilt=t[8]-t[9],a.zoom=t[10]-t[11],a}function r(t){return 0===t.translation[0]&&0===t.translation[1]&&0===t.translation[2]&&0===t.heading&&0===t.tilt&&0===t.zoom}t.extractTransformation=i,t.extractTransformationKeyboard=o,t.isZeroTransformation=r,t.quadraticAccentuation=a,t.resetTransformation=e,Object.defineProperty(t,"__esModule",{value:!0})}));
