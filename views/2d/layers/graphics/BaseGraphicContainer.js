/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.20/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../engine/FeatureContainer"],(function(t,e){"use strict";return function(e){function n(t){return e.call(this,t)||this}t._inheritsLoose(n,e);var i=n.prototype;return i.onTileData=function(t,e){t.patch(e),this.contains(t)||this.addChild(t),this.requestRender()},i.onTileError=function(t){t.clear(),this.contains(t)||this.addChild(t)},i._renderChildren=function(t,e){for(const n of this.children)n.isReady&&n.hasData&&(n.commit(t),t.context.setStencilFunction(514,n.stencilRef,255),n._displayList.replay(t,n,e))},t._createClass(n,[{key:"hasLabels",get:function(){return!1}}]),n}(e.FeatureContainer)}));
