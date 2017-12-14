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

define(["dojo/dom-class","dojo/dom-construct","dojo/dom-style","esri/dijit/geoenrichment/ReportPlayer/core/supportClasses/DocumentOptions"],function(e,t,o,a){var r={};return r.applyBackgroundImageFromSettings=function(r,s,n){function i(e){e.style.backgroundPosition=s.position||"center",e.style.backgroundImage="url("+s.data+")",e.style.backgroundRepeat=s.repeat?"repeat":"no-repeat",s.opacity>0&&s.opacity<1&&(e.style.opacity=s.opacity),s.scale?e.style.backgroundSize=s.repeat?"contain":"cover":e.style.backgroundSize=""}if(n=n||{},r.__bgImage&&t.destroy(r.__bgImage),delete r.__bgImage,!s||!s.data)return!1;var c=t.create("div",{"class":"esriGEAbsoluteStretched"},r,"first"),d=t.create("div",{style:"background-repeat: no-repeat; background-size: cover;"},c);if(i(d),n.documentOptions&&n.pos){var p=a.getPageBox(n.documentOptions),g=n.zoom||1;c.style.overflow="hidden",o.set(d,{position:"absolute",width:p.w+"px",height:p.h+"px",left:-n.pos.x/g+"px",top:-n.pos.y/g+"px"})}else e.add(d,"esriGEAbsoluteStretched");return r.__bgImage=c,r.__bgImage},r});