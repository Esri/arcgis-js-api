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
// See http://js.arcgis.com/4.17/esri/copyright.txt for details.

define(["require","exports","tslib","../../../../../core/maybe","../../../../../core/typedArrayUtil","../../../../../geometry/support/meshUtils/deduplicate","../../../support/meshProcessing","../../../support/buffer/workerHelper","./bufferLayouts","./edgeBufferWriters","./edgePreprocessing"],(function(e,t,r,n,i,a,s,u,o,f,p){"use strict";return function(){function e(){this.regularWriter=new f.RegularEdgeBufferWriter,this.silhouetteWriter=new f.SilhouetteEdgeBufferWriter}return e.prototype.process=function(e,t){return r.__awaiter(this,void 0,void 0,(function(){var i,a,s;return r.__generator(this,(function(r){switch(r.label){case 0:return n.isNone(t)?[2,this.work(e)]:(i=new Array,a=this.packInput(e,i),[4,t.invoke("wrappedWork",a,{transferList:i})]);case 1:return s=r.sent(),[2,this.unpackOutput(s)]}}))}))},e.prototype.wrappedWork=function(e){return r.__awaiter(this,void 0,void 0,(function(){var t,n,i;return r.__generator(this,(function(r){return t=this.unpackInput(e),n=this.work(t),i=new Array,this.packInputTransferables(t,i),[2,{result:this.packOutput(n,i),transferList:i}]}))}))},e.prototype.work=function(e){var t=this.extractEdgeInformation(e.data,e.skipDeduplicate,e.originalIndices);return this.regularWriter.updateSettings(e.writerSettings),this.silhouetteWriter.updateSettings(e.writerSettings),p.extractEdges(t,this.regularWriter,this.silhouetteWriter)},e.prototype.packInputTransferables=function(e,t){t.push(e.data.buffer)},e.prototype.packInput=function(e,t){this.packInputTransferables(e,t);var r={dataBuffer:e.data.buffer,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate};return e.originalIndices&&(r.originalIndicesBuffer=e.originalIndices.buffer,r.originalIndicesType=i.isUint32Array(e.originalIndices)?"Uint32Array":"Uint16Array"),r},e.prototype.unpackInput=function(e){return{data:o.EdgeInputBufferLayout.createView(e.dataBuffer),originalIndices:"Uint32Array"===e.originalIndicesType?new Uint32Array(e.originalIndicesBuffer):"Uint16Array"===e.originalIndicesType?new Uint16Array(e.originalIndicesBuffer):void 0,writerSettings:e.writerSettings,skipDeduplicate:e.skipDeduplicate}},e.prototype.packOutput=function(e,t){return t.push(e.regular.lodInfo.lengths.buffer),t.push(e.silhouette.lodInfo.lengths.buffer),{regular:{instancesData:u.packInterleavedBuffer(e.regular.instancesData,t),lodInfo:{lengths:e.regular.lodInfo.lengths.buffer}},silhouette:{instancesData:u.packInterleavedBuffer(e.silhouette.instancesData,t),lodInfo:{lengths:e.silhouette.lodInfo.lengths.buffer}},averageEdgeLength:e.averageEdgeLength}},e.prototype.unpackOutput=function(e){return{regular:{instancesData:u.unpackInterleavedBuffer(e.regular.instancesData),lodInfo:{lengths:new Float32Array(e.regular.lodInfo.lengths)}},silhouette:{instancesData:u.unpackInterleavedBuffer(e.silhouette.instancesData),lodInfo:{lengths:new Float32Array(e.silhouette.lodInfo.lengths)}},averageEdgeLength:e.averageEdgeLength}},e.prototype.extractEdgeInformation=function(e,t,r){if(t&&r)return{faces:r,neighbors:i=s.computeNeighbors(r,e.count),vertices:e};var n=a.default(e.buffer,e.stride/4,{originalIndices:r}),i=s.computeNeighbors(n.indices,n.uniqueCount);return{faces:n.indices,neighbors:i,vertices:o.EdgeInputBufferLayout.createView(n.buffer)}},e}()}));