/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["./object"],(function(t){"use strict";return function(){function e(n,i,r){var s;(this.name=n,this.details=r,this.message=void 0,this instanceof e)&&(this.message=i&&(s=r,i.replace(/\$\{([^\s\:\}]*)(?:\:([^\s\:\}]+))?\}/g,(function(e,n){if(""===n)return"$";const i=t.getDeepValue(n,s),r=null==i?"":i;if(void 0===r)throw new Error(`could not find key "${n}" in template`);return r.toString()})))||"")}return e.prototype.toString=function(){return"["+this.name+"]: "+this.message},e}()}));
