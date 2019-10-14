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
// See http://js.arcgis.com/3.30/esri/copyright.txt for details.

define([],function(){return{adjustContent:function(e){var n=e.getFieldCells(),l=[];n.forEach(function(e){if(e.valueLabel&&e.valueLabel.innerHTML){var n=l[e.gridData.index]=l[e.gridData.index]||{};n.cells=n.cells||[],n.cells.push(e),n.h=Math.max(n.h||0,e.getHeight()),n.minH=Math.max(n.minH||0,e.valueLabel.clientHeight)}});var a=0,i=0,h=[],t=[];for(var c in l){var r=l[c];if(r.h>r.minH){var f=r.h-r.minH;a+=f,h.push({cells:r.cells,maxHR:f,rowH:r.h})}else if(r.h<r.minH){var o=r.minH-r.h+4;i+=o,t.push({cells:r.cells,hInc:o,rowH:r.h})}}if(i>0){var s=Math.min(1,i/a),H=Math.min(1,a/i);h.forEach(function(n){n.cells.forEach(function(l){e.setCellHeight(l,n.rowH-n.maxHR*s)})}),t.forEach(function(n){n.cells.forEach(function(l){e.setCellHeight(l,n.rowH+n.hInc*H)})})}}}});