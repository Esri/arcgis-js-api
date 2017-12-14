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

define(["dojo/dom-geometry","../ReportContainerGrid","../../../ReportPlayer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(e,n,r,t,o){var i={};return i.getElementPageInfo=function(r){function o(n,r){var t=e.position(n.domNode),o=e.position(r.domNode);u.x+=t.x-o.x,u.y+=t.y-o.y}function a(e){if(!l){var n=e.getFullStyle().backgroundColor;n&&!t.isTransparent(n)&&(l=n)}}function d(e){if(e){e.parentGridCell&&a(e.parentGridCell);var r=e.parentWidget;if(!r)return void(e.parentElementInPageInfo&&(p=e.parentElementInPageInfo.reportContainer,l=l||e.parentElementInPageInfo.panelBackgroundColor,u.x+=e.parentElementInPageInfo.pos.x,u.y+=e.parentElementInPageInfo.pos.y));if(r instanceof n){p=r;var t=i.getNodePositionOnPage(p,e.domNode);return void(t&&(u.x+=t.x,u.y+=t.y,g=t.gridContainer))}o(e,r),d(r)}}if(r&&(r.parentWidget||r.parentGrid)){var p,l,g,u={x:0,y:0};return r.parentGrid&&r.rowId&&r.columnId?(a(r),o(r,r.parentGrid),d(r.parentGrid)):d(r),p?{reportContainer:p,documentOptions:p.documentOptions,pos:u,zoom:p.getZoomInfo().scale,panelBackgroundColor:l,gridContainer:g}:null}},i.getReportContainerPageNode=function(e){for(;e;){if(e.reportContainerPageNode)return e.reportContainerPageNode;e=e.parentWidget}return null},i.getParentReportContainerGrid=function(e){for(;e;){if(e.parentWidget instanceof n)return e.parentWidget;e=e.parentWidget}return null},i.getParentReportPlayer=function(e){for(;e;){if(e.parentWidget instanceof r)return e.parentWidget;e=e.parentWidget}return null},i.getNodePositionOnPage=function(n,r){if(!r)return null;var t;if(n.getGrids().some(function(e){return o.isChildOf(r,e.domNode)||e.domNode===r?void(t=e):void 0}),!t)return null;var i=n.getGridContainer(t),a=e.position(i),d=e.position(r);return{x:d.x-a.x,y:d.y-a.y,gridContainer:i}},i});