// COPYRIGHT © 2022 Esri
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
// See http://js.arcgis.com/3.41/esri/copyright.txt for details.

define([],(function(){var r="https://laci2.esri.com/jenkins/job/report-player-jsapi-pr/lastSuccessfulBuild/artifact/release";return{logData:!0,showAreaDataUtilUndefinedData:!1,createPlayerCommand:{saveDataJsonAsTextFile:!1,useTestBuild:!1,configUrl:r+"/reportPlayer/config.js",baseUrl:r,mainUrl:r+"/dojo/dojo.js",esriDijitCssUrl:"https://js.arcgis.com/3.31/dijit/themes/claro/claro.css",esriCssUrl:r+"/reportPlayer/reportPlayer.css"},createPDFCommand:{removeUnicodeChars:!1},preview:{bigValues:!1},charts:{enableEffects:!1},table:{printGridRefresh:!1},emulateErrors:{playerError:!1,contentErrors:!1,themeParseError:!1,metadataParseError:!1,layoutParseError:0,reportContainerRenderError:!1,createReportError:!1,createReportNaN:!1,createReportNull:!1,getMapItemError:!1,emptyDataProviderResponse:!1,emptyTemplateJson:!1}}}));