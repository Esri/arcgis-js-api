/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../engine/webgl/enums","./BaseGraphicContainer"],(function(e,i,n){"use strict";let r=function(n){function r(){return n.apply(this,arguments)||this}e._inheritsLoose(r,n);var t=r.prototype;return t.renderChildren=function(e){this.attributeView.bindTextures(e.context,!1),this.children.some((e=>e.hasData))&&(n.prototype.renderChildren.call(this,e),e.drawPhase===i.WGLDrawPhase.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===i.WGLDrawPhase.HIGHLIGHT&&this._renderHighlight(e))},t._renderHighlight=function(e){const{painter:i}=e,n=i.effects.highlight;n.bind(e),this._renderChildren(e,n.defines),n.draw(e),n.unbind()},r}(n);return r}));
