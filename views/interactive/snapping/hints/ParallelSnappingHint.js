/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],(function(n,e,t,i,a,l,r){"use strict";let o=function(n){function t(e,t,i,a=l.SnappingDomain.ALL){var r;return(r=n.call(this,i,a)||this).lineStart=e,r.lineEnd=t,r}return e._inheritsLoose(t,n),t.prototype.equals=function(n){return n instanceof t&&(a.exactEquals(this.lineStart,n.lineStart)&&a.exactEquals(this.lineEnd,n.lineEnd))},t}(r.SnappingHint);n.ParallelSnappingHint=o,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
