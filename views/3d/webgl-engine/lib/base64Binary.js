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
    Copyright (c) 2011, Daniel Guerrero
    All rights reserved.
    
    Redistribution and use in source and binary forms, with or without
    modification, are permitted provided that the following conditions are met:
    * Redistributions of source code must retain the above copyright
    notice, this list of conditions and the following disclaimer.
    * Redistributions in binary form must reproduce the above copyright
    notice, this list of conditions and the following disclaimer in the
    documentation and/or other materials provided with the distribution.
    * Neither the name of the Daniel Guerrero nor the
    names of its contributors may be used to endorse or promote products
    derived from this software without specific prior written permission.
    
    THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND
    ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED
    WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
    DISCLAIMED. IN NO EVENT SHALL DANIEL GUERRERO BE LIABLE FOR ANY
    DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES
    (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;
    LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND
    ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
    (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
    SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
    */

define(["require","exports"],function(e,r){function n(e){var r=h[e.charAt(e.length-1)],n=h[e.charAt(e.length-2)],t=e.length/4*3;64===r&&t--,64===n&&t--;var a=new ArrayBuffer(t),c=new Uint8Array(a);e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var o=0,f=0;t>f;f+=3){var i=h[e.charAt(o++)],u=h[e.charAt(o++)],A=h[e.charAt(o++)],l=h[e.charAt(o++)],g=i<<2|u>>4,d=(15&u)<<4|A>>2,y=(3&A)<<6|l;c[f]=g,64!==A&&(c[f+1]=d),64!==l&&(c[f+2]=y)}return a}function t(e){return new Float32Array(n(e))}function a(e){return new Uint32Array(n(e))}function c(e){return new Int32Array(n(e))}function o(e){var r;r=e instanceof Uint8Array?e:new Uint8Array(r.buffer,r.byteOffset,r.byteLength);for(var n,t=r.length%3,a="",c=0,o=r.length-t;o>c;c+=3)n=(r[c]<<16)+(r[c+1]<<8)+r[c+2],a+=f[n>>18&63]+f[n>>12&63]+f[n>>6&63]+f[63&n];switch(t){case 1:n=r[r.length-1],a+=f[n>>2],a+=f[n<<4&63],a+="==";break;case 2:n=(r[r.length-2]<<8)+r[r.length-1],a+=f[n>>10],a+=f[n>>4&63],a+=f[n<<2&63],a+="="}return a}for(var f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",h={},i=0;i<f.length;i++)h[f[i]]=i;r.decode=n,r.decodeFloat32=t,r.decodeUint32=a,r.decodeInt32=c,r.encode=o});