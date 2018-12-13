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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions"],function(e,t,o,a){var r={};return r.applyBackgroundImageFromSettings=function(r,s,i){if(i=i||{},r.__bgImage&&t.destroy(r.__bgImage),delete r.__bgImage,!s||!s.data)return!1;var n=t.create("div",{class:"esriGEAbsoluteStretched"},r,"first"),c=t.create("div",{style:"background-repeat: no-repeat; background-size: cover;"},n);if(function(e){e.style.backgroundImage="url("+s.data+")",s.opacity>0&&s.opacity<1&&(e.style.opacity=s.opacity),e.style.backgroundPosition=s.position||"center",e.style.backgroundRepeat=s.repeat?"repeat":"no-repeat",s.scale?e.style.backgroundSize=s.repeat?"contain":"cover":e.style.backgroundSize=s.size||"auto"}(c),i.documentOptions&&i.pos){var d=a.getPageBox(i.documentOptions),p=i.zoom||1;n.style.overflow="hidden",o.set(c,{position:"absolute",width:d.w+"px",height:d.h+"px",left:-i.pos.x/p+"px",top:-i.pos.y/p+"px"})}else e.add(c,"esriGEAbsoluteStretched");return r.__bgImage=n,r.__bgImage},r});