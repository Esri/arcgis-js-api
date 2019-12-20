// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define(["require","exports","./DefaultVertexAttributeLocations","./DefaultVertexBufferLayouts","../../../webgl/BufferObject","../../../webgl/Texture","../../../webgl/VertexArrayObject"],function(e,t,r,a,o,n,i){function u(e,t,n){void 0===t&&(t=a.Pos2),void 0===n&&(n=r.Default3D);var u=null;switch(t){case a.Pos3Tex:u=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,-1,1,0,0,1,1,1,0,1,1]);break;case a.Pos3:u=new Float32Array([-1,-1,0,1,-1,0,-1,1,0,1,1,0]);break;case a.Pos2Tex:u=new Float32Array([-1,-1,0,0,1,-1,1,0,-1,1,0,1,1,1,1,1]);break;case a.Pos2:default:u=new Float32Array([-1,-1,1,-1,-1,1,1,1])}return new i(e,n,{geometry:t},{geometry:o.createVertex(e,35044,u)})}function l(e,t){return void 0===t&&(t=s),new n(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:t,height:t})}function c(e,t,r){void 0===r&&(r=s);for(var a=new Uint8Array(r*r*4),o=0;o<a.length;o+=4)a[o+0]=255*t[0],a[o+1]=255*t[1],a[o+2]=255*t[2],a[o+3]=255*t[3];return new n(e,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728,width:r,height:r},a)}Object.defineProperty(t,"__esModule",{value:!0}),t.createQuadVAO=u;var s=4;t.createEmptyTexture=l,t.createColorTexture=c});