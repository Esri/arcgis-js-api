/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../SnappingDomain","../snappingUtils","./SnappingHint"],(function(e,t,n,i,r,o,s){"use strict";let u=function(e){function n(t,n,i,o,s=r.SnappingDomain.ALL){var u;return(u=e.call(this,o,s)||this).previousVertex=t,u.centerVertex=n,u.nextVertex=i,u}return t._inheritsLoose(n,e),n.prototype.equals=function(e){return e instanceof n&&(o.objectEqual(this.previousVertex,e.previousVertex)&&o.objectEqual(this.centerVertex,e.centerVertex)&&o.objectEqual(this.nextVertex,e.nextVertex))},n}(s.SnappingHint);e.RightAngleSnappingHint=u,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
