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

define(["dojo/dom-geometry","../ReportContainerGrid","../../../ReportPlayer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(e,n,o,r,t){var i={};return i.getElementPageInfo=function(o){function t(n,o){var r=e.position(n.domNode),t=e.position(o.domNode);C.x+=r.x-t.x,C.y+=r.y-t.y}function a(e){if(!s){var n=e.getFullStyle().backgroundColor;n&&!r.isTransparent(n)&&(s=n)}}function d(e){if(e){e.parentGridCell&&a(e.parentGridCell);var r=e.parentWidget;if(!r)return void(e.parentElementInPageInfo&&(l=e.parentElementInPageInfo.reportContainer,s=s||e.parentElementInPageInfo.panelBackgroundColor,C.x+=e.parentElementInPageInfo.pos.x,C.y+=e.parentElementInPageInfo.pos.y));if(r instanceof n){l=r;var I=i.getNodePositionOnPage(l,e.domNode);if(I){C.x+=I.x,C.y+=I.y,g=I.pageGrid,u=I.gridContainer,p=I.pageIndex;var y=i.getNodePositionOnPage(l,o.domNode);f=y.layoutCell,m=y.isBackgroundFloatingPanel,c=y.isForegroundFloatingPanel,P=y.panelIndex}}else t(e,r),d(r)}}if(o&&(o.parentWidget||o.parentGrid)){var l,g,u,p,f,s,m,c,P,C={x:0,y:0};return o.parentGrid&&o.rowId&&o.columnId?(a(o),t(o,o.parentGrid),d(o.parentGrid)):d(o),l?{reportContainer:l,documentOptions:l.documentOptions,pos:C,zoom:l.getZoomInfo().scale,pageGrid:g,gridContainer:u,pageIndex:p,layoutCell:f,panelBackgroundColor:s,isFloatingPanel:m||c,isBackgroundFloatingPanel:m,isForegroundFloatingPanel:c,panelIndex:P}:null}},i.getReportContainerPageNode=function(e){for(;e;){if(e.reportContainerPageNode)return e.reportContainerPageNode;e=e.parentWidget||e.parentGrid}return null},i.getParentReportContainerGrid=function(e){if(e instanceof n)return e;for(;e;){if(e.parentWidget instanceof n)return e.parentWidget;if(e.parentElementInPageInfo)return e.parentElementInPageInfo.reportContainer;e=e.parentWidget||e.parentGrid}return null},i.getParentReportPlayer=function(e){if(e instanceof o)return e;for(;e;){if(e.parentWidget instanceof o)return e.parentWidget;e=e.parentWidget||e.parentGrid}return null},i.getNodePositionOnPage=function(n,o){if(!o)return null;var r,i,a,d,l,g=-1;if(n.getGrids().some(function(e,n){if(e.domNode===o||t.isChildOf(o,e.domNode))return r=e,i=n,e.getFieldCells().some(function(e,n){if(e.domNode===o||t.isChildOf(o,e.domNode))return g=n,l=e,!0}),-1===g&&e.getBackgroundFloatingCells().some(function(e,n){if(e.domNode===o||t.isChildOf(o,e.domNode))return g=n,a=!0,l=e,!0}),-1===g&&e.getForegroundFloatingCells().some(function(e,n){if(e.domNode===o||t.isChildOf(o,e.domNode))return g=n,d=!0,l=e,!0}),!0}),!r)return null;var u=n.getGridContainer(r),p=e.position(u),f=e.position(o);return{x:f.x-p.x,y:f.y-p.y,pageGrid:r,gridContainer:u,pageIndex:i,layoutCell:l,isFloatingPanel:a||d,isBackgroundFloatingPanel:a,isForegroundFloatingPanel:d,panelIndex:g}},i});