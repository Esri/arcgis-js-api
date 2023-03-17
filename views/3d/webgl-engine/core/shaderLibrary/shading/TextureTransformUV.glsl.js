/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/maybe","../../../../../../chunks/mat3f32","../../shaderModules/interfaces","../../shaderModules/Matrix3PassUniform"],(function(r,e,o,a,s){"use strict";function i(r){r.vertex.uniforms.add(new s.Matrix3PassUniform("colorTextureTransformMatrix",(r=>e.isSome(r.colorTextureTransformMatrix)?r.colorTextureTransformMatrix:o.create()))),r.varyings.add("colorUV","vec2"),r.vertex.code.add(a.glsl`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function t(r){r.vertex.uniforms.add(new s.Matrix3PassUniform("normalTextureTransformMatrix",(r=>e.isSome(r.normalTextureTransformMatrix)?r.normalTextureTransformMatrix:o.create()))),r.varyings.add("normalUV","vec2"),r.vertex.code.add(a.glsl`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function n(r){r.vertex.uniforms.add(new s.Matrix3PassUniform("emissiveTextureTransformMatrix",(r=>e.isSome(r.emissiveTextureTransformMatrix)?r.emissiveTextureTransformMatrix:o.create()))),r.varyings.add("emissiveUV","vec2"),r.vertex.code.add(a.glsl`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function x(r){r.vertex.uniforms.add(new s.Matrix3PassUniform("occlusionTextureTransformMatrix",(r=>e.isSome(r.occlusionTextureTransformMatrix)?r.occlusionTextureTransformMatrix:o.create()))),r.varyings.add("occlusionUV","vec2"),r.vertex.code.add(a.glsl`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(r){r.vertex.uniforms.add(new s.Matrix3PassUniform("metallicRoughnessTextureTransformMatrix",(r=>e.isSome(r.metallicRoughnessTextureTransformMatrix)?r.metallicRoughnessTextureTransformMatrix:o.create()))),r.varyings.add("metallicRoughnessUV","vec2"),r.vertex.code.add(a.glsl`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}r.colorTextureUV=i,r.emissiveTextureUV=n,r.metallicRoughnessTextureUV=u,r.normalTextureUV=t,r.occlusionTextureUV=x,Object.defineProperty(r,Symbol.toStringTag,{value:"Module"})}));
