/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../chunks/_rollupPluginBabelHelpers","../../../../../core/maybe","../../../../../chunks/mat4","../../../../../chunks/mat4f64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../shaderModules/Float3DrawUniform","../shaderModules/Float3PassUniform","../shaderModules/interfaces"],(function(e,s,a,i,l,o,r,c,t,n){"use strict";let f=function(e){function a(s){var a;return(a=e.call(this)||this).slicePlaneLocalOrigin=s,a}return s._inheritsLoose(a,e),a}(n.NoParameters);function d(e,s){P(e,s,[new t.Float3PassUniform("slicePlaneOrigin",((e,a)=>m(s,e,a))),new t.Float3PassUniform("slicePlaneBasis1",((e,i)=>p(s,e,i,a.unwrap(i.slicePlane)?.basis1))),new t.Float3PassUniform("slicePlaneBasis2",((e,i)=>p(s,e,i,a.unwrap(i.slicePlane)?.basis2)))])}function u(e,s){P(e,s,[new c.Float3DrawUniform("slicePlaneOrigin",((e,a)=>m(s,e,a))),new c.Float3DrawUniform("slicePlaneBasis1",((e,i)=>p(s,e,i,a.unwrap(i.slicePlane)?.basis1))),new c.Float3DrawUniform("slicePlaneBasis2",((e,i)=>p(s,e,i,a.unwrap(i.slicePlane)?.basis2)))])}function P(e,s,a){if(!s.hasSlicePlane){const a=n.glsl`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(a),void e.fragment.code.add(a)}e.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&e.vertex.uniforms.add(a),e.fragment.uniforms.add(a);const i=n.glsl`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,l=n.glsl`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,o=s.hasSliceHighlight?n.glsl`
        ${l}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:n.glsl`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(i),e.fragment.code.add(i),e.fragment.code.add(o)}function _(e,s,a){return e.instancedDoublePrecision?o.set(H,a.camera.viewInverseTransposeMatrix[3],a.camera.viewInverseTransposeMatrix[7],a.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function h(e,s){return a.isSome(e)?o.subtract(S,s.origin,e):s.origin}function g(e,s,l){return e.hasSliceTranslatedView?a.isSome(s)?i.translate(I,l.camera.viewMatrix,s):l.camera.viewMatrix:null}function m(e,s,i){if(a.isNone(i.slicePlane))return r.ZEROS;const l=_(e,s,i),c=h(l,i.slicePlane),t=g(e,l,i);return a.isSome(t)?o.transformMat4(S,c,t):c}function p(e,s,i,l){if(a.isNone(l)||a.isNone(i.slicePlane))return r.ZEROS;const c=_(e,s,i),t=h(c,i.slicePlane),n=g(e,c,i);return a.isSome(n)?(o.add(b,l,t),o.transformMat4(S,t,n),o.transformMat4(b,b,n),o.subtract(b,b,S)):l}const H=r.create(),S=r.create(),b=r.create(),I=l.create();e.SliceDraw=u,e.SlicePass=d,e.SlicePlaneParameters=f,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
