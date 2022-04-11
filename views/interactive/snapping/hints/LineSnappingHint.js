/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../snappingUtils","./SnappingHint"],(function(e,t,n,i,a,r){"use strict";i.getLogger("esri.views.interactive.snapping.hints.LineSnappingHint");let s=function(e){function n(t,n,i,a=!0,r=!0){var s;return(s=e.call(this)||this).type=t,s.lineStart=n,s.lineEnd=i,s.fadeLeft=a,s.fadeRight=r,s}return t._inheritsLoose(n,e),n.prototype.equals=function(e){return e instanceof n&&(this.type===e.type&&a.objectEqual(this.lineStart,e.lineStart)&&a.objectEqual(this.lineEnd,e.lineEnd)&&this.fadeLeft===e.fadeLeft&&this.fadeRight===e.fadeRight)},n}(r.SnappingHint);e.LineSnappingHint=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
