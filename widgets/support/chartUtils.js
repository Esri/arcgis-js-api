// COPYRIGHT © 2018 Esri
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
// See http://js.arcgis.com/4.11/esri/copyright.txt for details.

define(["require","exports","dojo/_base/kernel","../../core/promiseUtils"],function(e,r,t,a){function n(e){for(var t=e.split("-"),a=t[0].toLowerCase(),n=Object.keys(r.locales),l=null,s=0,_=n;s<_.length;s++){var i=_[s];if(i.indexOf(a)>-1){l=r.locales[i];break}}return l}function l(){var e=t.locale;return e?r.locales[e]||n(e)||_:_}function s(r){if(void 0===r&&(r=l()),r===i)return o;var t=["../../libs/amcharts4/index","../../libs/amcharts4/lang/"+r];return"function"!=typeof Object.assign&&t.push("@dojo/framework/shim/object"),i=r,o=a.create(function(a){return e(t,function(e,t,n){var l=e.am4core;r===i&&(l.options.defaultLocale=t.default),n&&Object.defineProperty(Object,"assign",{value:n.assign,writable:!0,configurable:!0}),a(e)})})}Object.defineProperty(r,"__esModule",{value:!0});var _="en_US";r.locales={ar:"ar","bs-ba":"bs_BA","ca-es":"ca_ES","cs-cz":"cs_CZ","da-dk":"da_DK","de-ch":"de_CH","de-de":"de_DE","el-gr":"el_GR","en-ca":"en_CA","en-us":"en_US","es-es":"es_ES","et-ee":"et_EE","fi-fi":"fi_FI","fr-fr":"fr_FR","he-il":"he_IL","hi-in":"hi_IN","hr-hr":"hr_HR","hu-hu":"hu_HU","id-id":"id_ID","it-it":"it_IT","ja-jp":"ja_JP","ko-kr":"ko_KR","lt-lt":"lt_LT","lv-lv":"lv_LV","nb-no":"nb_NO","nl-nl":"nl_NL","pl-pl":"pl_PL","pt-br":"pt_BR","pt-pt":"pt_PT","ro-ro":"ro_RO","ru-ru":"ru_RU","sl-sl":"sl_SL","sr-rs":"sr_RS","sv-se":"sv_SE","th-th":"th_TH","tr-tr":"tr_TR","uk-ua":"uk_UA","vi-vn":"vi_VN","zh-cn":"zh_Hans","zh-hk":"zh_Hant","zh-tw":"zh_Hant"},r.getChartLocale=l;var i,o=null;r.loadChartsModule=s});