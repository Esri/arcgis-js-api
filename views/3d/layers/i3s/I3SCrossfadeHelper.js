// COPYRIGHT © 2020 Esri
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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","../../../../core/maybe","../../../../core/scheduling"],(function(e,t,i,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.I3SCrossfadeHelper=void 0;var r=function(){function e(e){this.view=e,this.preRenderFrameTaskHandle=null,this.currentFrameStartTime=null,this._numFadingNodes=0}return Object.defineProperty(e.prototype,"numFadingNodes",{get:function(){return this._numFadingNodes},enumerable:!1,configurable:!0}),e.sign=function(e){return 0===e?1:-1},e.prototype.preRenderCallback=function(){var e=this.currentFrameStartTime,t=Date.now();this.currentFrameStartTime=t,null!==e&&this.updateAllNodeFading(e)},e.prototype.stopNodeFadingInternal=function(e){null!=e.lodCrossfadeTargetTime&&this._numFadingNodes--,e.lodCrossfadeTargetTime=null,0===this.numFadingNodes&&(null!=this.preRenderFrameTaskHandle&&(this.preRenderFrameTaskHandle.remove(),this.preRenderFrameTaskHandle=null),this.view.notifyUpdate())},e.prototype.startNodeFadingInternal=function(e,t,i){var r=this;0===this.numFadingNodes&&(this.preRenderFrameTaskHandle=a.addFrameTask({preRender:function(){r.preRenderCallback()}}),this.view.notifyUpdate()),null==e.lodCrossfadeTargetTime&&this._numFadingNodes++,e.lodCrossfadeDirection=i,e.lodCrossfadeTargetTime=t},e.prototype.updateAllNodeFading=function(t){var a=this;if(this.view){var r=this.currentFrameStartTime,n=this.view.lodCrossfadeDuration,o=void 0!==t&&n>0;this.view.foreachCrossfadeNode((function(n,d){if(i.isSome(d)&&null!=d.lodCrossfadeTargetTime){var s=d.lodCrossfadeTargetTime,l=d.lodCrossfadeDirection,u=0===l?a.view.fullOpacity:0;if(!o||r>=s)a.stopNodeFadingInternal(d),1===l&&a.view.markNodeToRemove(n);else{var f=a.view.getNodeOpacityByIndex(n),p=(r-t)/a.view.lodCrossfadeDuration;u=f+e.sign(l)*p}a.view.setNodeOpacityByIndex(n,u)}})),this.view.removeMarkedNodes()}},e.prototype.stopAllNodeFading=function(){this.updateAllNodeFading(void 0)},e.prototype.fadeoutNodes=function(e){for(var t=0;t<e.length;++t){var i=e.data[t],a=this.view.getNodeCrossfadeMetaData(i);this.fadeNode(i,a,1)}},e.prototype.fadeNode=function(e,t,a){i.isSome(t)&&this.fadeNodeInternal(e,t,a)},e.prototype.fadeNodeInternal=function(e,t,i){var a=this.view.isFadingEnabled(),r=0===i?this.view.fullOpacity:0;if(a){var n=this.view.getNodeOpacityByIndex(e),o=this.currentFrameStartTime+this.view.lodCrossfadeDuration*Math.abs(r-n);this.startNodeFadingInternal(t,o,i)}else this.stopNodeFadingInternal(t),this.view.setNodeOpacityByIndex(e,r)},e}();t.I3SCrossfadeHelper=r}));