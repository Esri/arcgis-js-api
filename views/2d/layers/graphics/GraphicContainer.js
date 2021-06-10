/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../engine/webgl/enums","./BaseGraphicContainer"],(function(e,n,r){"use strict";return function(r){function i(){return r.apply(this,arguments)||this}e._inheritsLoose(i,r);var t=i.prototype;return t.renderChildren=function(e){this.attributeView.bindTextures(e.context),this.children.some((e=>e.hasData))&&(r.prototype.renderChildren.call(this,e),e.drawPhase===n.WGLDrawPhase.MAP&&this._renderChildren(e),e.drawPhase===n.WGLDrawPhase.HIGHLIGHT&&this._renderHighlight(e))},t._renderHighlight=function(e){const{painter:n}=e,r=n.effects.highlight;r.bind(e),this._renderChildren(e,r.defines),r.draw(e),r.unbind()},i}(r)}));
