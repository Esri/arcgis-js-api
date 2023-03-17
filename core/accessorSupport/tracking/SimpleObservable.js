/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../ObservableBase"],(function(e,t,n){"use strict";let o=function(e){function n(){return e.apply(this,arguments)||this}return t._inheritsLoose(n,e),n.prototype.notify=function(){const e=this._observers;if(e&&e.length>0){const t=e.slice();for(const e of t)e.onInvalidated(),e.onCommitted()}},n}(n.ObservableBase);e.SimpleObservable=o,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
