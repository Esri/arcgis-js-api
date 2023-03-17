/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../../core/has","../../../../core/Logger","../../../../chunks/vec3","../SnappingDomain","./SnappingHint"],(function(e,t,n,i,a,r,s){"use strict";let l=function(e){function n(t,n,i,a,s=r.SnappingDomain.ALL,l=!0,o=!0){var p;return(p=e.call(this,a,s)||this).type=t,p.lineStart=n,p.lineEnd=i,p.fadeLeft=l,p.fadeRight=o,p}return t._inheritsLoose(n,e),n.prototype.equals=function(e){return e instanceof n&&(this.type===e.type&&a.exactEquals(this.lineStart,e.lineStart)&&a.exactEquals(this.lineEnd,e.lineEnd)&&this.fadeLeft===e.fadeLeft&&this.fadeRight===e.fadeRight)},t._createClass(n,[{key:"length",get:function(){return a.distance(this.lineStart,this.lineEnd)}}]),n}(s.SnappingHint);e.LineSnappingHint=l,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
