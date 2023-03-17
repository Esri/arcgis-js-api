/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../util/WebGL2Utils","../../shaderModules/Float2PassUniform","../../shaderModules/interfaces","../../shaderModules/Texture2DPassUniform","../../shaderModules/TextureSizeUniformType"],(function(e,r,o,t,n,i){"use strict";function s(e,s){e.fragment.uniforms.add(n.createTexture2DPassSizeUniforms("u_transformGrid",(e=>e.u_transformGrid),s.hasWebGL2Context?i.TextureSizeUniformType.None:i.TextureSizeUniformType.InvSize)),e.fragment.uniforms.add(new o.Float2PassUniform("u_transformSpacing",(e=>e.common.u_transformSpacing))),e.fragment.uniforms.add(new o.Float2PassUniform("u_targetImageSize",(e=>e.common.u_targetImageSize))),e.fragment.code.add(t.glsl`
    vec2 projectPixelLocation(vec2 coords) {
      // Pixel index in row/column, corresponds to upperleft corner, e.g. [100, 20]
      vec2 index_image = floor(coords * u_targetImageSize);

      // Pixel's corresponding cell index in transform grid
      // Each transform cell corresponds to 4 pixels: 6 coefficients from lowerleft triangle followed by 6 coefficients from upperright triangle
      vec2 oneTransformPixel = vec2(4.0, 1.0);
      vec2 index_transform = floor(index_image / u_transformSpacing) * oneTransformPixel;

      // Correspoding position in transform grid cell, cell center coordinates
      vec2 pos = fract((index_image + 0.5) / u_transformSpacing);

      // Pixel's corresponding transform cell location, cell center coordinates
      vec2 transform_location = index_transform + 0.5;

      vec2 srcLocation;

      // Use lower triangle or upper triangle
      if (pos.s <= pos.t) {
        vec3 ll_abc = ${r.texelFetch(s,"u_transformGrid","transform_location")}.rgb;
        vec3 ll_def = ${r.texelFetch(s,"u_transformGrid","vec2(transform_location.s + 1.0, transform_location.t)")}.rgb;
        srcLocation.s = dot(ll_abc, vec3(pos, 1.0));
        srcLocation.t = dot(ll_def, vec3(pos, 1.0));
      } else {
        vec3 ur_abc = ${r.texelFetch(s,"u_transformGrid","vec2(transform_location.s + 2.0, transform_location.t)")}.rgb;
        vec3 ur_def = ${r.texelFetch(s,"u_transformGrid","vec2(transform_location.s + 3.0, transform_location.t)")}.rgb;
        srcLocation.s = dot(ur_abc, vec3(pos, 1.0));
        srcLocation.t = dot(ur_def, vec3(pos, 1.0));
      }

      return srcLocation;
    }
  `)}e.Projection=s,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
