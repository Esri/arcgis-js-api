/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../../../../../../core/maybe","../../../../../../chunks/mat3f32","../../shaderModules/interfaces","../../shaderModules/Matrix3PassUniform"],(function(e,r,o,a,s){"use strict";function i(e){e.vertex.uniforms.add(new s.Matrix3PassUniform("colorTextureTransformMatrix",(e=>r.isSome(e.colorTextureTransformMatrix)?e.colorTextureTransformMatrix:o.create()))),e.varyings.add("colorUV","vec2"),e.vertex.code.add(a.glsl`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function t(e){e.vertex.uniforms.add(new s.Matrix3PassUniform("normalTextureTransformMatrix",(e=>r.isSome(e.normalTextureTransformMatrix)?e.normalTextureTransformMatrix:o.create()))),e.varyings.add("normalUV","vec2"),e.vertex.code.add(a.glsl`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function n(e){e.vertex.uniforms.add(new s.Matrix3PassUniform("emissiveTextureTransformMatrix",(e=>r.isSome(e.emissiveTextureTransformMatrix)?e.emissiveTextureTransformMatrix:o.create()))),e.varyings.add("emissiveUV","vec2"),e.vertex.code.add(a.glsl`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function x(e){e.vertex.uniforms.add(new s.Matrix3PassUniform("occlusionTextureTransformMatrix",(e=>r.isSome(e.occlusionTextureTransformMatrix)?e.occlusionTextureTransformMatrix:o.create()))),e.varyings.add("occlusionUV","vec2"),e.vertex.code.add(a.glsl`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}function u(e){e.vertex.uniforms.add(new s.Matrix3PassUniform("metallicRoughnessTextureTransformMatrix",(e=>r.isSome(e.metallicRoughnessTextureTransformMatrix)?e.metallicRoughnessTextureTransformMatrix:o.create()))),e.varyings.add("metallicRoughnessUV","vec2"),e.vertex.code.add(a.glsl`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)}e.colorTextureUV=i,e.emissiveTextureUV=n,e.metallicRoughnessTextureUV=u,e.normalTextureUV=t,e.occlusionTextureUV=x,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
