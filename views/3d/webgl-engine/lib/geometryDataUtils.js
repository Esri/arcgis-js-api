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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports"],function(e,r){function n(e){if(e>u||null==f){for(;e>u;)u*=2;f=new Uint32Array(u);for(var r=0;r<u;r++)f[r]=r}return new Uint32Array(f.buffer,0,e)}function t(){return a++}Object.defineProperty(r,"__esModule",{value:!0});var u=1,f=null;r.generateDefaultIndexArray=n;var a=0;r.getNewId=t});