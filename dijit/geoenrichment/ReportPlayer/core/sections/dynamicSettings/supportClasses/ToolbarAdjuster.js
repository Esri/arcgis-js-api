// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["dojo/dom-geometry","dojo/dom-style","esri/dijit/geoenrichment/utils/DomUtil","esri/dijit/geoenrichment/utils/MathUtil","esri/dijit/geoenrichment/ReportPlayer/PlayerViewModes","../../../reportContainerGrid/utils/PageQueryUtil"],(function(e,t,o,i,r,a){var n={};return n.adjustToolbarPosition=function(e){var t=e.toolbar,o=e.section,i=e.panelScale,r=e.toolbarNeedsTopOffset;t&&(n._syncWithPanelScale(t,o,i,r),n._adjustToolbarForMapImage(t,o),n._syncWithPlayerSettingsIcon(t,o,i))},n._syncWithPanelScale=function(e,t,o,i){e.style.right="5px",i&&!t.isDataDrillingView?e.style.top=1/(o||1)*-19+"px":e.style.top="5px",o&&(e.style.transformOrigin=t.isDataDrillingView?"100% 100%":"100% 0%",e.style.transform="scale("+1/o+")",e.style["webkit-transform"]="scale("+1/o+")")},n._adjustToolbarForMapImage=function(e,t){var i=t.getMapImages()[0];if(i){var r=o.noTransformPosition(i.domNode),a=o.noTransformPosition(t.domNode);e.style.top=r.y-a.y+5+"px",e.style.right=a.x+a.w-r.x-r.w+5+"px"}},n._syncWithPlayerSettingsIcon=function(o,n,s){if(!n.isDataDrillingView){var l=a.getParentReportPlayer(n);if(l.showToolbarInPopup&&l.viewMode===r.PANELS_IN_SLIDES){var p=e.position(l.playerAfterToolbarDiv),y=e.position(o);if(i.checkRectsIntersect([p,y])){var c=p.x-y.w-5-y.x,g=p.y-y.y,d=t.get(o,"top"),f=Number(t.get(o,"right").replace("px",""));o.style.top=d+g/s+"px",o.style.right=f-c/s+"px"}}}},n}));