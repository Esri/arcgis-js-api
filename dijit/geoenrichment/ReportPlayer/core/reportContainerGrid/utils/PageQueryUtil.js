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
// See http://js.arcgis.com/3.32/esri/copyright.txt for details.

define(["dojo/dom-geometry","../../../ReportPlayer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,n,o,r){var t={getElementPageInfo:function(n){if(n&&(n.parentWidget||n.parentGrid)){var r,i,a,d,l,g,p,u,f,s={x:0,y:0};return n.parentGrid&&n.rowId&&n.columnId?(C(n),m(n,n.parentGrid),P(n.parentGrid)):P(n),r?{reportContainer:r,documentOptions:r.documentOptions,pos:s,zoom:r.getZoomInfo().scale,pageGrid:i,gridContainer:a,pageIndex:d,layoutCell:l,panelBackgroundColor:g,isFloatingPanel:p||u,isBackgroundFloatingPanel:p,isForegroundFloatingPanel:u,panelIndex:f}:null}function m(n,o){var r=e.position(n.domNode),t=e.position(o.domNode);s.x+=r.x-t.x,s.y+=r.y-t.y}function C(e){if(!g){var n=e.getFullStyle().backgroundColor;n&&!o.isTransparent(n)&&(g=n)}}function P(e){if(e){e.parentGridCell&&C(e.parentGridCell);var o=e.parentWidget;if(o)if(o&&o.isReportContainerGrid){r=o;var c=t.getNodePositionOnPage(r,e.domNode);if(c){s.x+=c.x,s.y+=c.y,i=c.pageGrid,a=c.gridContainer,d=c.pageIndex;var I=t.getNodePositionOnPage(r,n.domNode);l=I.layoutCell,p=I.isBackgroundFloatingPanel,u=I.isForegroundFloatingPanel,f=I.panelIndex}}else m(e,o),P(o);else e.parentElementInPageInfo&&(r=e.parentElementInPageInfo.reportContainer,g=g||e.parentElementInPageInfo.panelBackgroundColor,s.x+=e.parentElementInPageInfo.pos.x,s.y+=e.parentElementInPageInfo.pos.y)}}},getReportContainerPageNode:function(e){for(;e;){if(e.reportContainerPageNode)return e.reportContainerPageNode;e=e.parentWidget||e.parentGrid}return null},getParentReportContainerGrid:function(e){if(e&&e.isReportContainerGrid)return e;for(;e;){if(e.parentWidget&&e.parentWidget.isReportContainerGrid)return e.parentWidget;if(e.parentElementInPageInfo)return e.parentElementInPageInfo.reportContainer;e=e.parentWidget||e.parentGrid}return null},getParentReportPlayer:function(e){if(e instanceof n)return e;for(;e;){if(e.parentWidget instanceof n)return e.parentWidget;e=e.parentWidget||e.parentGrid}return null},getNodePositionOnPage:function(n,o){if(!o)return null;var t,i,a,d,l,g=-1;if(n.getGrids().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return t=e,i=n,e.getFieldCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,l=e,!0})),-1===g&&e.getBackgroundFloatingCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,a=!0,l=e,!0})),-1===g&&e.getForegroundFloatingCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,d=!0,l=e,!0})),!0})),!t)return null;var p=n.getGridContainer(t),u=e.position(p),f=e.position(o);return{x:f.x-u.x,y:f.y-u.y,pageGrid:t,gridContainer:p,pageIndex:i,layoutCell:l,isFloatingPanel:a||d,isBackgroundFloatingPanel:a,isForegroundFloatingPanel:d,panelIndex:g}}};return t}));