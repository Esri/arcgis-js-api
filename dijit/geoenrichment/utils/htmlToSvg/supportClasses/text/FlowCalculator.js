// COPYRIGHT © 201 Esri
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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-geometry","./SiblingsUtil"],function(t,n,e){return{getSpanFlowOffsets:function(t,n){if(!t.innerHTML||!t.innerHTML.trim())return{start:0,end:0};switch(n.style.textAlign){case"center":return{start:0,end:0};case"left":case"start":return this._getSpanFlowOffsetsLeft(t,n);case"right":case"end":return this._getSpanFlowOffsetsRight(t,n)}},_getSpanFlowOffsetsLeft:function(t,i){function r(){t.innerHTML=s,e.showNextSiblings(o)}var s,o;!function(){s=t.innerHTML,o=e.hideNextSiblings(t)}();var a,f=n.position(t);return t.innerHTML="a",a=n.position(t),f.y!==a.y&&(t.innerHTML=" a",a=n.position(t),f.y!==a.y)?(console.log("ERROR: Can't calculate text flow for text '"+s+"'."),r(),{start:0,end:0}):(r(),{start:f.h===a.h?0:a.x-f.x,end:0})},_getSpanFlowOffsetsRight:function(e,i){var r=t.create("span",{innerHTML:"|"},e,"after"),s=n.position(e),o=n.position(r);return t.destroy(r),{start:0,end:Math.abs(s.y+s.h-(o.y+o.h))>10?0:s.x+s.w-o.x}}}});