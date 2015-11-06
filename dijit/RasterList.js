// COPYRIGHT © 2015 Esri
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
// See http://js.arcgis.com/3.15/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/array","dgrid/OnDemandList","dgrid/extensions/DijitRegistry","dgrid/Selection","dojo/_base/lang","dojo/dom-class","dojo/dom-construct"],function(t,e,i,s,r,a,o,n,d,l,c){var h=t([a,o,n],{selectionMode:"single",selection:!0}),u='<div style="height: 300px; width: 250px; background-color: white;"> <div data-dojo-attach-point = "listDiv" style="height: 100%; width: 100%;" class="obliqueRasterList"></div></div>';return t([e,i,s],{templateString:u,showThumbnail:!1,setData:function(t){this.rasterList.set("store",t)},startup:function(){this.inherited(arguments);var t=this;this.rasterList=new h({store:this.store,selectionMode:"single",renderRow:function(e){e=e.attributes||e;var i,s=c.create("div");t.showThumbnail?l.add(s,"esriRasterListThumbnailRow"):l.add(s,"esriRasterListNoThumbnailRow");var a=c.create("div");l.add(a,"esriRasterListInfoTag"),r.forEach(t.fields,function(t){e[t.name]&&t.display&&(i=e[t.name].toFixed&&e[t.name].toString().indexOf(".")>0?e[t.name].toFixed(2):e[t.name],a.innerHTML+="<strong>"+t.alias+": </strong>"+i+"<br/>")});var o=c.create("table"),n=c.create("tr");if(l.add(o,"esriRasterListRowTable"),t.showThumbnail){var d=c.create("img",{className:"esriRasterListThumbnail",src:e.thumbnailUrl}),h=c.create("td");c.place(d,h),c.place(h,n)}var u=c.create("td");return c.place(a,u),c.place(u,n),c.place(n,o),c.place(o,s),e.selected&&t.rasterList.select(t.rasterList.row(e)),s}},this.listDiv),this.rasterList.startup(),this.own(this.rasterList.on(".dgrid-row:click",function(e){var i=t.rasterList.row(e).data;t.emit("raster-select",i)}),this.rasterList.on(".dgrid-row:mouseover",function(e){var i=t.rasterList.row(e).data;t.emit("raster-mouseover",i)}),this.rasterList.on(".dgrid-row:mouseout",function(){t.emit("raster-mouseout")}))}})});