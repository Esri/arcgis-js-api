/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.23/esri/copyright.txt for details.
*/
define(["./object"],(function(t){"use strict";function e(e,n){return e.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,i){if(""===i)return"$";const r=t.getDeepValue(i,n),s=null==r?"":r;if(void 0===s)throw new Error(`could not find key "${i}" in template`);return s.toString()}))}return function(){function t(n,i,r){this.name=n,this.details=r,this.message=void 0,this instanceof t&&(this.message=i&&e(i,r)||"")}return t.prototype.toString=function(){return"["+this.name+"]: "+this.message},t}()}));
