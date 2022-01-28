/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.22/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../snappingUtils","./SnappingHint"],(function(n,e,t,i,l,r){"use strict";i.getLogger("esri.views.interactive.snapping.hints.ParallelSnappingHint");let a=function(n){function t(e,t){var i;return(i=n.call(this)||this).lineStart=e,i.lineEnd=t,i}return e._inheritsLoose(t,n),t.prototype.equals=function(n){return n instanceof t&&(l.objectEqual(this.lineStart,n.lineStart)&&l.objectEqual(this.lineEnd,n.lineEnd))},t}(r.SnappingHint);n.ParallelSnappingHint=a,Object.defineProperty(n,"__esModule",{value:!0})}));
