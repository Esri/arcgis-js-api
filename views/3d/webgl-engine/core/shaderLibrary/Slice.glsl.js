/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{unwrap as e,isNone as s,isSome as i}from"../../../../../core/maybe.js";import{j as a}from"../../../../../chunks/mat4.js";import{c as o}from"../../../../../chunks/mat4f64.js";import{s as c,b as r,m as l,a as t}from"../../../../../chunks/vec3.js";import{Z as n,c as f}from"../../../../../chunks/vec3f64.js";import{Float3DrawUniform as d}from"../shaderModules/Float3DrawUniform.js";import{Float3PassUniform as _}from"../shaderModules/Float3PassUniform.js";import{NoParameters as P,glsl as h}from"../shaderModules/interfaces.js";class m extends P{constructor(e){super(),this.slicePlaneLocalOrigin=e}}function p(s,i){H(s,i,[new _("slicePlaneOrigin",((e,s)=>v(i,e,s))),new _("slicePlaneBasis1",((s,a)=>B(i,s,a,e(a.slicePlane)?.basis1))),new _("slicePlaneBasis2",((s,a)=>B(i,s,a,e(a.slicePlane)?.basis2)))])}function u(s,i){H(s,i,[new d("slicePlaneOrigin",((e,s)=>v(i,e,s))),new d("slicePlaneBasis1",((s,a)=>B(i,s,a,e(a.slicePlane)?.basis1))),new d("slicePlaneBasis2",((s,a)=>B(i,s,a,e(a.slicePlane)?.basis2)))])}function H(e,s,i){if(!s.hasSlicePlane){const i=h`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return s.hasSliceInVertexProgram&&e.vertex.code.add(i),void e.fragment.code.add(i)}e.extensions.add("GL_OES_standard_derivatives"),s.hasSliceInVertexProgram&&e.vertex.uniforms.add(i),e.fragment.uniforms.add(i);const a=h`struct SliceFactors {
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
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,o=h`vec4 applySliceHighlight(vec4 color, vec3 pos) {
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
}`,c=s.hasSliceHighlight?h`
        ${o}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:h`#define highlightSlice(_color_, _pos_) (_color_)`;s.hasSliceInVertexProgram&&e.vertex.code.add(a),e.fragment.code.add(a),e.fragment.code.add(c)}function g(e,s,i){return e.instancedDoublePrecision?c(S,i.camera.viewInverseTransposeMatrix[3],i.camera.viewInverseTransposeMatrix[7],i.camera.viewInverseTransposeMatrix[11]):s.slicePlaneLocalOrigin}function I(e,s){return i(e)?r(L,s.origin,e):s.origin}function b(e,s,o){return e.hasSliceTranslatedView?i(s)?a(T,o.camera.viewMatrix,s):o.camera.viewMatrix:null}function v(e,a,o){if(s(o.slicePlane))return n;const c=g(e,a,o),r=I(c,o.slicePlane),t=b(e,c,o);return i(t)?l(L,r,t):r}function B(e,a,o,c){if(s(c)||s(o.slicePlane))return n;const f=g(e,a,o),d=I(f,o.slicePlane),_=b(e,f,o);return i(_)?(t(G,c,d),l(L,d,_),l(G,G,_),r(G,G,L)):c}const S=f(),L=f(),G=f(),T=o();export{u as SliceDraw,p as SlicePass,m as SlicePlaneParameters};
