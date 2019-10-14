// COPYRIGHT © 2019 Esri
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
// See http://js.arcgis.com/next/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","dojo/_base/kernel","@dojo/framework/shim/Promise"],function(e,r,t,n,a){function o(e){for(var t=e.split("-"),n=t[0].toLowerCase(),a=Object.keys(r.locales),o=null,s=0,l=a;s<l.length;s++){var i=l[s];if(i.indexOf(n)>-1){o=r.locales[i];break}}return o}function s(){var e=a.locale;return e?r.locales[e]||o(e)||i:i}function l(r){return void 0===r&&(r=s()),n(this,void 0,void 0,function(){var n,a,o,s,l;return t(this,function(t){switch(t.label){case 0:return r===_?[2,c]:(_=r,[4,Promise.all([new Promise(function(r,t){e(["../../libs/amcharts4/index"],r,t)}),new Promise(function(t,n){e(["../../libs/amcharts4/lang/"+r],t,n)})])]);case 1:return n=t.sent(),a=n[0],o=n[1],s=a.am4core,r===_&&(s.options.defaultLocale=o.default),"function"==typeof Object.assign?[3,3]:[4,new Promise(function(r,t){e(["@dojo/framework/shim/object"],r,t)})];case 2:l=t.sent(),Object.defineProperty(Object,"assign",{value:l.assign,writable:!0,configurable:!0}),t.label=3;case 3:return c=a,[2,a]}})})}Object.defineProperty(r,"__esModule",{value:!0});var i="en_US";r.locales={ar:"ar","bs-ba":"bs_BA","ca-es":"ca_ES","cs-cz":"cs_CZ","da-dk":"da_DK","de-ch":"de_CH","de-de":"de_DE","el-gr":"el_GR","en-ca":"en_CA","en-us":"en_US","es-es":"es_ES","et-ee":"et_EE","fi-fi":"fi_FI","fr-fr":"fr_FR","he-il":"he_IL","hi-in":"hi_IN","hr-hr":"hr_HR","hu-hu":"hu_HU","id-id":"id_ID","it-it":"it_IT","ja-jp":"ja_JP","ko-kr":"ko_KR","lt-lt":"lt_LT","lv-lv":"lv_LV","nb-no":"nb_NO","nl-nl":"nl_NL","pl-pl":"pl_PL","pt-br":"pt_BR","pt-pt":"pt_PT","ro-ro":"ro_RO","ru-ru":"ru_RU","sl-sl":"sl_SL","sr-rs":"sr_RS","sv-se":"sv_SE","th-th":"th_TH","tr-tr":"tr_TR","uk-ua":"uk_UA","vi-vn":"vi_VN","zh-cn":"zh_Hans","zh-hk":"zh_Hant","zh-tw":"zh_Hant"},r.getChartLocale=s;var _,c=null;r.loadChartsModule=l});