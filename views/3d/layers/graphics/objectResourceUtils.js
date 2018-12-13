// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

define(["require","exports","../../../../core/tsSupport/extendsHelper","../../../../core/tsSupport/generatorHelper","../../../../core/tsSupport/awaiterHelper","../../../../core/tsSupport/assignHelper","../../../../core/arrayUtils","../../glTF/DefaultLoadingContext","../../glTF/loader","./wosrLoader"],function(e,r,t,o,s,n,u,a,i,l){function d(e,r){return void 0===r&&(r={}),s(this,void 0,void 0,function(){var t,s,n,u,d,p;return o(this,function(o){switch(o.label){case 0:return t=c(e),"gltf"!==t.fileType?[3,2]:(f(r),s=new a.DefaultLoadingContext(r.streamDataSupplier),[4,i.load(s,t.url,r)]);case 1:return n=o.sent(),u=n.lods[0].boundingBox,null!=t.specifiedLodIndex?(d=Math.min(t.specifiedLodIndex,n.lods.length-1),[2,{lods:[g(n,d)],referenceBoundingBox:u}]):[2,{lods:n.lods.map(function(e,r){return g(n,r)}),referenceBoundingBox:u}];case 2:return[4,l.load(t.url,r)];case 3:return p=o.sent(),[2,{lods:[p],referenceBoundingBox:p.boundingBox}]}})})}function c(e){var r=e.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return{fileType:r?"gltf":"wosr",url:r?r[1]:e,specifiedLodIndex:r&&null!=r[4]?Number(r[4]):null}}function g(e,r){void 0===r&&(r=0);for(var t,o=e.lods[r],s={stageResources:{textures:new Array,materials:new Array,geometries:new Array},pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:o.boundingBox,lodThreshold:o.lodThreshold},n=0,a=o.components;n<a.length;n++){var i=a[n];s.stageResources.geometries.push(i.geometry),s.stageResources.materials.push(i.material),(t=s.stageResources.textures).push.apply(t,i.textures),s.numberOfVertices+=i.geometry.vertexCount}return s.stageResources.geometries=u.unique(s.stageResources.geometries),s.stageResources.materials=u.unique(s.stageResources.materials),s.stageResources.textures=u.unique(s.stageResources.textures),s}function f(e){e.materialParamsMixin=n({textureAlphaCutoff:.1},e.materialParamsMixin)}Object.defineProperty(r,"__esModule",{value:!0}),r.fetch=d});