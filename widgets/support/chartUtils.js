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
// See http://js.arcgis.com/4.12/esri/copyright.txt for details.

define(["require","exports","../../core/tsSupport/generatorHelper","../../core/tsSupport/awaiterHelper","dojo/_base/kernel","@dojo/framework/shim/object","@dojo/framework/shim/Promise"],function(e,r,t,n,o){function l(e){for(var t=e.split("-"),n=t[0].toLowerCase(),o=Object.keys(r.locales),l=null,a=0,s=o;a<s.length;a++){var i=s[a];if(i.indexOf(n)>-1){l=r.locales[i];break}}return l}function a(){var e=o.locale;return e?r.locales[e]||l(e)||i:i}function s(r){return void 0===r&&(r=a()),n(this,void 0,void 0,function(){var n,o,l,a;return t(this,function(t){switch(t.label){case 0:return r===_?[2,c]:(_=r,[4,Promise.all([new Promise(function(r,t){e(["../../libs/amcharts4/index"],r,t)}),new Promise(function(t,n){e(["../../libs/amcharts4/lang/"+r],t,n)})])]);case 1:return n=t.sent(),o=n[0],l=n[1],a=o.am4core,r===_&&(a.options.defaultLocale=l.default),c=o,[2,o]}})})}Object.defineProperty(r,"__esModule",{value:!0});var i="en_US";r.locales={ar:"ar","bs-ba":"bs_BA","ca-es":"ca_ES","cs-cz":"cs_CZ","da-dk":"da_DK","de-ch":"de_CH","de-de":"de_DE","el-gr":"el_GR","en-ca":"en_CA","en-us":"en_US","es-es":"es_ES","et-ee":"et_EE","fi-fi":"fi_FI","fr-fr":"fr_FR","he-il":"he_IL","hi-in":"hi_IN","hr-hr":"hr_HR","hu-hu":"hu_HU","id-id":"id_ID","it-it":"it_IT","ja-jp":"ja_JP","ko-kr":"ko_KR","lt-lt":"lt_LT","lv-lv":"lv_LV","nb-no":"nb_NO","nl-nl":"nl_NL","pl-pl":"pl_PL","pt-br":"pt_BR","pt-pt":"pt_PT","ro-ro":"ro_RO","ru-ru":"ru_RU","sl-sl":"sl_SL","sr-rs":"sr_RS","sv-se":"sv_SE","th-th":"th_TH","tr-tr":"tr_TR","uk-ua":"uk_UA","vi-vn":"vi_VN","zh-cn":"zh_Hans","zh-hk":"zh_Hant","zh-tw":"zh_Hant"},r.getChartLocale=a;var _,c=null;r.loadChartsModule=s});