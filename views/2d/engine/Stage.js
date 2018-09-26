// COPYRIGHT © 2018 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.9/esri/copyright.txt for details.

define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/Error","../../../core/promiseUtils","../../../core/scheduling","./DOMContainer","../../support/screenshotUtils"],function(e,t,r,n,a,s,i,o){function d(e,t){for(var r=0,n=t;r<n.length;r++){var a=n[r];"takeScreenshot"in a?e.push(a):"children"in a&&d(e,a.children)}return e}return function(e){function t(t){var r=e.call(this)||this;return r.element=t,r._renderParameters={state:r.state,pixelRatio:window.devicePixelRatio,stationary:!1},r._renderRequested=!1,r._taskHandle=s.addFrameTask({render:function(){return r.renderFrame()}}),r._stationary=!0,r.attached=!0,r._taskHandle.pause(),r}return r(t,e),t.prototype.destroy=function(){this.removeAllChildren(),this.renderFrame(),this._taskHandle.remove(),this._taskHandle=null},Object.defineProperty(t.prototype,"state",{get:function(){return this._state},set:function(e){this._state=e,this.requestRender()},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"stationary",{get:function(){return this._stationary},set:function(e){this._stationary!==e&&(this._stationary=e,this.requestRender())},enumerable:!0,configurable:!0}),t.prototype.start=function(){this._taskHandle.resume()},t.prototype.stop=function(){this._taskHandle.pause()},t.prototype.requestRender=function(){this._renderRequested=!0,this._taskHandle&&this._taskHandle.resume()},t.prototype.takeScreenshot=function(e){var t=d([],this.children);if(!t)return a.reject(new n("mapview:take-screenshot-unavailable"));var r=e.region,s=r.width,i=r.height;return a.eachAlways(t.map(function(t){return t.takeScreenshot(e)})).then(function(t){var r=document.createElement("canvas"),n=r.getContext("2d"),a=document.createElement("canvas"),d=a.getContext("2d");return r.width=s,r.height=i,a.width=s,a.height=i,t.forEach(function(e){var t=e.value;t&&(d.putImageData(t.data,0,0),n.drawImage(a,0,0))}),{dataUrl:o.toDataUrl(r,e),data:n.getImageData(0,0,s,i)}})},t.prototype.renderFrame=function(){this._renderRequested&&(this._renderRequested=!1,this._renderParameters.state=this._state,this._renderParameters.stationary=this.stationary,this._renderParameters.pixelRatio=window.devicePixelRatio,this.processRender(this._renderParameters)),this._renderRequested||this._taskHandle.pause()},t}(i)});