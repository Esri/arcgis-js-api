/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/compilerUtils","../../../../core/urlUtils","../../../../core/Version","../../../../chunks/mat4","../../../../chunks/mat4f64","../../../../chunks/quatf64","../../support/buffer/BufferView","../../../../chunks/quat","./BinaryStreamReader","./fillDefaults","./pathUtils","../../../../chunks/scalar"],(function(e,t,r,n,o,s,i,a,u,c,f,d,p){"use strict";const l={MAGIC:1179937895,CHUNK_TYPE_JSON:1313821514,CHUNK_TYPE_BIN:5130562,MIN_HEADER_LENGTH:20};let h=function(){function e(e,t,r,n,o){this.context=e,this.errorContext=t,this.uri=r,this.json=n,this.glbBuffer=o,this.bufferCache=new Map,this.textureCache=new Map,this.materialCache=new Map,this.nodeParentMap=new Map,this.nodeTransformCache=new Map,this.baseUri=d.splitURI(this.uri).dirPart,this.checkVersionSupported(),this.checkRequiredExtensionsSupported(),t.errorUnsupportedIf(null==n.scenes,"Scenes must be defined."),t.errorUnsupportedIf(null==n.meshes,"Meshes must be defined"),t.errorUnsupportedIf(null==n.nodes,"Nodes must be defined."),this.computeNodeParents()}e.load=async function(t,n,o,s){if(r.isDataProtocol(o)){const s=r.dataComponents(o);if("model/gltf-binary"!==s.mediaType)try{return new e(t,n,o,JSON.parse(s.isBase64?atob(s.data):s.data))}catch{}const i=r.dataToArrayBuffer(o);if(e.isGLBData(i))return this.fromGLBData(t,n,o,i)}if(o.endsWith(".gltf")){const r=await t.loadJSON(o,s);return new e(t,n,o,r)}const i=await t.loadBinary(o,s);if(e.isGLBData(i))return this.fromGLBData(t,n,o,i);const a=await t.loadJSON(o,s);return new e(t,n,o,a)},e.isGLBData=function(e){const t=new c.BinaryStreamReader(e);return t.remainingBytes()>=4&&t.readUint32()===l.MAGIC},e.fromGLBData=async function(t,r,n,o){const s=await e.parseGLBData(r,o);return new e(t,r,n,s.json,s.binaryData)},e.parseGLBData=async function(e,t){const r=new c.BinaryStreamReader(t);e.assert(r.remainingBytes()>=12,"GLB binary data is insufficiently large.");const n=r.readUint32(),o=r.readUint32(),s=r.readUint32();e.assert(n===l.MAGIC,"Magic first 4 bytes do not fit to expected GLB value."),e.assert(t.byteLength>=s,"GLB binary data is smaller than header specifies."),e.errorUnsupportedIf(2!==o,"An unsupported GLB container version was detected. Only version 2 is supported.");let i,a,u=0;for(;r.remainingBytes()>=8;){const t=r.readUint32(),n=r.readUint32();0===u?(e.assert(n===l.CHUNK_TYPE_JSON,"First GLB chunk must be JSON."),e.assert(t>=0,"No JSON data found."),i=await O(r.readUint8Array(t))):1===u?(e.errorUnsupportedIf(n!==l.CHUNK_TYPE_BIN,"Second GLB chunk expected to be BIN."),a=r.readUint8Array(t)):e.warnUnsupported("More than 2 GLB chunks detected. Skipping."),u+=1}return i||e.error("No GLB JSON chunk detected."),{json:i,binaryData:a}};var t=e.prototype;return t.getBuffer=async function(e,t){const r=this.json.buffers[e],n=this.errorContext;if(null==r.uri)return n.assert(null!=this.glbBuffer,"GLB buffer not present"),this.glbBuffer;let o=this.bufferCache.get(e);if(!o){const s=await this.context.loadBinary(this.resolveUri(r.uri),t);o=new Uint8Array(s),this.bufferCache.set(e,o),n.assert(o.byteLength===r.byteLength,"Buffer byte lengths should match.")}return o},t.getAccessor=async function(e,t){const r=this.json.accessors[e],n=this.errorContext;n.errorUnsupportedIf(null==r.bufferView,"Some accessor does not specify a bufferView."),n.errorUnsupportedIf(r.type in["MAT2","MAT3","MAT4"],`AttributeType ${r.type} is not supported`);const o=this.json.bufferViews[r.bufferView],s=await this.getBuffer(o.buffer,t),i=w[r.type],a=x[r.componentType],u=i*a,c=o.byteStride||u;return{raw:s.buffer,byteStride:c,byteOffset:s.byteOffset+(o.byteOffset||0)+(r.byteOffset||0),entryCount:r.count,isDenselyPacked:c===u,componentCount:i,componentByteSize:a,componentType:r.componentType,min:r.min,max:r.max,normalized:!!r.normalized}},t.getIndexData=async function(e,t){if(null==e.indices)return null;const r=await this.getAccessor(e.indices,t);if(r.isDenselyPacked)switch(r.componentType){case 5121:return new Uint8Array(r.raw,r.byteOffset,r.entryCount);case 5123:return new Uint16Array(r.raw,r.byteOffset,r.entryCount);case 5125:return new Uint32Array(r.raw,r.byteOffset,r.entryCount)}else switch(r.componentType){case 5121:return p.makeDense(this.wrapAccessor(a.BufferViewUint8,r));case 5123:return p.makeDense(this.wrapAccessor(a.BufferViewUint16,r));case 5125:return p.makeDense(this.wrapAccessor(a.BufferViewUint32,r))}},t.getPositionData=async function(e,t){const r=this.errorContext;r.errorUnsupportedIf(null==e.attributes.POSITION,"No POSITION vertex data found.");const n=await this.getAccessor(e.attributes.POSITION,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for POSITION vertex attribute, but found "+g[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"POSITION vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(a.BufferViewVec3f,n)},t.getNormalData=async function(e,t){const r=this.errorContext;r.assert(null!=e.attributes.NORMAL,"No NORMAL vertex data found.");const n=await this.getAccessor(e.attributes.NORMAL,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for NORMAL vertex attribute, but found "+g[n.componentType]),r.errorUnsupportedIf(3!==n.componentCount,"NORMAL vertex attribute must have 3 components, but found "+n.componentCount.toFixed()),this.wrapAccessor(a.BufferViewVec3f,n)},t.getTangentData=async function(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TANGENT,"No TANGENT vertex data found.");const n=await this.getAccessor(e.attributes.TANGENT,t);return r.errorUnsupportedIf(5126!==n.componentType,"Expected type FLOAT for TANGENT vertex attribute, but found "+g[n.componentType]),r.errorUnsupportedIf(4!==n.componentCount,"TANGENT vertex attribute must have 4 components, but found "+n.componentCount.toFixed()),new a.BufferViewVec4f(n.raw,n.byteOffset,n.byteStride,n.byteOffset+n.byteStride*n.entryCount)},t.getTextureCoordinates=async function(e,t){const r=this.errorContext;r.assert(null!=e.attributes.TEXCOORD_0,"No TEXCOORD_0 vertex data found.");const n=await this.getAccessor(e.attributes.TEXCOORD_0,t);return r.errorUnsupportedIf(2!==n.componentCount,"TEXCOORD_0 vertex attribute must have 2 components, but found "+n.componentCount.toFixed()),5126===n.componentType?this.wrapAccessor(a.BufferViewVec2f,n):(r.errorUnsupportedIf(!n.normalized,"Integer component types are only supported for a normalized accessor for TEXCOORD_0."),T(n))},t.getVertexColors=async function(e,t){const r=this.errorContext;r.assert(null!=e.attributes.COLOR_0,"No COLOR_0 vertex data found.");const n=await this.getAccessor(e.attributes.COLOR_0,t);if(r.errorUnsupportedIf(4!==n.componentCount&&3!==n.componentCount,"COLOR_0 attribute must have 3 or 4 components, but found "+n.componentCount.toFixed()),4===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(a.BufferViewVec4f,n);if(5121===n.componentType)return this.wrapAccessor(a.BufferViewVec4u8,n);if(5123===n.componentType)return this.wrapAccessor(a.BufferViewVec4u16,n)}else if(3===n.componentCount){if(5126===n.componentType)return this.wrapAccessor(a.BufferViewVec3f,n);if(5121===n.componentType)return this.wrapAccessor(a.BufferViewVec3u8,n);if(5123===n.componentType)return this.wrapAccessor(a.BufferViewVec3u16,n)}r.errorUnsupported("Unsupported component type for COLOR_0 attribute: "+g[n.componentType])},t.hasPositions=function(e){return void 0!==e.attributes.POSITION},t.hasNormals=function(e){return void 0!==e.attributes.NORMAL},t.hasVertexColors=function(e){return void 0!==e.attributes.COLOR_0},t.hasTextureCoordinates=function(e){return void 0!==e.attributes.TEXCOORD_0},t.hasTangents=function(e){return void 0!==e.attributes.TANGENT},t.getMaterial=async function(e,t,r){const n=this.errorContext;let o=this.materialCache.get(e.material);if(!o){const s=null!=e.material?f.material(this.json.materials[e.material]):f.material(),i=s.pbrMetallicRoughness,a=this.hasVertexColors(e);let u,c,d,p,l;i.baseColorTexture&&(n.errorUnsupportedIf(0!==(i.baseColorTexture.texCoord||0),"Only TEXCOORD with index 0 is supported."),u=await this.getTexture(i.baseColorTexture.index,t)),s.normalTexture&&(0!==(s.normalTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the normal map texture."):c=await this.getTexture(s.normalTexture.index,t)),s.occlusionTexture&&r&&(0!==(s.occlusionTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the occlusion texture."):d=await this.getTexture(s.occlusionTexture.index,t)),s.emissiveTexture&&r&&(0!==(s.emissiveTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the emissive texture."):p=await this.getTexture(s.emissiveTexture.index,t)),i.metallicRoughnessTexture&&r&&(0!==(i.metallicRoughnessTexture.texCoord||0)?n.warnUnsupported("Only TEXCOORD with index 0 is supported for the metallicRoughness texture."):l=await this.getTexture(i.metallicRoughnessTexture.index,t));const h=null!=e.material?e.material:-1;o={alphaMode:s.alphaMode,alphaCutoff:s.alphaCutoff,color:i.baseColorFactor,doubleSided:!!s.doubleSided,colorTexture:u,normalTexture:c,name:s.name,id:h,occlusionTexture:d,emissiveTexture:p,emissiveFactor:s.emissiveFactor,metallicFactor:i.metallicFactor,roughnessFactor:i.roughnessFactor,metallicRoughnessTexture:l,vertexColors:a,ESRI_externalColorMixMode:s.extras.ESRI_externalColorMixMode}}return o},t.getTexture=async function(e,t){const r=this.errorContext,n=this.json.textures[e],o=f.textureSampler(null!=n.sampler?this.json.samplers[n.sampler]:{});r.errorUnsupportedIf(null==n.source,"Source is expected to be defined for a texture.");const s=this.json.images[n.source];let i=this.textureCache.get(e);if(!i){let n;if(s.uri)n=await this.context.loadImage(this.resolveUri(s.uri),t);else{r.errorUnsupportedIf(null==s.bufferView,"Image bufferView must be defined."),r.errorUnsupportedIf(null==s.mimeType,"Image mimeType must be defined.");const e=this.json.bufferViews[s.bufferView],o=await this.getBuffer(e.buffer,t);r.errorUnsupportedIf(null!=e.byteStride,"byteStride not supported for image buffer"),n=await C(new Uint8Array(o.buffer,o.byteOffset+(e.byteOffset||0),e.byteLength),s.mimeType)}i={data:n,wrapS:o.wrapS,wrapT:o.wrapT,minFilter:o.minFilter,name:s.name,id:e},this.textureCache.set(e,i)}return i},t.getNodeTransform=function(e){if(void 0===e)return y;let t=this.nodeTransformCache.get(e);if(!t){const r=this.getNodeTransform(this.getNodeParent(e)),n=this.json.nodes[e];n.matrix?t=o.multiply(s.create(),r,n.matrix):n.translation||n.rotation||n.scale?(t=s.clone(r),n.translation&&o.translate(t,t,n.translation),n.rotation&&(b[3]=u.getAxisAngle(b,n.rotation),o.rotate(t,t,b[3],b)),n.scale&&o.scale(t,t,n.scale)):t=r,this.nodeTransformCache.set(e,t)}return t},t.wrapAccessor=function(e,t){return new e(t.raw,t.byteOffset,t.byteStride,t.byteOffset+t.byteStride*(t.entryCount-1)+t.componentByteSize*t.componentCount)},t.resolveUri=function(e){return r.makeAbsolute(e,this.baseUri)},t.getNodeParent=function(e){return this.nodeParentMap.get(e)},t.checkVersionSupported=function(){const e=n.Version.parse(this.json.asset.version,"glTF");m.validate(e)},t.checkRequiredExtensionsSupported=function(){const e=this.json,t=this.errorContext;e.extensionsRequired&&0!==e.extensionsRequired.length&&t.errorUnsupported("gltf loader was not able to load unsupported feature. Required extensions: "+e.extensionsRequired.join(", "))},t.computeNodeParents=function(){this.json.nodes.forEach(((e,t)=>{e.children&&e.children.forEach((e=>{this.nodeParentMap.set(e,t)}))}))},e}();const m=new n.Version(2,0,"glTF"),y=o.fromXRotation(s.create(),Math.PI/2),b=i.create(),w={SCALAR:1,VEC2:2,VEC3:3,VEC4:4},x={5120:1,5121:1,5122:2,5123:2,5126:4,5125:4};function T(e){switch(e.componentType){case 5120:return new a.BufferViewVec2i8(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5121:return new a.BufferViewVec2u8(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5122:return new a.BufferViewVec2i16(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5123:return new a.BufferViewVec2u16(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5125:return new a.BufferViewVec2u32(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);case 5126:return new a.BufferViewVec2f(e.raw,e.byteOffset,e.byteStride,e.byteOffset+e.byteStride*e.entryCount);default:return void t.neverReached(e.componentType)}}async function O(e){return new Promise(((t,r)=>{const n=new Blob([e]),o=new FileReader;o.onload=()=>{const e=o.result;t(JSON.parse(e))},o.onerror=e=>{r(e)},o.readAsText(n)}))}async function C(e,t){return new Promise(((r,n)=>{const o=new Blob([e],{type:t}),s=URL.createObjectURL(o),i=new Image;i.addEventListener("load",(()=>{URL.revokeObjectURL(s),"decode"in i?i.decode().then((()=>r(i)),(()=>r(i))):r(i)})),i.addEventListener("error",(e=>{URL.revokeObjectURL(s),n(e)})),i.src=s}))}const g={5120:"BYTE",5121:"UNSIGNED_BYTE",5122:"SHORT",5123:"UNSIGNED_SHORT",5125:"UNSIGNED_INT",5126:"FLOAT"};e.Resource=h,Object.defineProperty(e,"__esModule",{value:!0})}));
