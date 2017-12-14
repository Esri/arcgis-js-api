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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-geometry","./SiblingsUtil","../_Logger"],function(t,n,e,i){var r={getSpanFlowOffsets:function(t,n){if(!t.innerHTML||!t.innerHTML.trim())return{start:0,end:0};switch(n.style.textAlign){case"center":return{start:0,end:0};case"left":case"start":return this._getSpanFlowOffsetsLeft(t,n);case"right":case"end":return this._getSpanFlowOffsetsRight(t,n)}},_getSpanFlowOffsetsLeft:function(t,r){function s(){a=t.innerHTML,f=e.hideNextSiblings(t)}function o(){t.innerHTML=a,e.showNextSiblings(f)}var a,f;s();var c,g=n.position(t);return t.innerHTML="a",c=n.position(t),g.y!==c.y&&(t.innerHTML=" a",c=n.position(t),g.y!==c.y)?(i.log("ERROR: Can't calculate text flow for text'"+a+"'."),o(),{start:0,end:0}):(o(),{start:g.h===c.h?0:c.x-g.x,end:0})},_getSpanFlowOffsetsRight:function(e,i){var r=t.create("span",{innerHTML:"|"},e,"after"),s=n.position(e),o=n.position(r);return t.destroy(r),{start:0,end:Math.abs(s.y+s.h-(o.y+o.h))>10?0:s.x+s.w-o.x}}};return r});