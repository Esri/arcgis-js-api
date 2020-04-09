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
// See http://js.arcgis.com/4.15/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","dojo/_base/kernel","@dojo/framework/shim/Promise"],(function(e,r,t,n,o){Object.defineProperty(r,"__esModule",{value:!0});var a,i;function l(){var e=o.locale;return e&&(r.locales[e]||function(e){for(var t=e.split("-")[0].toLowerCase(),n=null,o=0,a=Object.keys(r.locales);o<a.length;o++){var i=a[o];if(i.indexOf(t)>-1){n=r.locales[i];break}}return n}(e))||"en_US"}r.locales={ar:"ar","bs-ba":"bs_BA","ca-es":"ca_ES","cs-cz":"cs_CZ","da-dk":"da_DK","de-ch":"de_CH","de-de":"de_DE","el-gr":"el_GR","en-ca":"en_CA","en-us":"en_US","es-es":"es_ES","et-ee":"et_EE","fi-fi":"fi_FI","fr-fr":"fr_FR","he-il":"he_IL","hr-hr":"hr_HR","hu-hu":"hu_HU","id-id":"id_ID","it-it":"it_IT","ja-jp":"ja_JP","ko-kr":"ko_KR","lt-lt":"lt_LT","lv-lv":"lv_LV","nb-no":"nb_NO","nl-nl":"nl_NL","pl-pl":"pl_PL","pt-br":"pt_BR","pt-pt":"pt_PT","ro-ro":"ro_RO","ru-ru":"ru_RU","sl-sl":"sl_SL","sr-rs":"sr_RS","sv-se":"sv_SE","th-th":"th_TH","tr-tr":"tr_TR","uk-ua":"uk_UA","vi-vn":"vi_VN","zh-cn":"zh_Hans","zh-hk":"zh_Hant","zh-tw":"zh_Hant"},r.getChartLocale=l,r.loadChartsModule=function(r){return void 0===r&&(r=l()),n(this,void 0,void 0,(function(){var o=this;return t(this,(function(l){return a&&r===i?[2,a]:(i=r,[2,a=Promise.all([new Promise((function(r,t){e(["../../libs/amcharts4/index"],r,t)})),new Promise((function(t,n){e(["../../libs/amcharts4/lang/"+r],t,n)}))]).then((function(a){var l=a[0],s=a[1];return n(o,void 0,void 0,(function(){var n,o;return t(this,(function(t){switch(t.label){case 0:return n=l.am4core,i===r&&(n.options.defaultLocale=s.default),"function"==typeof Object.assign?[3,2]:[4,new Promise((function(r,t){e(["@dojo/framework/shim/object"],r,t)}))];case 1:o=t.sent(),Object.defineProperty(Object,"assign",{value:o.assign,writable:!0,configurable:!0}),t.label=2;case 2:return[2,l]}}))}))}),(function(){return i=a=null,null}))])}))}))}}));