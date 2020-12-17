/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,n,t){"use strict";let i=function(e){function t(n,t){var i;return(i=e.call(this,!0)||this).key=n,i.registerIncoming("key-down",t,(e=>i._handleKeyDown(e))),i}return n._inheritsLoose(t,e),t.prototype._handleKeyDown=function(e){e.data.key===this.key&&(this.activate(),e.stopPropagation())},t}(t.InputHandler);e.SingleKey=i,Object.defineProperty(e,"__esModule",{value:!0})}));
