/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,n,t){"use strict";const o=.6;let i=function(e){function t(n,t){var o;return(o=e.call(this,!0)||this).view=n,o._canZoom=!0,o.registerIncoming("mouse-wheel",t,(e=>o._handleMouseWheel(e))),o}return n._inheritsLoose(t,e),t.prototype._handleMouseWheel=function(e){if(!this.view.navigation.mouseWheelZoomEnabled)return;if(e.preventDefault(),e.stopPropagation(),!this._canZoom)return;const n=this.view.mapViewNavigation,{x:t,y:i,deltaY:a}=e.data,s=1/o**(1/60*a),r=n.zoom(s,[t,i]);r&&(this._canZoom=!1,r.catch((()=>{})).then((()=>{this._canZoom=!0,n.end()})))},t}(t.InputHandler);e.MouseWheelZoom=i,Object.defineProperty(e,"__esModule",{value:!0})}));
