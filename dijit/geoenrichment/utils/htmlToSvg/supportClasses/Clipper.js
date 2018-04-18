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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["./ElementBuilder"],function(t){return{_pathId:0,addClipping:function(i,e,h){var l="HTMLtoSVGConverter_clip_path_"+this._pathId++,r={width:i.style.pw,height:i.style.ph,x:i.box.x+i.style.border.l.width,y:i.box.y+i.style.border.t.width,rx:i.style.borderRadius,ry:i.style.borderRadius};if(h&&(r=this._intersect(r,h.clipParams)),!r)return null;var d=t.buildElement("clipPath",{id:l},t.buildElement("rect",r));return e.push(d),{clipId:l,clipParams:r}},_intersect:function(t,i){return t.x+t.width<i.x?null:t.x>i.x+i.width?null:t.y+t.height<i.y?null:t.y>i.y+i.height?null:{x:t.x<i.x?i.x:t.x,y:t.y<i.y?i.y:t.y,width:t.x<i.x?t.x+t.width-i.x:Math.min(t.width,i.x+i.width-t.x),height:t.y<i.y?t.y+t.height-i.y:Math.min(t.height,i.y+i.height-t.y)}}}});