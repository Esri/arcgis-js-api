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
// See http://js.arcgis.com/3.29/esri/copyright.txt for details.

define(["../PlayerResizeModes","../PlayerZoomBehaviors","../PlayerThemes","../PlayerViewModes","../config","esri/dijit/geoenrichment/utils/DeviceUtil"],function(e,o,i,a,l,s){var n={};return n.configurePlayer=function(e){s.isMobileDevice()?n._configureMobile(e):n._configurePC(e)},n._configureMobile=function(n){n.allowAutoOrientation&&(n.viewMode=s.isLandscape()?n.mobileLandscapeViewMode||a.PANELS_IN_SLIDES:a.PANELS_IN_STACK),n.theme=n.theme||i.DARK,n.viewMode=a.isMobileSupported(n.viewMode)?n.viewMode:a.PANELS_IN_STACK,n.resizeMode=n.resizeMode||e.FIT_WINDOW,n.enableDataDrilling=!1!==n.enableDataDrilling,n.showAreaTitle=!1,n.showToolbarInPopup=!0,n.defaultZoomBehavior=n.viewMode===a.PANELS_IN_STACK?o.FIT_PAGE_WIDTH:n.viewMode===a.PANELS_IN_ROW?o.FIT_PAGE_HEIGHT:void 0,n.showDataDrillingInsidePanel=!1,n.scaleSlidesToFitWindow=n.viewMode===a.PANELS_IN_SLIDES,l.modules.exportCommands=!1,l.modules.complexCellTooltips=!1},n._configurePC=function(o){switch(o.theme=o.theme||i.DARK,o.viewMode=o.viewMode||a.FULL_PAGES,o.resizeMode=o.resizeMode||e.FIT_WINDOW,o.showToolbarInPopup=!!o.showToolbarInPopup,o.enableDataDrilling=!1!==o.enableDataDrilling,o.showDataDrillingInsidePanel=!!o.showDataDrillingInsidePanel,l.modules.complexCellTooltips=o.viewMode===a.FULL_PAGES,o.viewMode){case a.FULL_PAGES:n._configurePC_fullPages(o);break;case a.PANELS_IN_SLIDES:n._configurePC_panelsInSlides(o);break;case a.PANELS_IN_STACK:n._configurePC_panelsInStack(o);break;case a.PANELS_IN_ROW:n._configurePC_panelsInRow(o)}},n._configurePC_fullPages=function(i){switch(i.showAreaTitle=!1!==i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=i.defaultZoomBehavior||o.FIT_PAGE;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=i.defaultZoomBehavior||o.FIT_PAGE}},n._configurePC_panelsInSlides=function(o){switch(o.showAreaTitle=!!o.showAreaTitle,o.defaultZoomBehavior=null,o.resizeMode){case e.FIT_WINDOW:o.scaleSlidesToFitWindow=!1!==o.scaleSlidesToFitWindow;break;case e.AUTO:o.scaleSlidesToFitWindow=!1;break;case e.MANUAL:o.scaleSlidesToFitWindow=!1!==o.scaleSlidesToFitWindow}},n._configurePC_panelsInStack=function(i){switch(i.showAreaTitle=!!i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH}},n._configurePC_panelsInRow=function(i){switch(i.showAreaTitle=!!i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_HEIGHT;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_HEIGHT}},n});