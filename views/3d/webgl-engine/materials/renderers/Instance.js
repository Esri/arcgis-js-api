/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers"],(function(t,n){"use strict";let r=function(t){this.first=t.from,this.count=t.to-t.from},e=function(t=0,n=0){this.from=t,this.to=n},o=function(t){function r(n,r,e,o,s,i){var f;return(f=t.call(this,r,e)||this).id=n,f.isVisible=o,f.hasHighlights=s,f.hasOccludees=i,f}return n._inheritsLoose(r,t),r}(e);function s(t){return Array.from(t.values()).sort(i)}function i(t,n){return t.from===n.from?t.to-n.to:t.from-n.from}function f(t,n){if(0===t.length)return void t.push(new r(n));const e=t[t.length-1];if(u(e,n)){const t=n.from-e.first+n.to-n.from;e.count=t}else t.push(new r(n))}function u(t,n){return t.first+t.count>=n.from}t.BufferRange=e,t.DrawCommand=r,t.Instance=o,t.addOrMerge=f,t.sortInstancesByRange=s,Object.defineProperty(t,"__esModule",{value:!0})}));
