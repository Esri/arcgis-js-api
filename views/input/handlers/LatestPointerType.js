/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../chunks/_rollupPluginBabelHelpers","../InputHandler"],(function(e,t,n){"use strict";let o=function(e){function n(t){var n;return(n=e.call(this,!0)||this)._onChange=t,n._value="mouse",n.registerIncoming("pointer-down",(e=>{const t="touch"===e.data.native.pointerType;n._setValue(t?"touch":"mouse")})),n._moveHandler=n.registerIncoming("pointer-move",(e=>{const t="touch"===e.data.native.pointerType;n._setValue(t?"touch":"mouse")})),n._moveHandler.pause(),n}return t._inheritsLoose(n,e),n.prototype._setValue=function(e){e!==this._value&&("touch"===e?this._moveHandler.resume():this._moveHandler.pause(),this._value=e,this._onChange(e))},n}(n.InputHandler);e.LatestPointerType=o,Object.defineProperty(e,"__esModule",{value:!0})}));
