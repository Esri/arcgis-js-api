/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../attributes/VertexPosition.glsl","../attributes/VertexNormal.glsl"],(function(e,o,d,r){"use strict";e.ComputeShadingNormal=function(e,a){const i=e.fragment;0===a.doubleSidedMode?i.code.add(o.glsl`
      vec3 _adjustDoublesided(vec3 normal) {
        return normal;
      }
    `):1===a.doubleSidedMode?(e.include(d.VertexPosition,a),i.uniforms.add("uTransform_ViewFromCameraLocal_T","vec3"),i.code.add(o.glsl`
      vec3 _adjustDoublesided(vec3 normal) {
        vec3 viewDir = vPositionWorldCameraRelative + uTransform_ViewFromCameraLocal_T;
        return dot(normal, viewDir) > 0.0 ? -normal : normal;
      }
    `)):2===a.doubleSidedMode&&i.code.add(o.glsl`
      vec3 _adjustDoublesided(vec3 normal) {
        return gl_FrontFacing ? normal : -normal;
      }
    `),0===a.normalType||1===a.normalType?(e.include(r.VertexNormal,a),i.code.add(o.glsl`
      vec3 shadingNormalWorld() {
        return _adjustDoublesided(normalize(vNormalWorld));
      }

      vec3 shadingNormal_view() {
        vec3 normal = normalize(vNormalView);
        return gl_FrontFacing ? normal : -normal;
      }
    `)):3===a.normalType?(e.extensions.add("GL_OES_standard_derivatives"),e.include(d.VertexPosition,a),i.code.add(o.glsl`
      vec3 shadingNormalWorld() {
        return normalize(cross(
          dFdx(vPositionWorldCameraRelative),
          dFdy(vPositionWorldCameraRelative)
        ));
      }

      vec3 shadingNormal_view() {
        return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view)));
      }
    `)):2===a.normalType&&(1===a.viewingMode?(e.include(d.VertexPosition,a),i.code.add(o.glsl`
        vec3 shadingNormalWorld() {
          return normalize(positionWorld());
        }
      `)):2===a.viewingMode&&i.code.add(o.glsl`
        vec3 shadingNormalWorld() {
          return vec3(0.0, 0.0, 1.0);
        }
      `),e.extensions.add("GL_OES_standard_derivatives"),i.code.add(o.glsl`
      vec3 shadingNormal_view() {
        return normalize(cross(dFdx(vPosition_view),dFdy(vPosition_view))).xyz;
      }
    `))},Object.defineProperty(e,"__esModule",{value:!0})}));
