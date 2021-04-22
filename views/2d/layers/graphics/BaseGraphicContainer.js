/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../engine/FeatureContainer"],(function(e,t){"use strict";return function(t){function n(e){return t.call(this,e)||this}e._inheritsLoose(n,t);var i=n.prototype;return i.onTileData=function(e,t){e.patch(t),this.contains(e)||this.addChild(e),this.requestRender()},i.onTileError=function(e){e.clear(),this.contains(e)||this.addChild(e)},i._renderChildren=function(e,t){for(const n of this.children)n.isReady&&n.hasData&&(n.commit(e),e.context.setStencilFunction(514,n.stencilRef,255),n._displayList.replay(e,n,t))},e._createClass(n,[{key:"hasLabels",get:function(){return!1}},{key:"labelsVisible",get:function(){return!1}}]),n}(t.FeatureContainer)}));
