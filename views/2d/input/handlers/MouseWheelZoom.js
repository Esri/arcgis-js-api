/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,t,n){"use strict";let o=function(e){function n(t,n){var o;return(o=e.call(this,!0)||this).view=t,o._canZoom=!0,o.registerIncoming("mouse-wheel",n,(e=>o._handleMouseWheel(e))),o}return t._inheritsLoose(n,e),n.prototype._handleMouseWheel=function(e){if(!this.view.navigation.mouseWheelZoomEnabled)return;if(e.preventDefault(),e.stopPropagation(),!this._canZoom)return;const t=this.view.mapViewNavigation,{x:n,y:o,deltaY:i}=e.data,a=1/Math.pow(.6,1/60*i),r=t.zoom(a,[n,o]);r&&(this._canZoom=!1,r.catch((()=>{})).then((()=>{this._canZoom=!0,t.end()})))},n}(n.InputHandler);e.MouseWheelZoom=o,Object.defineProperty(e,"__esModule",{value:!0})}));
