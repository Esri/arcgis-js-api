/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../InputHandler"],(function(t,e,n){"use strict";let i=function(t){function n(e){var n;return(n=t.call(this,!0)||this)._onChange=e,n._value="mouse",n._x=null,n._y=null,n.registerIncoming("pointer-move",(t=>{n._update(t.data)})),n}return e._inheritsLoose(n,t),n.prototype._update=function(t){const e="touch"===t.native.pointerType?"touch":"mouse",{x:n,y:i}=t;e===this._value&&this._x===n&&this._y===i||(this._value=e,this._x=n,this._y=i,this._onChange(e,n,i))},n}(n.InputHandler);t.LatestPointer=i,Object.defineProperty(t,Symbol.toStringTag,{value:"Module"})}));
