/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/maybe","../../../../chunks/vec4f64","../../../../geometry/support/buffer/BufferView","../graphics/ElevationAligners","./uvUtils","../../webgl-engine/materials/ColorMaterial","../../webgl-engine/materials/PatternMaterial"],(function(e,r,t,a,n,o,i,s,l){"use strict";function c(e,r,t){return f(u(e),r,t)}function u(e){return e&&e.pattern||null}function f(e,r,n){return t.isSome(e)?"none"===e.style||"solid"===e.style?("none"===e.style&&(r.color=a.fromValues(0,0,0,0),r.transparent=!0),new s.ColorMaterial(r)):(r.style=d(e.style),r.draped=n.isDraped,new l.PatternMaterial(r)):new s.ColorMaterial(r)}function d(e){switch(e){case"horizontal":return 0;case"vertical":return 1;case"cross":return 2;case"forward-diagonal":return 3;case"backward-diagonal":return 4;case"diagonal-cross":return 5;default:return}}function p(e){return e.material instanceof l.PatternMaterial&&!e.material.params.draped}function g(e,r){if(p(e)){const t=e.geometry.vertexAttributes,a=t.get("position").data,o=t.get("uvMapSpace").data,s=t.get("boundingRect").data;i.createMapSpaceUVCoords(n.BufferViewVec4f.fromTypedArray(o),n.BufferViewVec3f64.fromTypedArray(a),r,n.BufferViewMat3f64.fromTypedArray(s))}}function y(e,r,t,a){const n=o.perVertexElevationAligner(e,r,t,a),i=e.stageObject.geometryRecords;for(let o=0;o<i.length;o++)g(i[o],a);return n}e.createMaterial=c,e.createMaterialFromPattern=f,e.parsePatternStyle=d,e.requiresUVUpdates=p,e.updateMapSpaceUVCoords=g,e.uvElevationAligner=y,Object.defineProperty(e,"__esModule",{value:!0})}));
