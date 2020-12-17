// COPYRIGHT © 2020 Esri
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

define(["dojo/dom-geometry","esri/dijit/geoenrichment/utils/ColorUtil","esri/dijit/geoenrichment/utils/DomUtil"],(function(e,n,r){var o={getElementPageInfo:function(r){if(r&&r.parentWidget&&(!r.viewModel||r.viewModel.isGraphicStyle)){var t,i,a,d,l,g,u,p,s,f={x:0,y:0};return r.isValueField&&r.parentGrid&&r.rowId&&r.columnId?(m(r),C(r,r.parentGrid),P(r.parentGrid)):P(r),t&&l?{reportContainer:t,documentOptions:t.documentOptions,pos:f,zoom:t.getZoomInfo().scale,pageGrid:i,gridContainer:a,pageIndex:d,layoutCell:l,panelBackgroundColor:g,isFloatingPanel:u||p,isBackgroundFloatingPanel:u,isForegroundFloatingPanel:p,panelIndex:s}:null}function C(n,r){var o=e.position(n.domNode),t=e.position(r.domNode);f.x+=o.x-t.x,f.y+=o.y-t.y}function m(e){if(!g){var r=e.getFullStyle().backgroundColor;r&&!n.isTransparent(r)&&(g=r)}}function P(e){if(e){if(e.parentGridCell&&m(e.parentGridCell),e.parentElementInPageInfo){var n=e.parentElementInPageInfo;return t=n.reportContainer,g=g||n.panelBackgroundColor,f.x+=n.pos.x,f.y+=n.pos.y,i=n.pageGrid,a=n.gridContainer,d=n.pageIndex,l=n.layoutCell,u=n.isBackgroundFloatingPanel,p=n.isForegroundFloatingPanel,void(s=n.panelIndex)}var c=e.parentWidget;if(c&&c.isReportContainerGrid){t=c;var y=o.getNodePositionOnPage(t,e.domNode),F=o.getNodePositionOnPage(t,r.domNode);y&&F&&(f.x+=y.x,f.y+=y.y,i=y.pageGrid,a=y.gridContainer,d=y.pageIndex,l=F.layoutCell,u=F.isBackgroundFloatingPanel,p=F.isForegroundFloatingPanel,s=F.panelIndex)}else c&&(C(e,c),P(c))}}},getReportContainerPageNode:function(e){for(;e;){if(e.reportContainerPageNode)return e.reportContainerPageNode;e=e.parentWidget||e.parentGrid}return null},getParentReportContainerGrid:function(e){if(e&&e.isReportContainerGrid)return e;for(;e;){if(e.parentWidget&&e.parentWidget.isReportContainerGrid)return e.parentWidget;if(e.parentElementInPageInfo)return e.parentElementInPageInfo.reportContainer;e=e.parentWidget||e.parentGrid}return null},getParentReportPlayer:function(e){if(e&&e.isPlayer)return e;for(;e;){if(e.parentWidget&&e.parentWidget.isPlayer)return e.parentWidget;e=e.parentWidget||e.parentGrid}return null},getNodePositionOnPage:function(n,o){if(!o)return null;var t,i,a,d,l,g=-1;if(n.getGrids().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return t=e,i=n,e.getFieldCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,l=e,!0})),-1===g&&e.getBackgroundFloatingCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,a=!0,l=e,!0})),-1===g&&e.getForegroundFloatingCells().some((function(e,n){if(e.domNode===o||r.isChildOf(o,e.domNode))return g=n,d=!0,l=e,!0})),!0})),!t)return null;var u=n.getGridContainer(t),p=e.position(u),s=e.position(o);return{x:s.x-p.x,y:s.y-p.y,pageGrid:t,gridContainer:u,pageIndex:i,layoutCell:l,isFloatingPanel:a||d,isBackgroundFloatingPanel:a,isForegroundFloatingPanel:d,panelIndex:g}}};return o}));