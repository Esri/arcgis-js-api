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
 * Copyright (C) 2008 Apple Inc. All Rights Reserved.
 *
 * Redistribution and use in source and binary forms, with or without
 * modification, are permitted provided that the following conditions
 * are met:
 * 1. Redistributions of source code must retain the above copyright
 *    notice, this list of conditions and the following disclaimer.
 * 2. Redistributions in binary form must reproduce the above copyright
 *    notice, this list of conditions and the following disclaimer in the
 *    documentation and/or other materials provided with the distribution.
 *
 * THIS SOFTWARE IS PROVIDED BY APPLE INC. ``AS IS'' AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
 * IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR
 * PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL APPLE INC. OR
 * CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 * EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
 * PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
 * PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY
 * OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
 * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
 * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. 
 */

define([],function(){var n=function(n,e,r,t){function u(n){return((c*n+s)*n+o)*n}function a(n){return((p*n+b)*n+l)*n}function i(n){return(3*c*n+2*s)*n+o}function f(n,e){var r,t,a,f,o,s;for(e=null==e?1e-6:e,a=n,s=0;8>s;s++){if(f=u(a)-n,Math.abs(f)<e)return a;if(o=i(a),Math.abs(o)<1e-6)break;a-=f/o}if(r=0,t=1,a=n,r>a)return r;if(a>t)return t;for(;t>r;){if(f=u(a),Math.abs(f-n)<e)return a;n>f?r=a:t=a,a=.5*(t-r)+r}return a}var o=3*n,s=3*(r-n)-o,c=1-o-s,l=3*e,b=3*(t-e)-l,p=1-l-b;return function(n,e){return a(f(n,e))}},e=/^cubic-bezier\((.*)\)/;return n.parse=function(r){var t=n[r]||null;if(!t){var u=e.exec(r);if(u){var a=u[1].split(",").map(function(n){return parseFloat(n.trim())});4!==a.length||a.some(function(n){return isNaN(n)})||(t=n.apply(n,a))}}return t},n.ease=n(.25,.1,.25,1),n.linear=n(0,0,1,1),n.easeIn=n["ease-in"]=n(.42,0,1,1),n.easeOut=n["ease-out"]=n(0,0,.58,1),n.easeInOut=n["ease-in-out"]=n(.42,0,.58,1),n});