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

define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-attr","dojo/dom-construct","dojo/dom-geometry","dojo/dom-style","./coreUtils/GridDataUtil"],function(e,o,t,r,i,l,a){return e(null,{numLocatorTablesInPreview:15,_locatorTablePreviewExtraHeight:0,_locatorPreviewNodes:null,getLocatorTablePreviewExtraHeight:function(){return this._locatorTablePreviewExtraHeight},_updatePreviewLocatorTables:function(e){var i=this;if(this._locatorPreviewNodes=this._locatorPreviewNodes||[],this._locatorPreviewNodes.forEach(function(e){r.destroy(e)}),this._locatorPreviewNodes.length=0,this._locatorTablePreviewExtraHeight=0,e){for(var n=this.getFieldCells(),c=0;c<this.numLocatorTablesInPreview;c++)!function(e){function c(e){if(t.set(e,"id",""),t.set(e,"widgetid",""),e.children)for(var o=0;o<e.children.length;o++)c(e.children[o])}i._locatorTablePreviewExtraHeight+=i.mainNode.clientHeight;for(var d=0;d<i.mainNode.children.length;d++){var s=i.mainNode.children[d],h=r.toDom(s.outerHTML);if(i._alternatingStyle&&e%2==0){var g=i.viewModel.getTableDefaultStyles(i.theme,i._alternatingStyle),v=a.getCellStyle(n[d]),u=o.mixin({},g,v);u.color&&(h.style.color=u.color),u.backgroundColor&&(h.style.backgroundColor=u.backgroundColor)}h.style.position="absolute",h.style.top=l.get(h,"top")+i._locatorTablePreviewExtraHeight+"px",c(h),i._locatorPreviewNodes.push(h)}}(c);this._locatorPreviewNodes.forEach(function(e){r.place(e,i.mainNode)})}}})});