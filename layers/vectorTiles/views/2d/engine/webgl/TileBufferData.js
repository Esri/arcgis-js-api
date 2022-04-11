// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.40/esri/copyright.txt for details.

define(["require","exports"],(function(e,r){return function(){function e(){this.geometries=[{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}},{indexBuffer:void 0,vertexBuffer:{}}]}return e.deserialize=function(r){for(var f=new e,t=0;t<5;++t)for(var i in f.geometries[t].indexBuffer=new Uint32Array(r.geometries[t].indexBuffer),f.geometries[t].vertexBuffer={},r.geometries[t].vertexBuffer)f.geometries[t].vertexBuffer[i]={data:new Uint32Array(r.geometries[t].vertexBuffer[i].data),stride:r.geometries[t].vertexBuffer[i].stride};return f},e.prototype.serialize=function(){for(var e={geometries:[{indexBuffer:this.geometries[0].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[1].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[2].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[3].indexBuffer.buffer,vertexBuffer:{}},{indexBuffer:this.geometries[4].indexBuffer.buffer,vertexBuffer:{}}]},r=0;r<5;++r)for(var f in this.geometries[r].vertexBuffer)e.geometries[r].vertexBuffer[f]={data:this.geometries[r].vertexBuffer[f].data.buffer,stride:this.geometries[r].vertexBuffer[f].stride};return e},e.prototype.getBuffers=function(){for(var e=[],r=0;r<5;++r)for(var f in e.push(this.geometries[r].indexBuffer.buffer),this.geometries[r].vertexBuffer)e.push(this.geometries[r].vertexBuffer[f].data.buffer);return e},e}()}));