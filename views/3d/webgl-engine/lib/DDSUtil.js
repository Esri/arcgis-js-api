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
// See http://js.arcgis.com/4.10/esri/copyright.txt for details.

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

define(["require","exports","../../../webgl/Texture"],function(e,r,a){function t(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function n(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}function o(e,r,t,o){var T=new Int32Array(t,0,p);if(T[C]!==u)return console.error("Invalid magic number in DDS header"),null;if(!(T[w]&i))return console.error("Unsupported format, must contain a FourCC code"),null;var g,y,k=T[A];switch(k){case h:g=8,y=l;break;case f:g=16,y=d;break;case m:g=16,y=s;break;default:return console.error("Unsupported FourCC code:",n(k)),null}var F=1;T[M]&c&&!1!==o&&(F=Math.max(1,T[D]));for(var S,U,X=T[x],I=T[b],_=T[v]+4,j=[],q=0;q<F;++q)U=Math.floor((X+3)/4)*Math.floor((I+3)/4)*g,S=new Uint8Array(t,_,U),j.push(S),_+=U,X=Math.max(1,X>>1),I=Math.max(1,I>>1);r.samplingMode=F>1?9987:9729,r.hasMipmap=F>1,r.width=T[x],r.height=T[b],r.internalFormat=y;var O=new a(e,r,{type:"compressed",levels:j});return e.bindTexture(O),O}Object.defineProperty(r,"__esModule",{value:!0});var u=542327876,c=131072,i=4,l=33776,d=33778,s=33779,h=t("DXT1"),f=t("DXT3"),m=t("DXT5"),p=31,C=0,v=1,M=2,b=3,x=4,D=7,w=20,A=21;r.createDDSTexture=o});