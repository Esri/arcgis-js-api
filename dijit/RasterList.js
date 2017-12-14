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

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/array","dgrid/OnDemandList","dgrid/extensions/DijitRegistry","dgrid/Selection","dojo/_base/lang","dojo/dom-class","dojo/dom-construct"],function(e,t,i,s,r,a,o,n,d,l,c){var m=e([a,o,n],{selectionMode:"single",selection:!0,maxRowsPerPage:2,minRowsPerPage:2,farOffRemoval:500}),h='<div style="height: 300px; width: 250px; background-color: white;"> <div data-dojo-attach-point = "listDiv" style="height: 100%; width: 100%;" class="obliqueRasterList"></div></div>';return e([t,i,s],{templateString:h,showThumbnail:!1,setData:function(e){this.rasterList.set("store",e)},clearSelection:function(){this.rasterList.clearSelection()},startup:function(){this.inherited(arguments);var e=this;this.rasterList=new m({store:this.store,minRowsPerPage:5,maxRowsPerPage:6,bufferRows:3,selectionMode:"single",renderRow:function(t){t=t.attributes||t;var i,s=c.create("div");e.showThumbnail?l.add(s,"esriRasterListThumbnailRow"):l.add(s,"esriRasterListNoThumbnailRow");var a=c.create("div");l.add(a,"esriRasterListInfoTag"),r.forEach(e.fields,function(e){t[e.name]&&e.display&&(i=t[e.name].toFixed&&t[e.name].toString().indexOf(".")>0?t[e.name].toFixed(2):t[e.name],a.innerHTML+="<strong>"+e.alias+": </strong>"+i+"<br/>")});var o=c.create("table"),n=c.create("tr");if(l.add(o,"esriRasterListRowTable"),e.showThumbnail){var d=c.create("img",{className:"esriRasterListThumbnail",src:t.thumbnailUrl}),m=c.create("td");c.place(d,m),c.place(m,n)}var h=c.create("td");return c.place(a,h),c.place(h,n),c.place(n,o),c.place(o,s),t.selected&&e.rasterList.select(e.rasterList.row(t)),s}},this.listDiv),this.rasterList.startup(),this.own(this.rasterList.on(".dgrid-row:click",function(t){var i=e.rasterList.row(t).data;e.emit("raster-select",i)}),this.rasterList.on(".dgrid-row:mouseover",function(t){var i=e.rasterList.row(t).data;e.emit("raster-mouseover",i)}),this.rasterList.on(".dgrid-row:mouseout",function(t){e.emit("raster-mouseout")}))}})});