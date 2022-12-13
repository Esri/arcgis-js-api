/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../SnappingDomain","../snappingUtils","./SnappingHint"],(function(e,t,n,i,a,l,o){"use strict";let r=function(e){function n(t,n,i,l,o=a.SnappingDomain.ALL,r=!0,p=!0){var s;return(s=e.call(this,l,o)||this).type=t,s.lineStart=n,s.lineEnd=i,s.fadeLeft=r,s.fadeRight=p,s}return t._inheritsLoose(n,e),n.prototype.equals=function(e){return e instanceof n&&(this.type===e.type&&l.objectEqual(this.lineStart,e.lineStart)&&l.objectEqual(this.lineEnd,e.lineEnd)&&this.fadeLeft===e.fadeLeft&&this.fadeRight===e.fadeRight)},n}(o.SnappingHint);e.LineSnappingHint=r,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
