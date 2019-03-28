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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

/**
 * Very loosely based on the original webgl-utils.js, see following copyright notice.
 */

/*
     * Copyright 2010, Google Inc.
     * All rights reserved.
     *
     * Redistribution and use in source and binary forms, with or without
     * modification, are permitted provided that the following conditions are
     * met:
     *
     *   * Redistributions of source code must retain the above copyright
     * notice, this list of conditions and the following disclaimer.
     *   * Redistributions in binary form must reproduce the above
     * copyright notice, this list of conditions and the following disclaimer
     * in the documentation and/or other materials provided with the
     * distribution.
     *   * Neither the name of Google Inc. nor the names of its
     * contributors may be used to endorse or promote products derived from
     * this software without specific prior written permission.
     *
     * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
     * "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
     * LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
     * A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
     * OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
     * SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
     * LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
     * DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
     * THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
     * (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
     * OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
     */

define(["require","exports"],function(e,r){function t(e,r,t){if(void 0===r&&(r={}),!window.WebGLRenderingContext)return o(e,a),null;var i=l(e,r,t);return i||(o(e,n),null)}function l(e,r,t){void 0===r&&(r={});var l;switch(t){case"webgl":l=["webgl","experimental-webgl","webkit-3d","moz-webgl"];break;case"webgl2":l=["webgl2"];break;default:l=["webgl","experimental-webgl","webkit-3d","moz-webgl"]}for(var o=null,a=0,n=l;a<n.length;a++){var i=n[a];try{o=e.getContext(i,r)}catch(e){}if(o)break}return o}function o(e,r){var t=e.parentNode;t&&(t.innerHTML='<table style="background-color: #8CE; width: 100%; height: 100%;"><tr><td align="center"><div style="display: table-cell; vertical-align: middle;"><div style="">'+r+"</div></div></td></tr></table>")}Object.defineProperty(r,"__esModule",{value:!0}),r.createContextOrErrorHTML=t,r.createContext=l;var a='This page requires a browser that supports WebGL.<br/><a href="http://get.webgl.org">Click here to upgrade your browser.</a>',n='It doesn\'t appear your computer can support WebGL.<br/><a href="http://get.webgl.org/troubleshooting/">Click here for more information.</a>'});