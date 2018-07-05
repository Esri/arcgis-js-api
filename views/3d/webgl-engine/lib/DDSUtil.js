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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

/*
 * Copyright (c) 2012 Brandon Jones
 *
 * This software is provided 'as-is', without any express or implied
 * warranty. In no event will the authors be held liable for any damages
 * arising from the use of this software.
 *
 * Permission is granted to anyone to use this software for any purpose,
 * including commercial applications, and to alter it and redistribute it
 * freely, subject to the following restrictions:
 *
 *    1. The origin of this software must not be misrepresented; you must not
 *    claim that you wrote the original software. If you use this software
 *    in a product, an acknowledgment in the product documentation would be
 *    appreciated but is not required.
 *
 *    2. Altered source versions must be plainly marked as such, and must not
 *    be misrepresented as being the original software.
 *
 *    3. This notice may not be removed or altered from any source
 *    distribution.
 */

define(["require","exports","../../../webgl/Texture"],function(r,e,a){function t(r){return r.charCodeAt(0)+(r.charCodeAt(1)<<8)+(r.charCodeAt(2)<<16)+(r.charCodeAt(3)<<24)}function n(r){return String.fromCharCode(255&r,r>>8&255,r>>16&255,r>>24&255)}function o(r,e,t,o){var w=new Int32Array(t,0,p);if(w[C]!==u)return console.error("Invalid magic number in DDS header"),null;if(!(w[M]&i))return console.error("Unsupported format, must contain a FourCC code"),null;var A,U,X=w[b];switch(X){case s:A=8,U=d;break;case f:A=16,U=l;break;case m:A=16,U=h;break;default:return console.error("Unsupported FourCC code:",n(X)),null}var k=1;w[D]&c&&!1!==o&&(k=Math.max(1,w[x]));var y,I,S=w[g],_=w[T],E=w[v]+4;e.samplingMode=k>1?9987:9729,e.hasMipmap=k>1,e.width=w[g],e.height=w[T];var F=new a(r,e);r.bindTexture(F);for(var j=0;j<k&&(I=Math.floor((S+3)/4)*Math.floor((_+3)/4)*A,y=new Uint8Array(t,E,I)),r.gl.compressedTexImage2D(r.gl.TEXTURE_2D,j,U,S,_,0,y),E+=I,(1!==S||1!==_)&&1!==k;++j)S=Math.max(1,S>>1),_=Math.max(1,_>>1);return F}Object.defineProperty(e,"__esModule",{value:!0});var u=542327876,c=131072,i=4,d=33776,l=33778,h=33779,s=t("DXT1"),f=t("DXT3"),m=t("DXT5"),p=31,C=0,v=1,D=2,T=3,g=4,x=7,M=20,b=21;e.createDDSTexture=o});