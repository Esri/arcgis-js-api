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
// See http://js.arcgis.com/4.6/esri/copyright.txt for details.

define(["require","exports","../../../../../core/tsSupport/assignHelper","dojo/text!./EdgeRendererUtils.xml","../../../support/buffer/glUtil","../../../support/buffer/InterleavedLayout","./edgePreprocessing","../../../../webgl/BufferObject","../../../../webgl/VertexArrayObject"],function(e,t,r,s,i,o,n,a,u){Object.defineProperty(t,"__esModule",{value:!0});var c=o.newLayout().vec2u8("sidenessAtt");t.glVertexLayout=i.glLayout(c);var f=function(){function e(e,t,r){this.rctx=e,this.programRepository=t,this.key=r,this.depthBiasZ=-4e-4,this.depthBiasXY=.5;for(var s=c.createBuffer(4),i=0;i<4;i++)s.sidenessAtt.set(i,0,0===i||3===i?0:1),s.sidenessAtt.set(i,1,0===i||1===i?0:1);this.verticesBufferObject=a.createVertex(this.rctx,35044,s.buffer)}return e.prototype.dispose=function(){for(var e in this.programs){var t=this.programs[e];t&&(this.programRepository.decreaseRefCount(t),this.programs[e]=null)}this.verticesBufferObject&&(this.verticesBufferObject.dispose(),this.verticesBufferObject=null)},e.prototype.createInstance=function(e,s,i){var o=n.extractEdges(s,this.edgeBufferWriters.default.writer,this.edgeBufferWriters.silhouette.writer),c=o.averageEdgeLength,f=null,l=null,d=0;return o.edge.lodInfo.lengths.length>0&&(f=new u(this.rctx,t.attributeLocations,{vertices:t.glVertexLayout,instances:this.edgeBufferWriters.default.glLayout},{vertices:this.verticesBufferObject,instances:a.createVertex(this.rctx,35044,o.edge.instancesData.buffer)}),d+=f.size),o.silhouette.lodInfo.lengths.length>0&&(l=new u(this.rctx,t.attributeLocations,{vertices:t.glVertexLayout,instances:this.edgeBufferWriters.silhouette.glLayout},{vertices:this.verticesBufferObject,instances:a.createVertex(this.rctx,35044,o.silhouette.instancesData.buffer)}),d+=l.size),r({},e,{edgeVAO:f,silhouetteVAO:l,material:i,averageEdgeLength:c,gpuMemoryUsage:d,edgeLoD:o.edge.lodInfo,silhouetteLoD:o.silhouette.lodInfo})},e.prototype.disposeInstance=function(e){e.edgeVAO&&(e.edgeVAO.vertexBuffers.instances.dispose(),e.edgeVAO.dispose(!1),e.edgeVAO=null),e.silhouetteVAO&&(e.silhouetteVAO.vertexBuffers.instances.dispose(),e.silhouetteVAO.dispose(!1),e.silhouetteVAO=null)},e.prototype.addProgram=function(e,t){this.programs||(this.programs={}),this.programs[e]=t,this.programRepository.increaseRefCount(t)},e.loadShaders=function(e,t,r){e.EdgeRendererUtils_readComponentColor||e._parse(s)},e}();t.EdgeRenderer=f,t.attributeLocations={position0:0,componentIndex:1,position1:2,packedAttributes:3,normalA:4,normalB:5,normal:6,variantOffset:7,variantStroke:8,variantExtension:9,extensionDirection:10,sidenessAtt:11},t.componentColorBindParameters={tex:"uComponentColorTex",invDim:"uComponentColorTexInvDim",unit:2},t.default=f});