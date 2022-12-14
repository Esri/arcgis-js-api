/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../SnappingDomain","../snappingUtils","./SnappingHint"],(function(n,e,i,t,l,a,o){"use strict";let r=function(n){function i(e,i,t,a=l.SnappingDomain.ALL){var o;return(o=n.call(this,t,a)||this).lineStart=e,o.lineEnd=i,o}return e._inheritsLoose(i,n),i.prototype.equals=function(n){return n instanceof i&&(a.objectEqual(this.lineStart,n.lineStart)&&a.objectEqual(this.lineEnd,n.lineEnd))},i}(o.SnappingHint);n.ParallelSnappingHint=r,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
