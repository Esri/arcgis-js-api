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
// See http://js.arcgis.com/3.22/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-style","dojox/gfx","dojox/gfx/matrix","esri/dijit/geoenrichment/utils/DomUtil"],function(e,t,o,r,i){var a={};return a.setCircularMask=function(a,s,d,c){var m;if(s&&s.__maskNode&&(e.destroy(s.__maskNode),delete s.__maskNode),a){m=e.create("div"),s.__maskNode=m;var n=t.get(s,"width"),l=t.get(s,"height"),f=Math.min(n,l)/2,g=n/2-f,p=l/2-f,x=o.createSurface(m,n,l),h=x.createImage({x:0,y:0,width:n,height:l,src:d});h.setClip({cx:g+f,cy:p+f,rx:f,ry:f}).applyTransform(r.rotategAt(c||0,n/2,l/2)),h.rawNode.setAttribute("preserveAspectRatio","xMidYMid meet"),e.place(m,s,"after"),t.set(m,{position:"absolute",left:t.get(s,"left")+"px",top:t.get(s,"top")+"px"}),i.hide(s)}else i.show(s);return m},a});