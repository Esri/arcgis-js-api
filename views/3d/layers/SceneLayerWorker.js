// COPYRIGHT © 2020 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.16/esri/copyright.txt for details.

define(["require","exports","tslib","../../../core/maybe","../../../core/promiseUtils","../../../core/typedArrayUtil","../../../libs/i3s/I3SWorker"],(function(e,t,r,n,o,i,s){var f,a,u=function(){function e(){}return e.prototype.process=function(t){return r.__awaiter(this,void 0,void 0,(function(){var n;return r.__generator(this,(function(r){switch(r.label){case 0:return[4,e.ensureWASM()];case 1:return r.sent(),n=[t.geometryBuffer],[2,{result:l(t,n),transferList:n}]}}))}))},e.prototype.setModifications=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,e.ensureWASM()];case 1:return r.sent(),c(t),[2]}}))}))},e.prototype.setLegacySchema=function(t){return r.__awaiter(this,void 0,void 0,(function(){return r.__generator(this,(function(r){switch(r.label){case 0:return[4,e.ensureWASM()];case 1:return r.sent(),a.setLegacySchema(t.context,t.jsonSchema),[2]}}))}))},e.prototype.destroyContext=function(e){b(e)},e}();function c(e){for(var t=e.modifications,r=a._malloc(8*t.length),n=new Float64Array(a.HEAPU8.buffer,r,t.length),o=0;o<t.length;++o)n[o]=t[o];a.setModifications(e.context,r,t.length),a._free(r)}function l(e,t){if(!a)return null;var r=e.context,o=e.localOrigin,s=e.globalTrafo,f=e.mbs,u=e.elevationOffset,c=e.geometryBuffer,l=e.geometryDescriptor,b=e.indexToVertexProjector,d=e.vertexToRenderProjector,m=a._malloc(c.byteLength),h=a._malloc(33*Float64Array.BYTES_PER_ELEMENT),p=new Uint8Array(a.HEAPU8.buffer,m,c.byteLength);p.set(new Uint8Array(c));var E=new Float64Array(a.HEAPU8.buffer,h,33);y(E,o);var _=E.byteOffset+3*E.BYTES_PER_ELEMENT,g=new Float64Array(E.buffer,_);y(g,s),_+=16*E.BYTES_PER_ELEMENT,y(g=new Float64Array(E.buffer,_),f),_+=4*E.BYTES_PER_ELEMENT,n.isSome(e.obb)&&(y(g=new Float64Array(E.buffer,_),e.obb.center),_+=3*E.BYTES_PER_ELEMENT,y(g=new Float64Array(E.buffer,_),e.obb.halfSize),_+=3*E.BYTES_PER_ELEMENT,y(g=new Float64Array(E.buffer,_),e.obb.quaternion));var v=l,A={isDraco:!1,isLegacy:!1,color:e.layouts.some((function(e){return e.some((function(e){return"color"===e.name}))})),normal:e.needNormals&&e.layouts.some((function(e){return e.some((function(e){return"normalCompressed"===e.name}))})),uv0:e.layouts.some((function(e){return e.some((function(e){return"uv0"===e.name}))})),uvRegion:e.layouts.some((function(e){return e.some((function(e){return"uvRegion"===e.name}))})),featureIndex:v.featureIndex},w=a.process(r,!!e.obb,m,p.byteLength,v,A,h,u,b,d,e.normalReferenceFrame);if(a._free(h),a._free(m),w.error.length>0)throw"i3s.wasm: "+w.error;if(w.discarded)return null;var L=w.componentOffsets.length>0?i.slice(w.componentOffsets):null,T=w.featureIds.length>0?i.slice(w.featureIds):null,S=i.slice(w.interleavedVertedData).buffer,M=1===w.indicesType?i.slice(new Uint16Array(w.indices.buffer,w.indices.byteOffset,w.indices.byteLength/2)):i.slice(new Uint32Array(w.indices.buffer,w.indices.byteOffset,w.indices.byteLength/4)),I=i.slice(w.positions),x=1===w.positionIndicesType?i.slice(new Uint16Array(w.positionIndices.buffer,w.positionIndices.byteOffset,w.positionIndices.byteLength/2)):i.slice(new Uint32Array(w.positionIndices.buffer,w.positionIndices.byteOffset,w.positionIndices.byteLength/4)),P={layout:e.layouts[0],interleavedVertexData:S,indices:M,hasColors:w.hasColors,positionData:{data:I,indices:x}};return T&&t.push(T.buffer),L&&t.push(L.buffer),t.push(S),t.push(M.buffer),t.push(I.buffer),t.push(x.buffer),{componentOffsets:L,featureIds:T,transformedGeometry:P,obb:w.obb}}function b(e){a&&a.destroy(e)}function y(e,t){for(var r=0;r<t.length;++r)e[r]=t[r]}return function(e){e.ensureWASM=function(){return a?o.resolve():(f||(f=s.getWorkerModule().then((function(e){a=e,f=null}))),f)},e.test={transform:l,setModifications:c,destroy:b}}(u||(u={})),u}));