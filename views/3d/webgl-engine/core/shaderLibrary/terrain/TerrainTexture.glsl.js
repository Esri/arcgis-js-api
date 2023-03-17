/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../chunks/_rollupPluginBabelHelpers","../../../../terrain/interfaces","./BackgroundGrid.glsl","./Overlay.glsl","./TileBlendInput","../../shaderModules/FloatPassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/Uniform"],(function(e,t,r,o,n,i,l,a,s,c){"use strict";let u=function(e){function r(){var t;return(t=e.apply(this,arguments)||this).overlayOpacity=1,t}return t._inheritsLoose(r,e),r}(a.NoParameters);function d(e,t){e.vertex.uniforms.add([new g("overlayTexOffset"),new g("overlayTexScale")]),e.fragment.uniforms.add([new l.FloatPassUniform("overlayOpacity",(e=>e.overlayOpacity)),new s.Texture2DPassUniform("ovColorTex",((e,t)=>0===t.overlays.length?null:t.overlays[r.OverlayIndex.INNER].getColorTexture(e.overlaySource)))]),n.overlay(e,t)}function f(e,t){const{vertex:r,fragment:n,varyings:l}=e;l.add("vtc","vec2"),r.uniforms.add(new g("texOffsetAndScale")),n.uniforms.add(new m("tex")),n.uniforms.add(new x("textureOpacities"));const s=t.textureFadingEnabled&&!t.renderOccluded;s&&(r.uniforms.add(new g("nextTexOffsetAndScale")),l.add("nvtc","vec2"),n.uniforms.add(new m("texNext")),n.uniforms.add(new x("nextTexOpacities")),n.uniforms.add(new v("fadeFactor")));const c=t.tileBlendInput===i.TileBlendInput.ColorComposite,u=t.tileBlendInput===i.TileBlendInput.GridComposite;u&&n.include(o.BackgroundGrid),c&&n.uniforms.add(new x("backgroundColor")),r.code.add(a.glsl`
  void forwardTextureCoordinatesWithTransform(in vec2 uv) {
    vtc = uv * texOffsetAndScale.zw + texOffsetAndScale.xy;
    ${s?a.glsl`nvtc = uv * nextTexOffsetAndScale.zw + nextTexOffsetAndScale.xy;`:a.glsl``}
  }`),n.code.add(a.glsl`
    vec4 getColor(vec4 color, vec2 uv, vec3 opacities) {
      ${u||c?a.glsl`
              if (opacities.y <= 0.0) {
                return color * opacities.z * opacities.x;
              }
              vec4 bg = vec4(${c?a.glsl`backgroundColor`:a.glsl`gridColor(uv)`} * opacities.y, opacities.y);
              vec4 layer = color * opacities.z;
              return (bg * (1.0 - layer.a) + layer) * opacities.x;`:a.glsl`return color;`}
    }`),s?n.code.add(a.glsl`vec4 getTileColor() {
vec4 color = getColor(texture2D(tex, vtc), vtc, textureOpacities);
if (fadeFactor >= 1.0) {
return color;
}
vec4 nextColor = getColor(texture2D(texNext, nvtc), nvtc, nextTexOpacities);
return mix(nextColor, color, fadeFactor);
}`):n.code.add(a.glsl`vec4 getTileColor() {
return getColor(texture2D(tex, vtc), vtc, textureOpacities);
}`)}let v=function(e){function r(t){return e.call(this,t,"float")||this}return t._inheritsLoose(r,e),r}(c.Uniform),x=function(e){function r(t){return e.call(this,t,"vec3")||this}return t._inheritsLoose(r,e),r}(c.Uniform),g=function(e){function r(t){return e.call(this,t,"vec4")||this}return t._inheritsLoose(r,e),r}(c.Uniform),m=function(e){function r(t){return e.call(this,t,"sampler2D")||this}return t._inheritsLoose(r,e),r}(c.Uniform);e.Float3Uniform=x,e.OverlayTerrain=d,e.OverlayTerrainPassParameters=u,e.TerrainTexture=f,e.Texture2DUniform=m,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
