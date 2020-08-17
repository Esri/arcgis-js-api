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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["../PlayerResizeModes","../PlayerZoomBehaviors","../PlayerThemes","../PlayerViewModes","../config","esri/dijit/geoenrichment/utils/DeviceUtil"],(function(e,o,i,a,l,s){var t={configurePlayer:function(l){l.theme=l.theme&&i.toSupportedValue(l.theme),l.viewMode=l.viewMode&&a.toSupportedValue(l.viewMode),l.resizeMode=l.resizeMode&&e.toSupportedValue(l.resizeMode),l.defaultZoomBehavior=l.defaultZoomBehavior&&o.toSupportedValue(l.defaultZoomBehavior),s.isMobileDevice()?t._configureMobile(l):t._configurePC(l),l._viewModel.setAnimationSuspended(l.viewMode===a.PANELS_IN_STACK_ALL)},getDefaultViewMode:function(e){return s.isMobileDevice()?e.allowAutoOrientation&&s.isLandscape()?e.mobileLandscapeViewMode||a.PANELS_IN_SLIDES:a.PANELS_IN_STACK:a.FULL_PAGES},_configureMobile:function(s){s.allowAutoOrientation&&(s.viewMode=t.getDefaultViewMode(s)),s.theme=s.theme||i.DARK,s.viewMode=a.isMobileSupported(s.viewMode)?s.viewMode:a.PANELS_IN_STACK,s.resizeMode=s.resizeMode||e.FIT_WINDOW,s.enableDataDrilling=!1!==s.enableDataDrilling,s.showAreaTitle=!1,s.showToolbarInPopup=!0,s.defaultZoomBehavior=a.isStack(s.viewMode)?o.FIT_PAGE_WIDTH:s.viewMode===a.PANELS_IN_ROW?o.FIT_PAGE_HEIGHT:void 0,s.scaleSlidesToFitWindow=s.viewMode===a.PANELS_IN_SLIDES,l.modules.exportCommands=!1,l.modules.complexCellTooltips=!1},_configurePC:function(o){switch(o.theme=o.theme||i.DARK,o.viewMode=o.viewMode||t.getDefaultViewMode(o),o.resizeMode=o.resizeMode||e.FIT_WINDOW,o.showToolbarInPopup=!!o.showToolbarInPopup,o.enableDataDrilling=!1!==o.enableDataDrilling,l.modules.complexCellTooltips=o.viewMode===a.FULL_PAGES||o.viewMode===a.PANELS_IN_STACK_ALL,o.viewMode){case a.FULL_PAGES:t._configurePC_fullPages(o);break;case a.PANELS_IN_SLIDES:t._configurePC_panelsInSlides(o);break;case a.PANELS_IN_STACK:t._configurePC_panelsInStack(o);break;case a.PANELS_IN_STACK_ALL:t._configurePC_panelsInStackAll(o);break;case a.PANELS_IN_ROW:t._configurePC_panelsInRow(o)}},_configurePC_fullPages:function(i){switch(i.showAreaTitle=!1!==i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=i.defaultZoomBehavior||o.FIT_PAGE;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=i.defaultZoomBehavior||o.FIT_PAGE}},_configurePC_panelsInSlides:function(o){switch(o.showAreaTitle=!!o.showAreaTitle,o.defaultZoomBehavior=null,o.resizeMode){case e.FIT_WINDOW:o.scaleSlidesToFitWindow=!1!==o.scaleSlidesToFitWindow;break;case e.AUTO:o.scaleSlidesToFitWindow=!1;break;case e.MANUAL:o.scaleSlidesToFitWindow=!1!==o.scaleSlidesToFitWindow}},_configurePC_panelsInStack:function(i){switch(i.showAreaTitle=!!i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH}},_configurePC_panelsInStackAll:function(i){switch(i.showAreaTitle=!1!==i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH}},_configurePC_panelsInRow:function(i){switch(i.showAreaTitle=!!i.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_HEIGHT;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_HEIGHT}},configurePlayerForCustomBuild:function(e){l.esriDijitCssUrl=e+"/dijit/themes/claro/claro.css",l.esriCssUrl=e+"/esri/css/esri.css",l.playerSourceRootUrl=e+"/dojo/dojo.js",l.configScriptText='var dojoConfig = { baseUrl: "'+e+'/", waitSeconds: 60, async: true, locale: typeof dojoConfig !== "undefined" && dojoConfig.locale || null, packages: [{ name: "dojo", location: "./dojo" }, { name: "dijit", location: "./dijit" }, { name: "dojox", location: "./dojox" }, { name: "dgrid1", location: "./dgrid1" }, { name: "dstore", location: "./dstore" }, { name: "xstyle", location: "./xstyle" }, { name: "esri", location: "./esri" }, { name: "moment", location: "./moment", main: "moment/moment" }] }'}};return t}));
