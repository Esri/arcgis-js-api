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
// See http://js.arcgis.com/3.42/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./XmlFlattener","./xmlUtil","../../../../kernel"],(function(e,n,t,a,u,l,r){var s=e(null,{constructor:function(e){n.mixin(this,e)},interrogate:function(e,n){var a=(new u).flatten(e),r=a.prefixesByUri,s=a.valuesByPath,i={};t.forEach(n,(function(e){var n=e.interrogationRules;if(n&&0!==n.length){var a=l.makeGxeUrisByPrefix(e.getNamespaces()),u=e.key,o=n.length,c=0,h=!1;t.forEach(n,(function(e){var t,u=e.path;if(u)if(t=this._transformPath(r,a,u),this._evaluateMatch(s,t,e))c++;else if(n.must)return void(h=!0)}),this),!h&&c>0&&(i[u]={nRules:o,nRulesMatched:c})}}),this);var o={documentType:null,nRules:0,nRulesMatched:0};return t.forEach(n,(function(e){var n=e.key,t=null;n in i&&(t=i[n],null===o.documentType?(o.documentType=e,o.nRules=t.nRules,o.nRulesMatched=t.nRulesMatched):t.nRulesMatched>o.nRulesMatched&&t.nRules===t.nRulesMatched&&(o.documentType=e,o.nRules=t.nRules,o.nRulesMatched=t.nRulesMatched))})),o.documentType},_evaluateMatch:function(e,n,a){var u,l=!1,r=null;if(void 0!==a.value&&(r=a.value),n in e){if(null===r)return!0;u=e[n],l=t.some(u,(function(e){return r===e}))}return l},_transformPath:function(e,n,a){var u,l,r,s=[];return t.forEach(a.split("/"),(function(t){var a=-1!==t.indexOf("@");2===(u=t.replace("@","").split(":")).length?(l=null,(r=n[u[0]])&&(l=e[r]),l?(a&&(l="@"+l),s.push(l+":"+u[1])):s.push(t)):s.push(t)})),s.join("/")}});return a("extend-esri")&&n.setObject("dijit.metadata.base.xml.XmlInterrogator",s,r),s}));