/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../chunks/_rollupPluginBabelHelpers","../../../input/InputHandler"],(function(e,t,n){"use strict";const o=.6;let i=function(e){function n(t,n){var o;return(o=e.call(this,!0)||this)._view=t,o._canZoom=!0,o.registerIncoming("mouse-wheel",n,(e=>o._handleMouseWheel(e))),o}return t._inheritsLoose(n,e),n.prototype._handleMouseWheel=function(e){if(!this._view.navigation.mouseWheelZoomEnabled)return;if(e.preventDefault(),e.stopPropagation(),!this._canZoom)return;const t=this._view.mapViewNavigation,{x:n,y:i,deltaY:a}=e.data,r=1/o**(1/60*a),l=t.zoom(r,[n,i]);l&&(this._canZoom=!1,l.catch((()=>{})).then((()=>{this._canZoom=!0,t.end()})))},n}(n.InputHandler);e.MouseWheelZoom=i,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
