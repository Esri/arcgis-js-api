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
// See http://js.arcgis.com/3.34/esri/copyright.txt for details.

define(["dojo/string","dojo/text!esri/dijit/geoenrichment/ReportPlayer/themes/images/longArrows/upArrowLong.svg.txt","dojo/text!esri/dijit/geoenrichment/ReportPlayer/themes/images/longArrows/downArrowLong.svg.txt"],(function(t,e,i){var n={createBenchmarkedValue:function(n){var o="<div class='dijitInline' style='font-size:0px;"+(n.nowrap?"white-space:nowrap;":"")+"'>";n.text&&(o+="<div class='dijitInline' style='font-size:"+n.fontSize+"px;'>"+n.text+"</div>");var r=Math.min(n.noTextLimit?100:16,n.fontSize,Math.max(n.noTextLimit?6:10,Math.round(.7*n.fontSize))),s=Math.min(n.noTextLimit?100:15,n.fontSize,Math.max(n.noTextLimit?6:10,Math.round(.6*n.fontSize)));return o+="<div class='dijitInline' style='margin-left:"+(n.text?2:0)+"px;font-size:0px;'>"+t.substitute(n.isGreater?e:i,{fillColor:n.color||"",size:r})+"</div>",o+="<div class='dijitInline' style='margin-left:2px;font-size:"+s+"px;color:"+n.color+"'>"+n.formattedValue+"</div>"}};return n}));