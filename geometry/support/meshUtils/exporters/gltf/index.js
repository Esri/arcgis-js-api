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

define(["require","exports","../../../../../core/promiseUtils","../../../../Point","./glb","./gltf","./gltftypes","./imageutils","./asset","./scene","./node","./types"],(function(e,t,r,u,n,p,a,o,f,i,s,y){function l(e,f,i){f=f||{};var s=new p.GLTF(e,f,i),y=s.params;y?y.origin||(y.origin=new u({x:-1,y:-1,z:-1})):y={origin:new u({x:-1,y:-1,z:-1})};var l=y.origin,g=s.gltf,T=g.extras.promises,O=1,c=1,d=null;return r.eachAlways(T).then((function(){var e={origin:l};delete g.extras;var r="number"==typeof f.jsonSpacing?f.jsonSpacing:4,u=JSON.stringify(g,(function(t,r){if("extras"!==t){if(r instanceof ArrayBuffer){if(o.isArrayBufferPNG(r))switch(f.imageOutputType){case a.ImageOutputType.DataURI:case a.ImageOutputType.GLB:break;case a.ImageOutputType.External:default:var u="img"+c+".png";return c++,e[u]=r,u}switch(f.bufferOutputType){case a.BufferOutputType.DataURI:return o.encodeBase64DataUri(r);case a.BufferOutputType.GLB:if(d)throw new Error("Already encountered an ArrayBuffer, there should only be one in the GLB format.");return void(d=r);case a.BufferOutputType.External:default:u="data"+O+".bin";return O++,e[u]=r,u}}return r}}),r);return f.bufferOutputType===a.BufferOutputType.GLB||f.imageOutputType===a.ImageOutputType.GLB?e[t.MODEL_NAME_GLB]=new n.GLB(u,d).buffer:e[t.MODEL_NAME_GLTF]=u,e}))}Object.defineProperty(t,"__esModule",{value:!0}),t.Asset=f.Asset,t.Scene=i.Scene,t.Node=s.Node,t.AlphaMode=y.AlphaMode,t.DataType=y.DataType,t.BufferOutputType=y.BufferOutputType,t.ImageOutputType=y.ImageOutputType,t.ColorMode=y.ColorMode,t.ComponentType=y.ComponentType,t.FilterMode=y.FilterMode,t.MeshMode=y.MeshMode,t.MODEL_NAME_GLTF="model.gltf",t.MODEL_NAME_GLB="model.glb",t.exportGLTF=l,t.exportGLB=function(e,t){return l(e,{bufferOutputType:a.BufferOutputType.GLB,imageOutputType:a.ImageOutputType.GLB,jsonSpacing:0},t)}}));