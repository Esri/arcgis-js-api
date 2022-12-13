/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../SnappingDomain","../snappingUtils","./SnappingHint"],(function(n,i,t,e,o){"use strict";let r=function(n){function o(i,e,o=t.SnappingDomain.ALL){var r;return(r=n.call(this,e,o)||this).intersectionPoint=i,r}return i._inheritsLoose(o,n),o.prototype.equals=function(n){return n instanceof o&&e.objectEqual(this.intersectionPoint,n.intersectionPoint)},o}(o.SnappingHint);n.IntersectionSnappingHint=r,Object.defineProperties(n,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
