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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["../PlayerResizeModes","../PlayerZoomBehaviors","../PlayerThemes","../PlayerViewModes","../config","esri/dijit/geoenrichment/utils/DeviceUtil"],(function(e,o,i,a,t,n){var l={};return l.configurePlayer=function(s,r){switch(function(t){t._originalConfigurationSettings||(t.theme=t.theme&&i.toSupportedValue(t.theme)||i.DARK,t.viewMode=t.viewMode&&a.toSupportedValue(t.viewMode),t.resizeMode=t.resizeMode&&e.toSupportedValue(t.resizeMode)||e.FIT_WINDOW,t.defaultZoomBehavior=t.defaultZoomBehavior&&o.toSupportedValue(t.defaultZoomBehavior),t._originalConfigurationSettings={viewMode:t.viewMode,defaultZoomBehavior:t.defaultZoomBehavior,scaleSlidesToFitWindow:t.scaleSlidesToFitWindow,showAreaTitle:t.showAreaTitle})}(s),s.viewMode=r||s._originalConfigurationSettings.viewMode||l.getDefaultViewMode(s),s.viewMode){case a.FULL_PAGES:l._configure_fullPages(s);break;case a.PANELS_IN_SLIDES:l._configure_panelsInSlides(s);break;case a.PANELS_IN_STACK:l._configure_panelsInStack(s);break;case a.PANELS_IN_STACK_ALL:l._configure_panelsInStackAll(s)}s._viewModel.setAnimationSuspended(s.viewMode===a.PANELS_IN_STACK_ALL),n.isMobileDevice()&&(t.modules.exportCommands=!1),t.modules.complexCellTooltips=s.viewMode===a.FULL_PAGES||s.viewMode===a.PANELS_IN_STACK_ALL},l.getDefaultViewMode=function(e){return n.isMobileDevice()&&!n.isWebLayout()?n.isLandscape()?a.PANELS_IN_SLIDES:a.PANELS_IN_STACK:a.FULL_PAGES},l._configure_fullPages=function(i){switch(i.showAreaTitle=!1!==i._originalConfigurationSettings.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=i._originalConfigurationSettings.defaultZoomBehavior||(n.isMobileDevice()?o.FIT_PAGE_WIDTH:null)||o.FIT_PAGE;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=i._originalConfigurationSettings.defaultZoomBehavior||o.FIT_PAGE}},l._configure_panelsInSlides=function(o){switch(o.showAreaTitle=!!o._originalConfigurationSettings.showAreaTitle,o.defaultZoomBehavior=null,o.resizeMode){case e.FIT_WINDOW:o.scaleSlidesToFitWindow=!1!==o._originalConfigurationSettings.scaleSlidesToFitWindow;break;case e.AUTO:o.scaleSlidesToFitWindow=!1;break;case e.MANUAL:o.scaleSlidesToFitWindow=!1!==o._originalConfigurationSettings.scaleSlidesToFitWindow}},l._configure_panelsInStack=function(i){switch(i.showAreaTitle=!!i._originalConfigurationSettings.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH}},l._configure_panelsInStackAll=function(i){switch(i.showAreaTitle=!1!==i._originalConfigurationSettings.showAreaTitle,i.scaleSlidesToFitWindow=!1,i.resizeMode){case e.FIT_WINDOW:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH;break;case e.AUTO:i.defaultZoomBehavior=o.RESET;break;case e.MANUAL:i.defaultZoomBehavior=o.FIT_PAGE_WIDTH}},l.configurePlayerForCustomBuild=function(e,o){var i=o||t;i.esriDijitCssUrl=e+"/dijit/themes/claro/claro.css",i.esriCssUrl=e+"/esri/css/esri.css",i.playerSourceRootUrl=e+"/dojo/dojo.js",i.configScriptText='var dojoConfig = { baseUrl: "'+e+'/", waitSeconds: 60, async: true, locale: typeof dojoConfig !== "undefined" && dojoConfig.locale || null, packages: [{ name: "dojo", location: "./dojo" }, { name: "dijit", location: "./dijit" }, { name: "dojox", location: "./dojox" }, { name: "dgrid1", location: "./dgrid1" }, { name: "dstore", location: "./dstore" }, { name: "xstyle", location: "./xstyle" }, { name: "esri", location: "./esri" }, { name: "moment", location: "./moment", main: "moment/moment" }] }'},l}));