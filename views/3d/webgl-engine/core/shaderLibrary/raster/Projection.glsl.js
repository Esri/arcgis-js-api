/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import{Float2PassUniform as r}from"../../shaderModules/Float2PassUniform.js";import{glsl as o}from"../../shaderModules/interfaces.js";import{Texture2DPassUniform as e}from"../../shaderModules/Texture2DPassUniform.js";function t(t){t.fragment.uniforms.add(new e("u_transformGrid",(r=>r.u_transformGrid))),t.fragment.uniforms.add(new r("u_transformSpacing",(r=>r.common.u_transformSpacing))),t.fragment.uniforms.add(new r("u_transformGridSize",(r=>r.common.u_transformGridSize))),t.fragment.uniforms.add(new r("u_targetImageSize",(r=>r.common.u_targetImageSize))),t.fragment.code.add(o`vec2 projectPixelLocation(vec2 coords) {
vec2 index_image = floor(coords * u_targetImageSize);
vec2 oneTransformPixel = vec2(0.25 / u_transformGridSize.s, 1.0 / u_transformGridSize.t);
vec2 index_transform = floor(index_image / u_transformSpacing) / u_transformGridSize;
vec2 pos = fract((index_image + vec2(0.5, 0.5)) / u_transformSpacing);
vec2 srcLocation;
vec2 transform_location = index_transform + oneTransformPixel * 0.5;
if (pos.s <= pos.t) {
vec4 ll_abc = texture2D(u_transformGrid, vec2(transform_location.s, transform_location.t));
vec4 ll_def = texture2D(u_transformGrid, vec2(transform_location.s + oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ll_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ll_def.rgb, vec3(pos, 1.0));
} else {
vec4 ur_abc = texture2D(u_transformGrid, vec2(transform_location.s + 2.0 * oneTransformPixel.s, transform_location.t));
vec4 ur_def = texture2D(u_transformGrid, vec2(transform_location.s + 3.0 * oneTransformPixel.s, transform_location.t));
srcLocation.s = dot(ur_abc.rgb, vec3(pos, 1.0));
srcLocation.t = dot(ur_def.rgb, vec3(pos, 1.0));
}
return srcLocation;;
}`)}export{t as Projection};
