// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/4.4/esri/copyright.txt for details.

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

define(["require","exports","../../../webgl/Texture","../../../webgl/enums"],function(e,r,a,n){function t(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function o(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}function u(e,r,n,t){var u=new Int32Array(n,0,C);if(u[g]!==c)return console.error("Invalid magic number in DDS header"),null;if(!(u[M]&l))return console.error("Unsupported format, must contain a FourCC code"),null;var A,U,X=u[w];switch(X){case f:A=8,U=d;break;case m:A=16,U=s;break;case p:A=16,U=h;break;default:return console.error("Unsupported FourCC code:",o(X)),null}var k=1;u[D]&i&&t!==!1&&(k=Math.max(1,u[x]));var y,I,S=u[b],_=u[T],E=u[v]+4;r.samplingMode=k>1?9987:9729,r.hasMipmap=k>1,r.width=u[b],r.height=u[T];var F=new a(e,r);e.bindTexture(F);for(var j=0;k>j&&(I=Math.floor((S+3)/4)*Math.floor((_+3)/4)*A,y=new Uint8Array(n,E,I)),e.gl.compressedTexImage2D(e.gl.TEXTURE_2D,j,U,S,_,0,y),E+=I,(1!==S||1!==_)&&1!==k;++j)S=Math.max(1,S>>1),_=Math.max(1,_>>1);return F}Object.defineProperty(r,"__esModule",{value:!0});var c=542327876,i=131072,l=4,d=33776,s=33778,h=33779,f=t("DXT1"),m=t("DXT3"),p=t("DXT5"),C=31,g=0,v=1,D=2,T=3,b=4,x=7,M=20,w=21;r.createDDSTexture=u});