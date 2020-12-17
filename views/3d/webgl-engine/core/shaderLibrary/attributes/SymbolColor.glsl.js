/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../shaderModules/interfaces","../../../collections/Component/Material/shader/DecodeSymbolColor.glsl"],(function(o,e,l){"use strict";o.SymbolColor=function(o,r){r.symbolColor?(o.include(l.DecodeSymbolColor),o.attributes.add("symbolColor","vec4"),o.varyings.add("colorMixMode","mediump float")):o.fragment.uniforms.add("colorMixMode","int"),r.symbolColor?o.vertex.code.add(e.glsl`
    int symbolColorMixMode;

    vec4 getSymbolColor() {
      return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
    }

    void forwardColorMixMode() {
      colorMixMode = float(symbolColorMixMode) + 0.5;
    }
  `):o.vertex.code.add(e.glsl`
    vec4 getSymbolColor() { return vec4(1.0); }
    void forwardColorMixMode() {}
    `)},Object.defineProperty(o,"__esModule",{value:!0})}));
