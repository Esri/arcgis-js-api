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

define(["./DateUtil","./ObjectUtil"],(function(e,r){var a={formatNumberCompact:function(a,t){if(!window.Intl)return r.formatNumber(a,t);t.locale=t.locale||e.getDateNumberLocale();var n=i(t.locale);if(!t.unitPrefix||!n||!n[t.unitPrefix])return l(a,t);var o="";switch(t.unitPrefix){case"kilo":a/=1e3,o=n.kilo;break;case"mega":a/=1e6,o=n.mega;break;case"giga":a/=1e9,o=n.giga;break;case"tera":a/=1e12,o=n.tera}return r.formatNumber(a,{locale:t.locale,places:t.places,noSeparator:t.noSeparator,preserveTrailingZeroes:t.preserveTrailingZeroes})+(o?t.unitPrefixSymbol||o:"")}},t={},i=function(e){var r=t[e];if(!1===r)return null;if(r)return r;var a=n();if(-1!==a.indexOf(e)||-1!==a.indexOf(e.substr(0,2))){var i=function(r){var a=l(r,{locale:e}),t=a.match(/(\d|\.|,)+/)[0];return a.replace(t,"")};t[e]={kilo:i(1e4),mega:i(1e7),giga:i(1e10),tera:i(1e13)}}else t[e]=!1;return t[e]},n=function(){return["ar","bs","cs","da","en","el","et","fi","fr","he","hr","hu","id","lv","lt","nl","nb","pl","pt-br","pt-pt","ro","ru","sl","sr","sv","th","tr","uk","vi","zh-hk","de","it","ca","es"]},l=function(e,r){return new Intl.NumberFormat(r.locale,{notation:"compact",compactDisplay:"short",minimumFractionDigits:r.places,maximumFractionDigits:r.places}).format(e)};return a}));