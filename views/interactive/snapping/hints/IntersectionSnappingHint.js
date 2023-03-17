/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],(function(n,t,i,e,o){"use strict";let r=function(n){function o(t,i,o=e.SnappingDomain.ALL){var r;return(r=n.call(this,i,o)||this).intersectionPoint=t,r}return t._inheritsLoose(o,n),o.prototype.equals=function(n){return n instanceof o&&i.exactEquals(this.intersectionPoint,n.intersectionPoint)},o}(o.SnappingHint);n.IntersectionSnappingHint=r,Object.defineProperty(n,Symbol.toStringTag,{value:"Module"})}));
