// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

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

define(["require","exports","../../../webgl/Texture","../../../webgl/enums"],function(r,e,a,n){function t(r){return r.charCodeAt(0)+(r.charCodeAt(1)<<8)+(r.charCodeAt(2)<<16)+(r.charCodeAt(3)<<24)}function o(r){return String.fromCharCode(255&r,r>>8&255,r>>16&255,r>>24&255)}function u(r,e,n,t){var u=new Int32Array(n,0,g);if(u[p]!==c)return console.error("Invalid magic number in DDS header"),null;if(!(u[w]&l))return console.error("Unsupported format, must contain a FourCC code"),null;var A,U,X=u[M];switch(X){case f:A=8,U=d;break;case m:A=16,U=h;break;case C:A=16,U=s;break;default:return console.error("Unsupported FourCC code:",o(X)),null}var k=1;u[T]&i&&t!==!1&&(k=Math.max(1,u[b]));var I,S,y=u[x],E=u[v],F=u[D]+4;e.samplingMode=k>1?9987:9729,e.hasMipmap=k>1,e.width=u[x],e.height=u[v];var q=new a(r,e);r.bindTexture(q);for(var R=0;k>R&&(S=Math.floor((y+3)/4)*Math.floor((E+3)/4)*A,I=new Uint8Array(n,F,S)),r.gl.compressedTexImage2D(r.gl.TEXTURE_2D,R,U,y,E,0,I),F+=S,(1!==y||1!==E)&&1!==k;++R)y=Math.max(1,y>>1),E=Math.max(1,E>>1);return q}var c=542327876,i=131072,l=4,d=33776,h=33778,s=33779,f=t("DXT1"),m=t("DXT3"),C=t("DXT5"),g=31,p=0,D=1,T=2,v=3,x=4,b=7,w=20,M=21;e.createDDSTexture=u});