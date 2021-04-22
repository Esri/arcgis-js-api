/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.19/esri/copyright.txt for details.
*/
define(["exports","../../../../core/has","../../../../core/typedArrayUtil","../../../../core/maybe","../../../../core/Error","../../../../core/arrayUtils","../../../../core/promiseUtils","../../../../geometry/SpatialReference","../../../../geometry/support/webMercatorUtils","../../../../request","../../../../chunks/vec3","../../../../geometry/projectionEllipsoid","../../../../chunks/mat4","../../../../geometry/support/aaBoundingRect","../../../../geometry/projection","../../../../tasks/support/Query","../../../../chunks/mat4f64","../../../../chunks/vec4f64","../../../../chunks/quat","../../../../geometry/support/aaBoundingBox","../support/edgeUtils","../../webgl-engine/lib/Texture","../support/symbolColorUtils","../../../../chunks/quatf32","../../support/orientedBoundingBox","./I3SBinaryReader","./I3SProjectionUtil"],(function(e,t,r,n,o,a,i,s,c,l,u,f,p,h,d,m,y,g,b,w,S,x,M,v,T,k,C){"use strict";function I(e){return e&&parseInt(e.substring(e.lastIndexOf("/")+1,e.length),10)}function P(e){const r=e._stage.renderView.has(1),n=e._stage.renderView.has(0),o=t("disable-feature:i3s-basis")?0:1;return 12|(r?2|o:0)|(n?o:0)}function R(e,t){return e.find((e=>0!=(e.encoding&t)))}function q(e){switch(e){case 1:return x.Texture.BASIS_ENCODING;case 2:return x.Texture.DDS_ENCODING;case 4:return"image/png";case 8:return"image/jpeg";case 16:return"image/ktx";default:return""}}function A(e){if(t("disable-feature:i3s-draco")||!e)return!1;for(const t of e)for(const e of t.geometryBuffers)if("draco"===e.compressedAttributes.encoding)return!0;return!1}function B(e,t,r,n,o,a){o.traverse(r,(r=>{let o=r.mbs;t!==n&&(o=L,d.projectBoundingSphere(r.mbs,n,o,t));const i=V(e,o);return 0!==i&&(a(r,i),!0)}))}function F(e,t,r){let n=0,o=0;for(let a=0;a<t.length&&n<e.length;a++)e[n]===t[a]&&(r(a)&&(e[o]=e[n],o++),n++);e.length=o}function j(e,t,r){let n=0,o=0;for(;n<r.length;){a.binaryIndexOf(e,r[n])>=0===t&&(r[o]=r[n],o++),n++}r.length=o}const W=w.create();function E(e,t){if(0===t.rotationScale[1]&&0===t.rotationScale[2]&&0===t.rotationScale[3]&&0===t.rotationScale[5]&&0===t.rotationScale[6]&&0===t.rotationScale[7])return W[0]=(e[0]-t.position[0])/t.rotationScale[0],W[1]=(e[1]-t.position[1])/t.rotationScale[4],W[2]=(e[2]-t.position[2])/t.rotationScale[8],W[3]=(e[3]-t.position[0])/t.rotationScale[0],W[4]=(e[4]-t.position[1])/t.rotationScale[4],W[5]=(e[5]-t.position[2])/t.rotationScale[8],W}const L=g.create();function V(e,t){const r=t[0],n=t[1],o=t[3],a=e[0]-r,i=r-e[2],s=e[1]-n,c=n-e[3],l=Math.max(a,i,0),u=Math.max(s,c,0),f=l*l+u*u;if(f>o*o)return 0;if(f>0)return 1;return-Math.max(a,i,s,c)>o?3:2}function z(e,t){const r=t[0],n=t[1],o=t[2],a=t[3],i=e[0]-r,s=r-e[3],c=e[1]-n,l=n-e[4],u=e[2]-o,f=o-e[5],p=Math.max(i,s,0),h=Math.max(c,l,0),d=Math.max(u,f,0),m=p*p+h*h+d*d;if(m>a*a)return 0;if(m>0)return 1;return-Math.max(i,s,c,l,u,f)>a?3:2}function G(e,t,r){const n=[],o=r&&r.missingFields,a=r&&r.originalFields;for(const i of e){const e=i.toLowerCase();let r=!1;for(const o of t)if(e===o.name.toLowerCase()){n.push(o.name),r=!0,a&&a.push(i);break}!r&&o&&o.push(i)}return n}async function N(e,t,r,i,s){if(0===t.length)return[];const c=e.attributeStorageInfo;if(n.isSome(e.associatedLayer))try{return await K(e.associatedLayer,t,r,i)}catch(l){if(e.associatedLayer.loaded)throw l}if(c){const l=O(t,r,s);if(n.isNone(l))throw new o("scenelayer:features-not-loaded","Tried to query attributes for unloaded features");const u=e.parsedUrl.path,f=await Promise.all(l.map((e=>_(u,c,e.node,e.indices,i).then((t=>{for(let r=0;r<e.graphics.length;r++){const n=e.graphics[r],o=t[r];if(n.attributes)for(const e in n.attributes)e in o||(o[e]=n.attributes[e]);n.attributes=o}return e.graphics})))));return a.flatten(f)}throw new o("scenelayer:no-attribute-source","This scene layer does not have a source for attributes available")}function O(e,t,r){const n=new Map,o=[],a=r();for(const i of e){const e=i.attributes[t];for(let t=0;t<a.length;t++){const r=a[t],s=r.featureIds.indexOf(e);if(s>=0){let e=n.get(r.node);e||(e={node:r.node,indices:[],graphics:[]},o.push(e),n.set(r.node,e)),e.indices.push(s),e.graphics.push(i);for(let r=t;r>0;r--)a[r]=a[r-1];a[0]=r;break}}}return o}async function K(e,t,r,n){t.sort(((e,t)=>e.attributes[r]-t.attributes[r]));const o=t.map((e=>e.attributes[r])),a=[],i=G(n,e.fields,{originalFields:a}),s=await U(e,o,i);for(let c=0;c<t.length;c++){const e=t[c],r=s[c],n={};if(e.attributes)for(const t in e.attributes)n[t]=e.attributes[t];for(let t=0;t<a.length;t++)n[a[t]]=r[i[t]];e.attributes=n}return t}function U(e,t,r){const n=e.capabilities.query.maxRecordCount;if(null!=n&&t.length>n){const o=a.splitIntoChunks(t,n);return Promise.all(o.map((t=>U(e,t,r)))).then(a.flatten)}const i=new m({objectIds:t,outFields:r,orderByFields:[e.objectIdField]});return e.queryFeatures(i).then((e=>{if(e&&e.features&&e.features.length===t.length)return e.features.map((e=>e.attributes));throw new o("scenelayer:feature-not-in-associated-layer","Feature not found in associated feature layer")}))}function _(e,t,r,n,o){const a=[];for(const i of t)if(i&&-1!==o.indexOf(i.name)){const t=`${e}/nodes/${r.resources.attributes}/attributes/${i.key}/0`;a.push({url:t,storageInfo:i})}return i.eachAlways(a.map((e=>l(e.url,{responseType:"array-buffer"}).then((t=>k.readBinaryAttribute(e.storageInfo,t.data)))))).then((e=>{const t=[];for(const r of n){const n={};for(let t=0;t<e.length;t++)null!=e[t].value&&(n[a[t].storageInfo.name]=$(e[t].value,r));t.push(n)}return t}))}const D=-32768,Q=-(2**31);function $(e,t){if(!e)return null;const n=e[t];if(r.isInt16Array(e))return n===D?null:n;if(r.isInt32Array(e))return n===Q?null:n;return n!=n?null:n}function Z(e){const t=e.store.indexCRS||e.store.geographicCRS,r=void 0===t?e.store.indexWKT:void 0;if(r){if(!e.spatialReference)throw new o("layerview:no-store-spatial-reference-wkt-index-and-no-layer-spatial-reference","Found indeWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new o("layerview:store-spatial-reference-wkt-index-incompatible","The indeWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const n=t?new s(I(t)):e.spatialReference;return n.equals(e.spatialReference)?e.spatialReference:n}function H(e){const t=e.store.vertexCRS||e.store.projectedCRS,r=void 0===t?e.store.vertexWKT:void 0;if(r){if(!e.spatialReference)throw new o("layerview:no-store-spatial-reference-wkt-vertex-and-no-layer-spatial-reference","Found vertexWKT in the scene layer store but no layer spatial reference",{});if(r!==e.spatialReference.wkt)throw new o("layerview:store-spatial-reference-wkt-vertex-incompatible","The vertexWKT of the scene layer store does not match the WKT of the layer spatial reference",{})}const n=t?new s(I(t)):e.spatialReference;return n.equals(e.spatialReference)?e.spatialReference:n}function J(e,t){return n.isNone(t)?"@null":t===f.getSphericalPCPF(t)?"@ECEF":e.equals(t)?"":null!=t.wkid?"@"+t.wkid:null}function X(e,t,r){if(!c.canProject(e,t))throw new o("layerview:spatial-reference-incompatible","The spatial reference of this scene layer is incompatible with the spatial reference of the view",{});if("local"===r&&e.isGeographic)throw new o("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",{})}function Y(e,t,r){const n=Z(e),o=H(e);X(n,t,r),X(o,t,r)}function ee(e){return(null==e.geometryType||"triangles"===e.geometryType)&&((null==e.topology||"PerAttributeArray"===e.topology)&&(null!=e.vertexAttributes&&null!=e.vertexAttributes.position))}function te(e){if(null==e.store||null==e.store.defaultGeometrySchema||!ee(e.store.defaultGeometrySchema))throw new o("scenelayer:unsupported-geometry-schema","The geometry schema of this scene layer is not supported.",{url:e.parsedUrl.path})}function re(e,t){Y(e,t.spatialReference,t.viewingMode)}function ne(e){return null!=e.geometryType&&"points"===e.geometryType&&((null==e.topology||"PerAttributeArray"===e.topology)&&((null==e.encoding||""===e.encoding||"lepcc-xyz"===e.encoding)&&(null!=e.vertexAttributes&&null!=e.vertexAttributes.position)))}function oe(e){if(null==e.store||null==e.store.defaultGeometrySchema||!ne(e.store.defaultGeometrySchema))throw new o("pointcloud:unsupported-geometry-schema","The geometry schema of this point cloud scene layer is not supported.",{})}function ae(e,t){X(e.spatialReference,t.spatialReference,t.viewingMode)}function ie(e){return"simple"===e.type||"class-breaks"===e.type||"unique-value"===e.type}function se(e){return"mesh-3d"===e.type}function ce(e){if(null==e||!ie(e))return!0;if(("unique-value"===e.type||"class-breaks"===e.type)&&null==e.defaultSymbol)return!0;const t=e.getSymbols();if(0===t.length)return!0;for(const r of t){if(!se(r)||0===r.symbolLayers.length)return!0;for(const e of r.symbolLayers.items)if("fill"!==e.type||n.isNone(e.material)||n.isNone(e.material.color)||"replace"!==e.material.colorMixMode)return!0}return!1}const le=S.createSolidEdgeMaterial({color:[0,0,0,0],opacity:0});let ue=function(){this.edgeMaterial=null,this.material=null,this.castShadows=!0};function fe(e){const t=new ue;let r=!1,o=!1;for(const a of e.symbolLayers.items)if("fill"===a.type&&a.enabled){const e=a.material,i=a.edges;if(n.isSome(e)&&!r){const o=e.color,i=M.parseColorMixMode(e.colorMixMode);n.isSome(o)?t.material={color:[o.r/255,o.g/255,o.b/255],alpha:o.a,colorMixMode:i}:t.material={color:[1,1,1],alpha:1,colorMixMode:1},t.castShadows=a.castShadows,r=!0}n.isSome(i)&&!o&&(t.edgeMaterial=S.createMaterialFromEdges(i,{}),o=!0)}return t.material||(t.material={color:[1,1,1],alpha:1,colorMixMode:1}),t}function pe(e,t){return(0|e)+(0|t)|0}function he(e,t,r,n,o=0){n===f.getSphericalPCPF(n)?t.isGeographic?me(e,r,t,o):de(e,r,t,o):e===r?(r.center[2]+=o,d.projectBuffer(r.center,t,0,r.center,n,0,1)):(u.set(r.center,e.center[0],e.center[1],e.center[2]+o),d.projectBuffer(r.center,t,0,r.center,n,0,1),b.copy(r.quaternion,e.quaternion),u.copy(r.halfSize,e.halfSize))}function de(e,t,r,n){T.corners(e,we),u.set(t.center,e.center[0],e.center[1],e.center[2]+n),d.computeLinearTransformation(r,t.center,ge,f.getSphericalPCPF(r)),u.set(t.center,ge[12],ge[13],ge[14]);const o=2*Math.sqrt(1+ge[0]+ge[5]+ge[10]);be[0]=(ge[6]-ge[9])/o,be[1]=(ge[8]-ge[2])/o,be[2]=(ge[1]-ge[4])/o,be[3]=.25*o,b.multiply(t.quaternion,be,e.quaternion),b.conjugate(be,t.quaternion);let a=0,i=0,s=0;for(const c of we)c[2]+=n,d.projectBuffer(c,r,0,c,f.getSphericalPCPF(r),0,1),u.sub(ve,c,t.center),u.transformQuat(ve,ve,be),a=Math.max(a,Math.abs(ve[0])),i=Math.max(i,Math.abs(ve[1])),s=Math.max(s,Math.abs(ve[2]));u.set(t.halfSize,a,i,s)}function me(e,t,r,n){const o=f.getReferenceEllipsoid(r),a=1+Math.max(0,n)/(o.radius+e.center[2]);u.set(t.center,e.center[0],e.center[1],e.center[2]+n),d.projectBuffer(t.center,r,0,t.center,f.getSphericalPCPF(r),0,1),b.copy(t.quaternion,e.quaternion),b.conjugate(be,e.quaternion),u.set(ve,0,0,1),u.transformQuat(ve,ve,be),u.set(ve,e.halfSize[0]*Math.abs(ve[0]),e.halfSize[1]*Math.abs(ve[1]),e.halfSize[2]*Math.abs(ve[2])),u.scale(ve,ve,o.inverseFlattening),u.add(t.halfSize,e.halfSize,ve),u.scale(t.halfSize,t.halfSize,a)}function ye(e,t,r,o,a,i){if(!i||0===i.length||n.isNone(t))return null;const s=C.computeGlobalTransformation(e.mbs,a,r,t);let c;p.invert(ke,s);const l=()=>{if(!c)if(c=we,h.empty(xe),n.isSome(e.serviceObb)){he(e.serviceObb,r,Me,t,a),T.corners(Me,c);for(const e of c)u.transformMat4(e,e,ke),h.expandPointInPlace(xe,e)}else{const n=e.mbs,o=n[3];d.projectVectorToVector(n,r,ve,t),u.transformMat4(ve,ve,ke),ve[2]+=a;for(let e=0;e<8;++e){const t=1&e?o:-o,r=2&e?o:-o,n=4&e?o:-o,a=c[e];u.copy(a,[ve[0]+t,ve[1]+r,ve[2]+n]),h.expandPointInPlace(xe,a)}}};let f=1/0,m=-1/0;const y=e=>{if("replace"!==e.type)return;const r=e.geometry;if(!r.hasZ)return;h.empty(Se);const n=r.spatialReference||o,a=r.rings.reduce(((e,r)=>r.reduce(((e,r)=>(d.projectVectorToVector(r,n,ve,t),u.transformMat4(ve,ve,ke),h.expandPointInPlace(Se,ve),Math.min(ve[2],e))),e)),1/0);l(),h.intersects(xe,Se)&&(f=Math.min(f,a),m=Math.max(m,a))};if(i.forEach((e=>y(e))),f===1/0)return null;const g=(e,t,r)=>{u.transformMat4(ve,r,s),e[t+0]=ve[0],e[t+1]=ve[1],e[t+2]=ve[2],t+=24,r[2]=f,u.transformMat4(ve,r,s),e[t+0]=ve[0],e[t+1]=ve[1],e[t+2]=ve[2],t+=24,r[2]=m,u.transformMat4(ve,r,s),e[t+0]=ve[0],e[t+1]=ve[1],e[t+2]=ve[2]};for(let n=0;n<8;++n)g(Te.data,3*n,c[n]);return T.compute(Te)}const ge=y.create(),be=v.create(),we=[[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0],[0,0,0]],Se=h.create(),xe=h.create(),Me=T.create(),ve=[0,0,0],Te={data:new Array(72),size:3},ke=y.create();e.SymbolInfo=ue,e.addWraparound=pe,e.checkPointCloudLayerCompatibleWithView=ae,e.checkPointCloudLayerValid=oe,e.checkSceneLayerCompatibleWithView=re,e.checkSceneLayerValid=te,e.checkSpatialReference=X,e.checkSpatialReferences=Y,e.computeVisibilityObb=ye,e.containsDraco=A,e.encodingToMimeType=q,e.extractWkid=I,e.filterInPlace=F,e.findFieldsCaseInsensitive=G,e.findIntersectingNodes=B,e.getCacheKeySuffix=J,e.getCachedAttributeValue=$,e.getClipAABB=E,e.getIndexCrs=Z,e.getSupportedEncodings=P,e.getSymbolInfo=fe,e.getVertexCrs=H,e.intersectBoundingBoxWithMbs=z,e.intersectBoundingRectWithMbs=V,e.objectIdFilter=j,e.rendererNeedsTextures=ce,e.selectEncoding=R,e.transformObb=he,e.transparentEdgeMaterial=le,e.whenGraphicAttributes=N,Object.defineProperty(e,"__esModule",{value:!0})}));
