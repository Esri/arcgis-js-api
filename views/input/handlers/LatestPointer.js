/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../InputHandler"],(function(e,t,n){"use strict";let i=function(e){function n(t){var n;return(n=e.call(this,!0)||this)._onChange=t,n._value="mouse",n._x=null,n._y=null,n.registerIncoming("pointer-move",(e=>{n._update(e.data)})),n}return t._inheritsLoose(n,e),n.prototype._update=function(e){const t="touch"===e.native.pointerType?"touch":"mouse",{x:n,y:i}=e;t===this._value&&this._x===n&&this._y===i||(this._value=t,this._x=n,this._y=i,this._onChange(t,n,i))},n}(n.InputHandler);e.LatestPointer=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
