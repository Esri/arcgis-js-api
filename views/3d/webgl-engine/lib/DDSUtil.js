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

define(["require","exports","../../../../core/Logger","../../../../core/mathUtils","../../../webgl/Texture"],function(e,r,t,n,o){function a(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function i(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}function u(e,r,t,a){var u=new Int32Array(t,0,v);if(u[C]!==d)return s.error("Invalid magic number in DDS header"),null;if(!(u[M]&l))return s.error("Unsupported format, must contain a FourCC code"),null;var y,S,k=u[U];switch(k){case h:y=8,S=p;break;case w:y=16,S=m;break;case g:y=16,S=f;break;default:return s.error("Unsupported FourCC code:",i(k)),null}var F=1,I=u[T],O=u[D];0==(3&I)&&0==(3&O)||(s.warn("Rounding up compressed texture size to nearest multiple of 4."),I=I+3&-4,O=O+3&-4),r.width=I,r.height=O,u[x]&c&&!1!==a&&(F=Math.max(1,u[A])),1===F||n.isPowerOfTwo(I)&&n.isPowerOfTwo(O)||(s.warn("Ignoring mipmaps of non power of two sized compressed texture."),F=1);for(var P,X,z=u[b]+4,L=[],_=0;_<F;++_)X=(I+3>>2)*(O+3>>2)*y,P=new Uint8Array(t,z,X),L.push(P),z+=X,I=Math.max(1,I>>1),O=Math.max(1,O>>1);r.samplingMode=F>1?9987:9729,r.hasMipmap=F>1,r.internalFormat=S;var j=new o(e,r,{type:"compressed",levels:L});return e.bindTexture(j),j}Object.defineProperty(r,"__esModule",{value:!0});var s=t.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),d=542327876,c=131072,l=4,p=33776,m=33778,f=33779,h=a("DXT1"),w=a("DXT3"),g=a("DXT5"),v=31,C=0,b=1,x=2,D=3,T=4,A=7,M=20,U=21;r.createDDSTexture=u});