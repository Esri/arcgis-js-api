/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler","../../../input/handlers/support"],(function(e,t,i,n){"use strict";let o=function(e){function i(t,i){var n;return(n=e.call(this,!0)||this).view=t,n.registerIncoming("double-click",i,(e=>n._handleDoubleClick(e,i))),n}return t._inheritsLoose(i,e),i.prototype._handleDoubleClick=function(e,t){n.eventMatchesPointerAction(e.data,"primary")&&(e.stopPropagation(),t?this.view.mapViewNavigation.zoomOut([e.data.x,e.data.y]):this.view.mapViewNavigation.zoomIn([e.data.x,e.data.y]))},i}(i.InputHandler);e.DoubleClickZoom=o,Object.defineProperty(e,"__esModule",{value:!0})}));
