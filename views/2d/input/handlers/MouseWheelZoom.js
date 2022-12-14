/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,o,t){"use strict";const n=.6;let i=function(e){function t(o,t){var n;return(n=e.call(this,!0)||this)._view=o,n._canZoom=!0,n.registerIncoming("mouse-wheel",t,(e=>n._handleMouseWheel(e))),n}return o._inheritsLoose(t,e),t.prototype._handleMouseWheel=function(e){if(!this._view.navigation.mouseWheelZoomEnabled)return;if(e.preventDefault(),e.stopPropagation(),!this._canZoom)return;const o=this._view.mapViewNavigation,{x:t,y:i,deltaY:a}=e.data,l=1/n**(1/60*a),s=o.zoom(l,[t,i]);s&&(this._canZoom=!1,s.catch((()=>{})).then((()=>{this._canZoom=!0,o.end()})))},t}(t.InputHandler);e.MouseWheelZoom=i,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
