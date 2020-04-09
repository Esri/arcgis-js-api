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

define([],(function(){return{composeHtmlStringFromParts:function(t){var n='<!DOCTYPE html>\n<html xmlns="http://www.w3.org/1999/xhtml">\n<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<meta name="viewport" content="initial-scale=1, maximum-scale=1,user-scalable=no">\n<title>'+t.reportTitle+"</title>\n";return t.links&&t.links.forEach((function(t){n+='<link href="'+t+'" rel="stylesheet" />\n'})),t.cssFiles&&t.cssFiles.forEach((function(t){n+="<style>\n",n+=t+"\n",n+="</style>\n"})),t.additionalStyleNodes&&t.additionalStyleNodes.length&&(n+="<style>\n",t.additionalStyleNodes.forEach((function(t){n+=t.innerHTML+"\n"})),n+="</style>\n"),t.scripts&&t.scripts.forEach((function(t){if("object"==typeof t){for(var e in n+="<script",t)n+=" "+e+'="'+t[e]+'"';n+="><\/script>\n"}else n+="<script>\n",n+=t+"\n",n+="<\/script>\n"})),n+='</head>\n<body class="claro" style="margin:0px;">\n',n+=t.contentString+"\n",n+="</body>\n</html>"}}}));