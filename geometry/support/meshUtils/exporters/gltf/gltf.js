/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.21/esri/copyright.txt for details.
*/
define(["exports","../../../../../core/MapUtils","../../../../../core/maybe","../../../../../chunks/quat","../../../../../chunks/quatf64","../../../../../chunks/vec3","../../../../../chunks/vec3f64","../../../MeshMaterialMetallicRoughness","../../georeference","./buffer","./geometry","./types","./imageutils"],(function(e,t,s,i,r,a,n,o,u,l,c,h,f){"use strict";let d=function(){function e(e,t,s){this.params={},this.materialMap=new Array,this.imageMap=new Map,this.textureMap=new Map,this.gltf={asset:{version:"2.0",copyright:e.copyright,generator:e.generator},extras:{options:t,binChunkBuffer:null,promises:[]}},s&&(this.params=s),this.addScenes(e)}var d=e.prototype;return d.addScenes=function(e){this.gltf.scene=e.defaultScene;const t=this.gltf.extras.options.bufferOutputType===h.BufferOutputType.GLB||this.gltf.extras.options.imageOutputType===h.ImageOutputType.GLB;t&&(this.gltf.extras.binChunkBuffer=new l.Buffer(this.gltf)),e.forEachScene((e=>{this.addScene(e)})),t&&this.gltf.extras.binChunkBuffer.finalize()},d.addScene=function(e){this.gltf.scenes||(this.gltf.scenes=[]);const t={};e.name&&(t.name=e.name),e.forEachNode((e=>{t.nodes||(t.nodes=[]);const s=this.addNode(e);t.nodes.push(s)})),this.gltf.scenes.push(t)},d.addNode=function(e){this.gltf.nodes||(this.gltf.nodes=[]);const t={};e.name&&(t.name=e.name);const s=e.translation;a.exactEquals(s,n.ZEROS)||(t.translation=n.clone(s));const o=e.rotation;i.exactEquals(o,r.IDENTITY)||(t.rotation=r.clone(o));const u=e.scale;a.exactEquals(u,n.ONES)||(t.scale=n.clone(u)),e.mesh&&e.mesh.vertexAttributes.position?t.mesh=this.addMesh(e.mesh):e.forEachNode((e=>{t.children||(t.children=[]);const s=this.addNode(e);t.children.push(s)}));const l=this.gltf.nodes.length;return this.gltf.nodes.push(t),l},d.addMesh=function(e){this.gltf.meshes||(this.gltf.meshes=[]);const t={primitives:[]},i=this.gltf.extras.options.bufferOutputType===h.BufferOutputType.GLB;let r;r=i?this.gltf.extras.binChunkBuffer:new l.Buffer(this.gltf),this.params.origin||(this.params.origin=c.computeOrigin(e));const a=u.ungeoreferenceByTransform(e.vertexAttributes,e.transform,this.params.origin,{geographic:this.params.geographic,unit:"meters"});c.smoothNormals(e,a),this.flipYZAxis(a);const n=r.addBufferView(5126,h.AttributeType.VEC3,h.TargetBuffer.ARRAY_BUFFER);let o,f,d,p;a.normal&&(o=r.addBufferView(5126,h.AttributeType.VEC3,h.TargetBuffer.ARRAY_BUFFER)),e.vertexAttributes.uv&&(f=r.addBufferView(5126,h.AttributeType.VEC2,h.TargetBuffer.ARRAY_BUFFER)),a.tangent&&(d=r.addBufferView(5126,h.AttributeType.VEC4,h.TargetBuffer.ARRAY_BUFFER)),e.vertexAttributes.color&&(p=r.addBufferView(5121,h.AttributeType.VEC4,h.TargetBuffer.ARRAY_BUFFER)),n.startAccessor("POSITION"),o&&o.startAccessor("NORMAL"),f&&f.startAccessor("TEXCOORD_0"),d&&d.startAccessor("TANGENT"),p&&p.startAccessor("COLOR_0");const g=a.position.length/3,{position:m,normal:x,tangent:T}=a,{color:A,uv:b}=e.vertexAttributes;for(let u=0;u<g;++u)n.push(m[3*u+0]),n.push(m[3*u+1]),n.push(m[3*u+2]),o&&s.isSome(x)&&(o.push(x[3*u+0]),o.push(x[3*u+1]),o.push(x[3*u+2])),f&&s.isSome(b)&&(f.push(b[2*u+0]),f.push(b[2*u+1])),d&&s.isSome(T)&&(d.push(T[4*u+0]),d.push(T[4*u+1]),d.push(T[4*u+2]),d.push(T[4*u+3])),p&&s.isSome(A)&&(p.push(A[4*u+0]),p.push(A[4*u+1]),p.push(A[4*u+2]),p.push(A[4*u+3]));const R=n.endAccessor(),M=this.addAccessor(n.index,R);let y,B,O,S,E;if(o){const e=o.endAccessor();y=this.addAccessor(o.index,e)}if(f){const e=f.endAccessor();B=this.addAccessor(f.index,e)}if(d){const e=d.endAccessor();O=this.addAccessor(d.index,e)}if(p){const e=p.endAccessor();S=this.addAccessor(p.index,e)}e.components&&e.components.length>0&&e.components[0].faces?(E=r.addBufferView(5125,h.AttributeType.SCALAR,h.TargetBuffer.ELEMENT_ARRAY_BUFFER),this.addMeshVertexIndexed(E,e.components,t,M,y,B,O,S)):this.addMeshVertexNonIndexed(e.components,t,M,y,B,O,S),n.finalize(),o&&o.finalize(),f&&f.finalize(),d&&d.finalize(),E&&E.finalize(),p&&p.finalize(),i||r.finalize();const N=this.gltf.meshes.length;return this.gltf.meshes.push(t),N},d.flipYZAxis=function({position:e,normal:t,tangent:s}){this.flipYZBuffer(e,3),this.flipYZBuffer(t,3),this.flipYZBuffer(s,4)},d.flipYZBuffer=function(e,t){if(!s.isNone(e))for(let s=1,i=2;s<e.length;s+=t,i+=t){const t=e[s],r=e[i];e[s]=r,e[i]=-t}},d.addMaterial=function(e){if(null===e)return;const t=this.materialMap.indexOf(e);if(-1!==t)return t;this.gltf.materials||(this.gltf.materials=[]);const i={};switch(e.alphaMode){case"mask":i.alphaMode=h.AlphaMode.MASK;break;case"auto":case"blend":i.alphaMode=h.AlphaMode.BLEND}.5!==e.alphaCutoff&&(i.alphaCutoff=e.alphaCutoff),e.doubleSided&&(i.doubleSided=e.doubleSided),i.pbrMetallicRoughness={};const r=e=>e**2.1,a=e=>{const t=e.toRgba();return t[0]=r(t[0]/255),t[1]=r(t[1]/255),t[2]=r(t[2]/255),t};if(s.isSome(e.color)&&(i.pbrMetallicRoughness.baseColorFactor=a(e.color)),s.isSome(e.colorTexture)&&(i.pbrMetallicRoughness.baseColorTexture={index:this.addTexture(e.colorTexture)}),s.isSome(e.normalTexture)&&(i.normalTexture={index:this.addTexture(e.normalTexture)}),e instanceof o){if(s.isSome(e.emissiveTexture)&&(i.emissiveTexture={index:this.addTexture(e.emissiveTexture)}),s.isSome(e.emissiveColor)){const t=a(e.emissiveColor);i.emissiveFactor=[t[0],t[1],t[2]]}s.isSome(e.occlusionTexture)&&(i.occlusionTexture={index:this.addTexture(e.occlusionTexture)}),s.isSome(e.metallicRoughnessTexture)&&(i.pbrMetallicRoughness.metallicRoughnessTexture={index:this.addTexture(e.metallicRoughnessTexture)}),i.pbrMetallicRoughness.metallicFactor=e.metallic,i.pbrMetallicRoughness.roughnessFactor=e.roughness}else i.pbrMetallicRoughness.metallicFactor=1,i.pbrMetallicRoughness.roughnessFactor=1;const n=this.gltf.materials.length;return this.gltf.materials.push(i),this.materialMap.push(e),n},d.addTexture=function(e){return this.gltf.textures||(this.gltf.textures=[]),t.getOrCreateMapValue(this.textureMap,e,(()=>{const t={sampler:this.addSampler(e),source:this.addImage(e)},s=this.gltf.textures.length;return this.gltf.textures.push(t),s}))},d.addImage=function(e){const t=this.imageMap.get(e);if(null!=t)return t;this.gltf.images||(this.gltf.images=[]);const s={};if(e.url)s.uri=e.url;else{s.extras=e.data;for(let t=0;t<this.gltf.images.length;++t)if(e.data===this.gltf.images[t].extras)return t;switch(this.gltf.extras.options.imageOutputType){case h.ImageOutputType.GLB:{const t=this.gltf.extras.binChunkBuffer.addBufferView(5121,h.AttributeType.SCALAR),i=f.imageToArrayBuffer(e.data).then((({data:e,type:t})=>(s.mimeType=t,e)));t.writeAsync(i).then((()=>{t.finalize()})),s.bufferView=t.index;break}case h.ImageOutputType.DataURI:s.uri=f.imageToDataURI(e.data);break;default:this.gltf.extras.promises.push(f.imageToArrayBuffer(e.data).then((({data:e,type:t})=>{s.uri=e,s.mimeType=t})))}}const i=this.gltf.images.length;return this.gltf.images.push(s),this.imageMap.set(e,i),i},d.addSampler=function(e){this.gltf.samplers||(this.gltf.samplers=[]);let t=10497,s=10497;if("string"==typeof e.wrap)switch(e.wrap){case"clamp":t=33071,s=33071;break;case"mirror":t=33648,s=33648}else{switch(e.wrap.vertical){case"clamp":s=33071;break;case"mirror":s=33648}switch(e.wrap.horizontal){case"clamp":t=33071;break;case"mirror":t=33648}}const i={wrapS:t,wrapT:s};for(let a=0;a<this.gltf.samplers.length;++a)if(JSON.stringify(i)===JSON.stringify(this.gltf.samplers[a]))return a;const r=this.gltf.samplers.length;return this.gltf.samplers.push(i),r},d.addAccessor=function(e,t){this.gltf.accessors||(this.gltf.accessors=[]);const s={bufferView:e,byteOffset:t.byteOffset,componentType:t.componentType,count:t.count,type:t.type,min:t.min,max:t.max,name:t.name};t.normalized&&(s.normalized=!0);const i=this.gltf.accessors.length;return this.gltf.accessors.push(s),i},d.addMeshVertexIndexed=function(e,t,s,i,r,a,n,o){for(const u of t){e.startAccessor("INDICES");for(let s=0;s<u.faces.length;++s)e.push(u.faces[s]);const t=e.endAccessor(),l={attributes:{POSITION:i},indices:this.addAccessor(e.index,t),material:this.addMaterial(u.material)};r&&"flat"!==u.shading&&(l.attributes.NORMAL=r),a&&(l.attributes.TEXCOORD_0=a),n&&"flat"!==u.shading&&(l.attributes.TANGENT=n),o&&(l.attributes.COLOR_0=o),s.primitives.push(l)}},d.addMeshVertexNonIndexed=function(e,t,s,i,r,a,n){const o={attributes:{POSITION:s}};i&&(o.attributes.NORMAL=i),r&&(o.attributes.TEXCOORD_0=r),a&&(o.attributes.TANGENT=a),n&&(o.attributes.COLOR_0=n),e&&(o.material=this.addMaterial(e[0].material)),t.primitives.push(o)},e}();e.GLTF=d,Object.defineProperty(e,"__esModule",{value:!0})}));
