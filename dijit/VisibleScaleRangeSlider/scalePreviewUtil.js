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
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["dojo/_base/array","require"],function(e,n){var r={_supportedRegions:["ar-iq","ar-kw","bg-bg","cs-cz","da-dk","da-gl","da-gl","de-at","de-ch","de-de","de-li","el-gr","en-ae","en-au","en-ca","en-ca","en-eg","en-gb","en-hk","en-id","en-ie","en-ie","en-il","en-in","en-iq","en-ke","en-lu","en-mo","en-my","en-nz","en-rw","en-sg","en-us","en-us","en-vi","en-vi","en-wo","en-za","es-ar","es-ar","es-bo","es-bo","es-cl","es-cl","es-co","es-co","es-cr","es-cr","es-es","es-gt","es-gt","es-mx","es-mx","es-ni","es-ni","es-pe","es-pe","es-pr","es-pr","es-sv","es-sv","es-ve","et-ee","fi-fi","fi-fi","fr-ci","fr-fr","fr-ma","fr-mg","fr-ml","fr-tn","is-is","is-is","it-it","ja-jp","ja-jp","ko-kr","lt-lt","lv-lv","nl-be","nl-nl","nl-sr","nl-sr","nn-no","nn-no","pl-pl","pt-br","pt-br","pt-pt","ro-ro","ru-ru","sk-sk","sv-se","sv-se","th-th","zh-cn","zh-tw"],_defaultRegion:"en-us",_getSupportedRegion:function(n){return n=n?n.toLowerCase():"",e.indexOf(r._supportedRegions,n)>-1?n:r._defaultRegion},getScalePreviewSource:function(e){var s="./images/scalePreview/"+r._getSupportedRegion(e)+".jpg";return"url("+n.toUrl(s)+")"},getScalePreviewSpriteBackgroundPosition:function(e){return"-"+e%5*128+"px -"+128*Math.floor(e/5)+"px"}};return r});