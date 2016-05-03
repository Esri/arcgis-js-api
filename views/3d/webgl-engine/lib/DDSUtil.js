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
// See http://js.arcgis.com/4.0/esri/copyright.txt for details.

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

define(["require","exports"],function(r,e){function a(r){return r.charCodeAt(0)+(r.charCodeAt(1)<<8)+(r.charCodeAt(2)<<16)+(r.charCodeAt(3)<<24)}function o(r){return String.fromCharCode(255&r,r>>8&255,r>>16&255,r>>24&255)}function n(r,e,a){var n=new Int32Array(e,0,m);if(n[C]!==t)return console.error("Invalid magic number in DDS header"),null;if(!(n[x]&c))return console.error("Unsupported format, must contain a FourCC code"),null;var b,g,w=n[M];switch(w){case l:b=8,g=i;break;case s:b=16,g=d;break;case f:b=16,g=h;break;default:return console.error("Unsupported FourCC code:",o(w)),null}var U=1;n[D]&u&&a!==!1&&(U=Math.max(1,n[T]));for(var X,k,I=n[A],S=n[v],y=n[p]+4,E=0;U>E&&(k=Math.floor((I+3)/4)*Math.floor((S+3)/4)*b,X=new Uint8Array(e,y,k)),r.compressedTexImage2D(r.TEXTURE_2D,E,g,I,S,0,X),y+=k,(1!==I||1!==S)&&1!==U;++E)I=Math.max(1,I>>1),S=Math.max(1,S>>1);return{mipmapCount:U,width:n[A],height:n[v]}}var t=542327876,u=131072,c=4,i=33776,d=33778,h=33779,l=a("DXT1"),s=a("DXT3"),f=a("DXT5"),m=31,C=0,p=1,D=2,v=3,A=4,T=7,x=20,M=21;e.uploadDDSLevels=n});