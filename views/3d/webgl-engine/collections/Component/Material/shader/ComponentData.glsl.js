/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.26/esri/copyright.txt for details.
*/
define(["exports","../../../../../../../core/compilerUtils","../../../../../../../core/floatRGBA","../../../../../../../core/has","./DecodeSymbolColor.glsl","../../../../core/shaderLibrary/ShaderOutput","../../../../core/shaderLibrary/util/RgbaFloatEncoding.glsl","../../../../core/shaderLibrary/util/WebGL2Utils","../../../../core/shaderModules/Float4DrawUniform","../../../../core/shaderModules/IntegerDrawUniform","../../../../core/shaderModules/interfaces","../../../../core/shaderModules/Texture2DDrawUniform","../../../../core/shaderModules/TextureSizeUniformType","../../../../lib/VertexAttribute"],(function(e,o,r,t,n,a,d,l,c,i,x,s,C,u){"use strict";var m;e.ComponentDataType=void 0,(m=e.ComponentDataType||(e.ComponentDataType={}))[m.Uniform=0]="Uniform",m[m.Varying=1]="Varying",m[m.COUNT=2]="COUNT";const f=429496.7296;function p(e,o){r.packFloatRGBA(e/f*.5+.5,o)}function v(r,t){switch(t.componentData){case e.ComponentDataType.Varying:return g(r,t);case e.ComponentDataType.Uniform:return y(r);case e.ComponentDataType.COUNT:return;default:o.neverReached(t.componentData)}}function g(e,o){const{vertex:r,fragment:c}=e;r.include(d.RgbaFloatEncoding),r.uniforms.add(s.createTexture2DDrawSizeUniforms("componentColorTex",(e=>e.componentParameters.texture.texture),o.hasWebGL2Context?C.TextureSizeUniformType.None:C.TextureSizeUniformType.Size)),e.attributes.add(u.VertexAttribute.COMPONENTINDEX,"float"),e.varyings.add("vExternalColorMixMode","mediump float"),e.varyings.add("vExternalColor","vec4");const i=o.output===a.ShaderOutput.ObjectAndLayerIdColor;i&&e.varyings.add("vObjectAndLayerIdColor","vec4"),e.include(n.DecodeSymbolColor),r.constants.add("elevationScale","float",2*f),r.constants.add("stride","float",t("enable-feature:objectAndLayerId-rendering")?3:2),r.code.add(x.glsl`
  vec2 getComponentTextureCoordinates(float componentIndex, float typeOffset) {
    vec2 textureSize = ${l.textureSize(o,"componentColorTex")};

    float index = componentIndex * stride + typeOffset;
    float coordX = mod(index, textureSize.x);
    float coordY = floor(index / textureSize.x);

    return vec2(coordX, coordY) + 0.5;
  }
  `),r.code.add(x.glsl`
  vec4 _readComponentColor() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 0.0);

    return ${l.texelFetch(o,"componentColorTex","textureCoordinates","1.0 / componentColorTexSize")};
   }

   float readElevationOffset() {
    vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 1.0);

    vec4 encodedElevation = ${l.texelFetch(o,"componentColorTex","textureCoordinates","1.0 / componentColorTexSize")};
    return (rgba2float(encodedElevation) - 0.5) * elevationScale;
  }

  ${i?x.glsl`
          void forwardObjectAndLayerIdColor() {
            vec2 textureCoordinates = getComponentTextureCoordinates(componentIndex, 2.0);

            vObjectAndLayerIdColor = ${l.texelFetch(o,"componentColorTex","textureCoordinates","1.0 / componentColorTexSize")};
          }`:x.glsl`void forwardObjectAndLayerIdColor() {}`}

  vec4 forwardExternalColor(out bool castShadows) {
    vec4 componentColor = _readComponentColor() * 255.0;

    float shadowFlag = mod(componentColor.b * 255.0, 2.0);
    componentColor.b -= shadowFlag;
    castShadows = shadowFlag >= 1.0;

    int decodedColorMixMode;
    vExternalColor = decodeSymbolColor(componentColor, decodedColorMixMode) * 0.003921568627451; // = 1/255;
    vExternalColorMixMode = float(decodedColorMixMode) + 0.5; // add 0.5 to avoid interpolation artifacts

    return vExternalColor;
  }
`),c.code.add(x.glsl`
  void readExternalColor(out vec4 externalColor, out int externalColorMixMode) {
    externalColor = vExternalColor;
    externalColorMixMode = int(vExternalColorMixMode);
  }

  void outputObjectAndLayerIdColor() {
     ${i?x.glsl`gl_FragColor = vObjectAndLayerIdColor;`:""}
  }
`)}function y(e){const{vertex:o,fragment:r}=e;o.uniforms.add(new c.Float4DrawUniform("externalColor",(e=>e.componentParameters.externalColor))),r.uniforms.add(new i.IntegerDrawUniform("externalColorMixMode",(e=>e.componentParameters.externalColorMixMode))),e.varyings.add("vExternalColor","vec4"),o.code.add(x.glsl`float readElevationOffset() {
return 0.0;
}
void forwardObjectAndLayerIdColor() {
}
vec4 forwardExternalColor(out bool castShadows) {
vExternalColor = externalColor;
castShadows = true;
return externalColor;
}`),r.code.add(x.glsl`void readExternalColor(out vec4 color, out int colorMixMode) {
color = vExternalColor;
colorMixMode = externalColorMixMode;
}
void outputObjectAndLayerIdColor() {
gl_FragColor = vec4(1.0,0.0,0.0,0.0);
}`)}e.ComponentData=v,e.MAX_ELEVATION_OFFSET=f,e.encodeElevationOffset=p,Object.defineProperty(e,Symbol.toStringTag,{value:"Module"})}));
