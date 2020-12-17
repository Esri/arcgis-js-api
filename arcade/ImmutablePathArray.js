/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["../chunks/_rollupPluginBabelHelpers","./ImmutableArray","./ImmutablePointArray"],(function(t,e,i){"use strict";return function(e){function n(t,i,n,s,h){var a;return(a=e.call(this,t)||this)._lazyPath=[],a._hasZ=!1,a._hasM=!1,a._hasZ=n,a._hasM=s,a._spRef=i,a._cacheId=h,a}t._inheritsLoose(n,e);var s=n.prototype;return s.get=function(t){if(void 0===this._lazyPath[t]){const e=this._elements[t];if(void 0===e)return;this._lazyPath[t]=new i(e,this._spRef,this._hasZ,this._hasM,this._cacheId,t)}return this._lazyPath[t]},s.equalityTest=function(t){return t===this||null!==t&&(t instanceof n!=!1&&t.getUniqueHash()===this.getUniqueHash())},s.getUniqueHash=function(){return this._cacheId.toString()},n}(e)}));
