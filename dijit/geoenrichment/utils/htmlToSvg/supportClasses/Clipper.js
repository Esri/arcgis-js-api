// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.43/esri/copyright.txt for details.

define(["./ElementBuilder"],(function(t){return{_pathId:0,addClipping:function(e,i,h){var r="HTMLtoSVGConverter_clip_path_"+this._pathId++,d={width:e.style.getPaddings().bw,height:e.style.getPaddings().bh,x:e.box.x+e.style.getBorder().l.width,y:e.box.y+e.style.getBorder().t.width,rx:e.style.getBorder().radius,ry:e.style.getBorder().radius};if(h&&(d=this._intersect(d,h.clipParams)),!d)return null;var l=t.buildElement("clipPath",{id:r},t.buildElement("rect",d));return i.push(l),{clipId:r,clipParams:d}},_intersect:function(t,e){return t.x+t.width<e.x?null:t.x>e.x+e.width?null:t.y+t.height<e.y?null:t.y>e.y+e.height?null:{x:t.x<e.x?e.x:t.x,y:t.y<e.y?e.y:t.y,width:t.x<e.x?t.x+t.width-e.x:Math.min(t.width,e.x+e.width-t.x),height:t.y<e.y?t.y+t.height-e.y:Math.min(t.height,e.y+e.height-t.y)}}}}));