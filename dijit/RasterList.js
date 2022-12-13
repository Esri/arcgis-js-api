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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/form/CheckBox","dojo/_base/array","dgrid/OnDemandGrid","dgrid/extensions/DijitRegistry","dgrid/Selection","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","../lang"],(function(e,t,i,s,r,a,o,n,d,l,c,h,m){var u=e([o,n,d],{selectionMode:"single",selection:!0,maxRowsPerPage:2,minRowsPerPage:2,farOffRemoval:500});return e([t,i,s],{templateString:'<div class="esriRasterListDiv"> <div data-dojo-attach-point = "listDiv" style="height: 100%; width: 100%;" class="obliqueRasterList"></div></div>',showThumbnail:!1,setData:function(e){this.rasterList.set("store",e)},clearSelection:function(){this.rasterList.clearSelection()},refresh:function(e){this.rasterList.refresh({keepScrollPosition:e})},startup:function(){this.inherited(arguments);var e=this;this.rasterList=new u({store:this.store,minRowsPerPage:this.minRowsPerpage||5,maxRowsPerPage:this.maxRowsPerPage||6,bufferRows:3,selectionMode:this.selectionMode?this.selectionMode:"single",pagingDelay:this.pagingDelay||15,keepScrollPosition:this.keepScrollPosition,renderRow:function(t){var i;t=t.attributes||t;var s=h.create("div");e.showThumbnail?c.add(s,"esriRasterListThumbnailRow"):c.add(s,"esriRasterListNoThumbnailRow");var o=h.create("div");c.add(o,"esriRasterListInfoTag"),a.forEach(e.fields,(function(e){m.isDefined(t[e.name])&&e.display&&(i=t[e.name].toFixed&&t[e.name].toString().indexOf(".")>0?t[e.name].toFixed(2):t[e.name],o.innerHTML+="<strong>"+e.alias+": </strong>"+i+"<br/>")}));var n=h.create("table"),d=h.create("tr");if(c.add(n,"esriRasterListRowTable"),e.showThumbnail){var l=h.create("img",{className:"esriRasterListThumbnail",src:t.thumbnailUrl}),u=h.create("td");c.add(u,"esriRasterListThumbnailCol"),h.place(l,u),h.place(u,d)}var g=h.create("td");if(h.place(o,g),h.place(g,d),e.showCheckbox){var w=h.create("td");c.add(w,"esriRasterListCheckboxCol");var f=new r({checked:t.selected});h.place(f.domNode,w),h.place(w,d)}return h.place(d,n),h.place(n,s),t.selected&&e.rasterList.select(e.rasterList.row(t)),s}},this.listDiv),this.rasterList.startup(),this.own(this.rasterList.on(".dgrid-row:click",(function(t){var i=e.rasterList.row(t);e.emit("raster-select",i.data),e.emit("raster-row-select",{rasters:[i]})})),this.rasterList.on(".dgrid-row:mouseover",(function(t){var i=e.rasterList.row(t).data;e.emit("raster-mouseover",i)})),this.rasterList.on(".dgrid-row:mouseout",(function(t){e.emit("raster-mouseout")})),this.rasterList.on("dgrid-select",(function(t){e.emit("raster-row-select",{rasters:t.rows})})))}})}));