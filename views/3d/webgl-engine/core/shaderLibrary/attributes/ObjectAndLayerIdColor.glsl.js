/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.25/esri/copyright.txt for details.
*/
define(["exports","../ShaderOutput","../../shaderModules/interfaces","../../../lib/VertexAttribute"],(function(e,t,r,o){"use strict";function d(e,d){const a=d.output===t.ShaderOutput.ObjectAndLayerIdColor,l=d.objectAndLayerIdColorInstanced;a&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),l?e.attributes.add(o.VertexAttribute.OBJECTANDLAYERIDCOLOR_INSTANCED,"vec4"):e.attributes.add(o.VertexAttribute.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(r.glsl`
     void forwardObjectAndLayerIdColor() {
      ${a?l?r.glsl`objectAndLayerIdColorVarying = objectAndLayerIdColor_instanced * 0.003921568627451;`:r.glsl`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:r.glsl``} }`),e.fragment.code.add(r.glsl`
      void outputObjectAndLayerIdColor() {
        ${a?r.glsl`gl_FragColor = objectAndLayerIdColorVarying;`:r.glsl``} }`)}e.ObjectAndLayerIdColor=d,Object.defineProperties(e,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})}));
