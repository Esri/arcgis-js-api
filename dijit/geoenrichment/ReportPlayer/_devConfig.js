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

define([],function(){var r="https://laci2.esri.com/jenkins/job/report-player-jsapi-pr/lastSuccessfulBuild/artifact/build/report-player/release";return{showAreaDataUtilUndefinedData:!1,jsapiVersion:null,createPlayerCommand:{saveDataJsonAsTextFile:!1,useTestBuild:!1,configUrl:r+"/reportPlayer/config.js",baseUrl:r,mainUrl:r+"/reportPlayer/main.js",esriDijitCssUrl:"https://js.arcgis.com/3.24/dijit/themes/claro/claro.css",esriCssUrl:r+"/reportPlayer/esri.css"},createPDFCommand:{removeUnicodeChars:!1},preview:{bigValues:!1},charts:{showStatisticsInTooltips:!1},table:{printGridRefresh:!1},emulateErrors:{playerError:!1,contentErrors:!1,themeParseError:!1,metadataParseError:!1,layoutParseError:!1,reportContainerRenderError:!1,areaDataUtilUndefinedData:!1}}});