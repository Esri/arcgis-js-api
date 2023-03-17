/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],(function(e,t,n,r,i,o,s){"use strict";let a=function(e){function n(t,n,r,i,s=o.SnappingDomain.ALL){var a;return(a=e.call(this,i,s)||this).previousVertex=t,a.centerVertex=n,a.nextVertex=r,a}return t._inheritsLoose(n,e),n.prototype.equals=function(e){return e instanceof n&&(i.exactEquals(this.previousVertex,e.previousVertex)&&i.exactEquals(this.centerVertex,e.centerVertex)&&i.exactEquals(this.nextVertex,e.nextVertex))},n}(s.SnappingHint);e.RightAngleSnappingHint=a,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
