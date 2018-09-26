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
// See http://js.arcgis.com/3.26/esri/copyright.txt for details.

define(["../PlayerResizeModes","../PlayerZoomBehaviors","../PlayerThemes","../PlayerViewModes","../config","esri/dijit/geoenrichment/utils/DeviceUtil"],function(e,o,i,a,l,r){var s={};return s.configurePlayer=function(e){r.isMobileDevice()?s._configureMobile(e):s._configurePC(e)},s._configureMobile=function(r){r.theme=r.theme||i.DARK,r.viewMode=r.viewMode===a.PANELS_IN_SLIDES?a.PANELS_IN_SLIDES:a.PANELS_IN_STACK,r.resizeMode=r.resizeMode||e.FIT_WINDOW,r.enableDataDrilling=!1,r.showAreaTitle=!1,r.showToolbarInPopup=!0,r.defaultZoomBehavior=r.viewMode===a.PANELS_IN_STACK?o.FIT_PAGE_WIDTH:void 0,r.allowKeyboardNavigation=!1,r.allowSwipeNavigation=r.viewMode===a.PANELS_IN_SLIDES,r.scaleSlidesToFitWindow=r.viewMode===a.PANELS_IN_SLIDES;for(var s in l.modules)l.modules[s]=!1},s._configurePC=function(o){switch(o.theme=o.theme||i.DARK,o.viewMode=o.viewMode||a.FULL_PAGES,o.resizeMode=o.resizeMode||e.FIT_WINDOW,o.showToolbarInPopup=!!o.showToolbarInPopup,o.enableDataDrilling=!1!==o.enableDataDrilling,o.allowSwipeNavigation=!1,o.viewMode){case a.FULL_PAGES:s._configurePC_fullPages(o);break;case a.PANELS_IN_SLIDES:s._configurePC_panelsInSlides(o);break;case a.PANELS_IN_STACK:s._configurePC_panelsInStack(o)}},s._configurePC_fullPages=function(i){switch(i.showAreaTitle=!1!==i.showAreaTitle,i.allowKeyboardNavigation=!1,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=i.defaultZoomBehavior||o.FIT_PAGE;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=i.defaultZoomBehavior||o.FIT_PAGE}},s._configurePC_panelsInSlides=function(o){switch(o.showAreaTitle=!!o.showAreaTitle,o.defaultZoomBehavior=null,o.allowKeyboardNavigation=!1!==o.allowKeyboardNavigation,o.resizeMode){case e.FIT_WINDOW:o.scaleSlidesToFitWindow=!1!==o.scaleSlidesToFitWindow;break;case e.AUTO:o.scaleSlidesToFitWindow=!1;break;case e.MANUAL:o.scaleSlidesToFitWindow=!1!==o.scaleSlidesToFitWindow}},s._configurePC_panelsInStack=function(i){switch(i.showAreaTitle=!!i.showAreaTitle,i.allowKeyboardNavigation=!1,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH}},s});