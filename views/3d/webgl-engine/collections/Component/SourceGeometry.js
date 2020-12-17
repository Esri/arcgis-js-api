/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.18/esri/copyright.txt for details.
*/
define(["exports","../../../support/buffer/InterleavedLayout"],(function(e,o){"use strict";e.createVertexBufferLayout=function(e){const r=o.newLayout().vec3f("position");return e.normals&&r.vec2i16("normalCompressed",{glNormalized:!0}),1===e.textureCoordinates?r.vec2f("uv0"):2===e.textureCoordinates&&(r.vec2f("uv0"),r.vec4u16("uvRegion",{glNormalized:!0})),e.colors&&r.vec4u8("color",{glNormalized:!0}),r.alignTo(4)},Object.defineProperty(e,"__esModule",{value:!0})}));
