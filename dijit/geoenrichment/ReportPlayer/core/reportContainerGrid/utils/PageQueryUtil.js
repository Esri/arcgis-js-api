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
// See http://js.arcgis.com/3.31/esri/copyright.txt for details.

define(["dojo/dom-geometry","../../../ReportPlayer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],function(e,n,r,o){var t={};return t.getElementPageInfo=function(n){function o(n,r){var o=e.position(n.domNode),t=e.position(r.domNode);P.x+=o.x-t.x,P.y+=o.y-t.y}function i(e){if(!f){var n=e.getFullStyle().backgroundColor;n&&!r.isTransparent(n)&&(f=n)}}function a(e){if(e){e.parentGridCell&&i(e.parentGridCell);var r=e.parentWidget;if(!r)return void(e.parentElementInPageInfo&&(d=e.parentElementInPageInfo.reportContainer,f=f||e.parentElementInPageInfo.panelBackgroundColor,P.x+=e.parentElementInPageInfo.pos.x,P.y+=e.parentElementInPageInfo.pos.y));if(r&&r.isReportContainerGrid){d=r;var c=t.getNodePositionOnPage(d,e.domNode);if(c){P.x+=c.x,P.y+=c.y,l=c.pageGrid,g=c.gridContainer,p=c.pageIndex;var I=t.getNodePositionOnPage(d,n.domNode);u=I.layoutCell,s=I.isBackgroundFloatingPanel,m=I.isForegroundFloatingPanel,C=I.panelIndex}}else o(e,r),a(r)}}if(n&&(n.parentWidget||n.parentGrid)){var d,l,g,p,u,f,s,m,C,P={x:0,y:0};return n.parentGrid&&n.rowId&&n.columnId?(i(n),o(n,n.parentGrid),a(n.parentGrid)):a(n),d?{reportContainer:d,documentOptions:d.documentOptions,pos:P,zoom:d.getZoomInfo().scale,pageGrid:l,gridContainer:g,pageIndex:p,layoutCell:u,panelBackgroundColor:f,isFloatingPanel:s||m,isBackgroundFloatingPanel:s,isForegroundFloatingPanel:m,panelIndex:C}:null}},t.getReportContainerPageNode=function(e){for(;e;){if(e.reportContainerPageNode)return e.reportContainerPageNode;e=e.parentWidget||e.parentGrid}return null},t.getParentReportContainerGrid=function(e){if(e&&e.isReportContainerGrid)return e;for(;e;){if(e.parentWidget&&e.parentWidget.isReportContainerGrid)return e.parentWidget;if(e.parentElementInPageInfo)return e.parentElementInPageInfo.reportContainer;e=e.parentWidget||e.parentGrid}return null},t.getParentReportPlayer=function(e){if(e instanceof n)return e;for(;e;){if(e.parentWidget instanceof n)return e.parentWidget;e=e.parentWidget||e.parentGrid}return null},t.getNodePositionOnPage=function(n,r){if(!r)return null;var t,i,a,d,l,g=-1;if(n.getGrids().some(function(e,n){if(e.domNode===r||o.isChildOf(r,e.domNode))return t=e,i=n,e.getFieldCells().some(function(e,n){if(e.domNode===r||o.isChildOf(r,e.domNode))return g=n,l=e,!0}),-1===g&&e.getBackgroundFloatingCells().some(function(e,n){if(e.domNode===r||o.isChildOf(r,e.domNode))return g=n,a=!0,l=e,!0}),-1===g&&e.getForegroundFloatingCells().some(function(e,n){if(e.domNode===r||o.isChildOf(r,e.domNode))return g=n,d=!0,l=e,!0}),!0}),!t)return null;var p=n.getGridContainer(t),u=e.position(p),f=e.position(r);return{x:f.x-u.x,y:f.y-u.y,pageGrid:t,gridContainer:p,pageIndex:i,layoutCell:l,isFloatingPanel:a||d,isBackgroundFloatingPanel:a,isForegroundFloatingPanel:d,panelIndex:g}},t});