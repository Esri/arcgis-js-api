/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../ShaderOutput","../attributes/TextureCoordinateAttribute.glsl","../attributes/VertexTextureCoordinates.glsl","../util/TextureAtlasLookup.glsl","../util/WebGL2Utils","../../shaderModules/interfaces","../../shaderModules/Texture2DDrawUniform","../../shaderModules/TextureSizeUniformType","../../../lib/basicInterfaces"],(function(e,t,r,o,u,a,s,i,l,d){"use strict";function n(e,n){const x=e.fragment;if(n.hasBaseColorTexture&&(n.output===t.ShaderOutput.Color||n.alphaDiscardMode!==d.AlphaDiscardMode.Opaque)){e.include(o.VertexTextureCoordinates,n);const t=n.textureCoordinateType===r.TextureCoordinateAttributeType.Atlas;x.uniforms.add(i.createTexture2DDrawSizeUniforms("baseColorTexture",(e=>e.texture),t?n.hasWebGL2Context?l.TextureSizeUniformType.None:l.TextureSizeUniformType.Size:l.TextureSizeUniformType.None)),t?(e.include(u.TextureAtlasLookup),x.code.add(s.glsl`
        vec4 readBaseColorTexture() {
          vec2 textureSize = ${a.textureSize(n,"baseColorTexture")};
          return textureAtlasLookup(baseColorTexture, textureSize, vuv0, vuvRegion);
        }
      `)):x.code.add(s.glsl`vec4 readBaseColorTexture() {
return texture2D(baseColorTexture, vuv0);
}`)}else x.code.add(s.glsl`vec4 readBaseColorTexture() { return vec4(1.0); }`)}e.ReadBaseColorTexture=n,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
