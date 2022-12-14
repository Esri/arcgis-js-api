/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["../../../../chunks/_rollupPluginBabelHelpers","../../engine/webgl/enums","./BaseGraphicContainer"],(function(e,i,t){"use strict";let n=function(t){function n(){return t.apply(this,arguments)||this}e._inheritsLoose(n,t);var r=n.prototype;return r.renderChildren=function(e){this.attributeView.update(),this.children.some((e=>e.hasData))&&(this.attributeView.bindTextures(e.context,!1),t.prototype.renderChildren.call(this,e),e.drawPhase===i.WGLDrawPhase.MAP&&this._renderChildren(e),this.hasHighlight()&&e.drawPhase===i.WGLDrawPhase.HIGHLIGHT&&this._renderHighlight(e),this._boundsRenderer&&this._boundsRenderer.doRender(e))},r._renderHighlight=function(e){const{painter:i}=e,t=i.effects.highlight;t.bind(e),this._renderChildren(e,t.defines),t.draw(e),t.unbind()},n}(t);return n}));
