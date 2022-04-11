/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../snappingUtils","./SnappingHint"],(function(e,t,n,i,r,o){"use strict";i.getLogger("esri.views.interactive.snapping.hints.RightAngleSnappingHint");let s=function(e){function n(t,n,i){var r;return(r=e.call(this)||this).previousVertex=t,r.centerVertex=n,r.nextVertex=i,r}return t._inheritsLoose(n,e),n.prototype.equals=function(e){return e instanceof n&&(r.objectEqual(this.previousVertex,e.previousVertex)&&r.objectEqual(this.centerVertex,e.centerVertex)&&r.objectEqual(this.nextVertex,e.nextVertex))},n}(o.SnappingHint);e.RightAngleSnappingHint=s,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
