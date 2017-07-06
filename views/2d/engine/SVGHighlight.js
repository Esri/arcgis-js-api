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

define(["require","exports","../../../core/tsSupport/extendsHelper","./DisplayObject","./cssUtils"],function(t,e,r,i,u){function n(t,e){var r=document.createElementNS(s,"feColorMatrix");r.setAttribute("in","SourceGraphic"),r.setAttribute("result","OpaqueSource"),r.setAttribute("type","matrix"),r.setAttribute("values","1 0 0 0 0\n                                          0 1 0 0 0\n                                          0 0 1 0 0\n                                          1 1 1 1 0");var i=document.createElementNS(s,"feMorphology");i.setAttribute("in","OpaqueSource"),i.setAttribute("result","DilatedSource"),i.setAttribute("operator","dilate"),i.setAttribute("radius","2");var u=document.createElementNS(s,"feGaussianBlur");u.setAttribute("in","DilatedSource"),u.setAttribute("result","BlurredSource"),u.setAttribute("stdDeviation","2");var n=document.createElementNS(s,"feFlood");n.setAttribute("result","FloodedRect"),n.setAttribute("flood-color","rgba(0, 160, 160, 1)");var o=document.createElementNS(s,"feComposite");o.setAttribute("in","FloodedRect"),o.setAttribute("in2","BlurredSource"),o.setAttribute("operator","in"),o.setAttribute("result","GlowUnderlay");var l=document.createElementNS(s,"feComposite");l.setAttribute("in","GlowUnderlay"),l.setAttribute("in2","OpaqueSource"),l.setAttribute("operator","xor"),l.setAttribute("result","GlowRing");var a=document.createElementNS(s,"filter");return a.id=t,a.setAttribute("filterUnits","userSpaceOnUse"),a.setAttribute("width","200%"),a.setAttribute("height","200%"),a.appendChild(r),a.appendChild(i),a.appendChild(u),a.appendChild(n),a.appendChild(o),a.appendChild(l),a}var s="http://www.w3.org/2000/svg",o=[0,0],l=function(t){function e(){return t.call(this)||this}return r(e,t),e.prototype.createElement=function(){var t=document.createElementNS(s,"svg");t.setAttribute("class","esri-display-object"),t.setAttribute("version","1.1"),t.style.width="800px",t.style.height="600px";var e=n("highlight","rgba(0, 160, 160, 1)"),r=document.createElementNS(s,"defs");r.appendChild(e),t.appendChild(r);var i=document.createElementNS(s,"rect");return i.setAttribute("x","40"),i.setAttribute("y","40"),i.setAttribute("width","200"),i.setAttribute("height","150"),i.setAttribute("fill","red"),i.setAttribute("filter","url(#highlight)"),t.appendChild(i),t},e.prototype.setElement=function(t){this.element=t},e.prototype.doRender=function(t){var e=t.state.toScreen(o,[0,0]);this.element.style.transform=u.cssMatrix3d([1,0,0,1,e[0],e[1]])},e}(i);return l});