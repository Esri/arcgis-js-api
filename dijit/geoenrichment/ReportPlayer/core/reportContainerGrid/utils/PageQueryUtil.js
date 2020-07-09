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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/dom-geometry","../../../ReportPlayer","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,n,o,r){var t={getElementPageInfo:function(n){if(n&&n.parentWidget){var r,i,a,d,l,g,u,p,s,f={x:0,y:0};return n.isValueField&&n.parentGrid&&n.rowId&&n.columnId?(m(n),C(n,n.parentGrid),c(n.parentGrid)):c(n),r&&l?{reportContainer:r,documentOptions:r.documentOptions,pos:f,zoom:r.getZoomInfo().scale,pageGrid:i,gridContainer:a,pageIndex:d,layoutCell:l,panelBackgroundColor:g,isFloatingPanel:u||p,isBackgroundFloatingPanel:u,isForegroundFloatingPanel:p,panelIndex:s}:null}function C(n,o){var r=e.position(n.domNode),t=e.position(o.domNode);f.x+=r.x-t.x,f.y+=r.y-t.y}function m(e){if(!g){var n=e.getFullStyle().backgroundColor;n&&!o.isTransparent(n)&&(g=n)}}function c(e){if(e){if(e.parentGridCell&&m(e.parentGridCell),e.parentElementInPageInfo){var o=e.parentElementInPageInfo;return r=o.reportContainer,g=g||o.panelBackgroundColor,f.x+=o.pos.x,f.y+=o.pos.y,i=o.pageGrid,a=o.gridContainer,d=o.pageIndex,l=o.layoutCell,u=o.isBackgroundFloatingPanel,p=o.isForegroundFloatingPanel,void(s=o.panelIndex)}var P=e.parentWidget;if(P&&P.isReportContainerGrid){r=P;var F=t.getNodePositionOnPage(r,e.domNode),I=t.getNodePositionOnPage(r,n.domNode);F&&I&&(f.x+=F.x,f.y+=F.y,i=F.pageGrid,a=F.gridContainer,d=F.pageIndex,l=I.layoutCell,u=I.isBackgroundFloatingPanel,p=I.isForegroundFloatingPanel,s=I.panelIndex)}else C(e,P),c(P)}}},getReportContainerPageNode:function(e){for(;e;){if(e.reportContainerPageNode)return e.reportContainerPageNode;e=e.parentWidget||e.parentGrid}return null},getParentReportContainerGrid:function(e){if(e&&e.isReportContainerGrid)return e;for(;e;){if(e.parentWidget&&e.parentWidget.isReportContainerGrid)return e.parentWidget;if(e.parentElementInPageInfo)return e.parentElementInPageInfo.reportContainer;e=e.parentWidget||e.parentGrid}return null},getParentReportPlayer:function(e){if(e instanceof n)return e;for(;e;){if(e.parentWidget instanceof n)return e.parentWidget;e=e.parentWidget||e.parentGrid}return null},getNodePositionOnPage:function(n,o){if(!o)return null;var t,i,a,d,l,g=-1;if(n.getGrids().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return t=e,i=n,e.getFieldCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,l=e,!0})),-1===g&&e.getBackgroundFloatingCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,a=!0,l=e,!0})),-1===g&&e.getForegroundFloatingCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,d=!0,l=e,!0})),!0})),!t)return null;var u=n.getGridContainer(t),p=e.position(u),s=e.position(o);return{x:s.x-p.x,y:s.y-p.y,pageGrid:t,gridContainer:u,pageIndex:i,layoutCell:l,isFloatingPanel:a||d,isBackgroundFloatingPanel:a,isForegroundFloatingPanel:d,panelIndex:g}}};return t}));