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

define(["dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions"],function(e,t,o,a){var r={};return r.applyBackgroundImageFromSettings=function(r,s,n){if(n=n||{},r.__bgImage&&t.destroy(r.__bgImage),delete r.__bgImage,!s||!s.data)return!1;var i=t.create("div",{class:"esriGEAbsoluteStretched"},r,"first"),c=t.create("div",{style:"background-repeat: no-repeat; background-size: cover;"},i);if(function(e){e.style.backgroundPosition=s.position||"center",e.style.backgroundImage="url("+s.data+")",e.style.backgroundRepeat=s.repeat?"repeat":"no-repeat",s.opacity>0&&s.opacity<1&&(e.style.opacity=s.opacity),s.scale?e.style.backgroundSize=s.repeat?"contain":"cover":e.style.backgroundSize="auto"}(c),n.documentOptions&&n.pos){var d=a.getPageBox(n.documentOptions),p=n.zoom||1;i.style.overflow="hidden",o.set(c,{position:"absolute",width:d.w+"px",height:d.h+"px",left:-n.pos.x/p+"px",top:-n.pos.y/p+"px"})}else e.add(c,"esriGEAbsoluteStretched");return r.__bgImage=i,r.__bgImage},r});