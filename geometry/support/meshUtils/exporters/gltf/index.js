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

define(["require","exports","../../../../../core/promiseUtils","../../../../Point","./glb","./gltf","./gltftypes","./imageutils","./asset","./scene","./node","./types"],(function(e,t,r,n,u,o,p,a,f,i,c,y){"use strict";function s(e,f,i){f=f||{};var c=new o.GLTF(e,f,i),y=c.params;y?y.origin||(y.origin=new n({x:-1,y:-1,z:-1})):y={origin:new n({x:-1,y:-1,z:-1})};var s=y.origin,l=c.gltf,g=l.extras.promises,O=1,d=1,b=null;return r.eachAlways(g).then((function(){var e={origin:s};delete l.extras;var r="number"==typeof f.jsonSpacing?f.jsonSpacing:4,n=JSON.stringify(l,(function(t,r){if("extras"!==t){if(r instanceof ArrayBuffer){if(a.isArrayBufferPNG(r))switch(f.imageOutputType){case p.ImageOutputType.DataURI:case p.ImageOutputType.GLB:break;case p.ImageOutputType.External:default:var n="img"+d+".png";return d++,e[n]=r,n}switch(f.bufferOutputType){case p.BufferOutputType.DataURI:return a.encodeBase64DataUri(r);case p.BufferOutputType.GLB:if(b)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(b=r);case p.BufferOutputType.External:default:n="data"+O+".bin";return O++,e[n]=r,n}}return r}}),r);return f.bufferOutputType===p.BufferOutputType.GLB||f.imageOutputType===p.ImageOutputType.GLB?e[t.MODEL_NAME_GLB]=new u.GLB(n,b).buffer:e[t.MODEL_NAME_GLTF]=n,e}))}Object.defineProperty(t,"__esModule",{value:!0}),t.exportGLB=t.exportGLTF=t.MODEL_NAME_GLB=t.MODEL_NAME_GLTF=void 0,Object.defineProperty(t,"Asset",{enumerable:!0,get:function(){return f.Asset}}),Object.defineProperty(t,"Scene",{enumerable:!0,get:function(){return i.Scene}}),Object.defineProperty(t,"Node",{enumerable:!0,get:function(){return c.Node}}),Object.defineProperty(t,"AlphaMode",{enumerable:!0,get:function(){return y.AlphaMode}}),Object.defineProperty(t,"DataType",{enumerable:!0,get:function(){return y.DataType}}),Object.defineProperty(t,"BufferOutputType",{enumerable:!0,get:function(){return y.BufferOutputType}}),Object.defineProperty(t,"ImageOutputType",{enumerable:!0,get:function(){return y.ImageOutputType}}),Object.defineProperty(t,"ColorMode",{enumerable:!0,get:function(){return y.ColorMode}}),Object.defineProperty(t,"ComponentType",{enumerable:!0,get:function(){return y.ComponentType}}),Object.defineProperty(t,"FilterMode",{enumerable:!0,get:function(){return y.FilterMode}}),Object.defineProperty(t,"MeshMode",{enumerable:!0,get:function(){return y.MeshMode}}),t.MODEL_NAME_GLTF="model.gltf",t.MODEL_NAME_GLB="model.glb",t.exportGLTF=s,t.exportGLB=function(e,t){return s(e,{bufferOutputType:p.BufferOutputType.GLB,imageOutputType:p.ImageOutputType.GLB,jsonSpacing:0},t)}}));