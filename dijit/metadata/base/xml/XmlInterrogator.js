// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.21/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/has","./XmlFlattener","./xmlUtil","../../../../kernel"],function(e,n,t,a,u,l,r){var s=e(null,{constructor:function(e){n.mixin(this,e)},interrogate:function(e,n){var a=new u,r=a.flatten(e),s=r.prefixesByUri,i=r.valuesByPath,o={};t.forEach(n,function(e){var n=e.interrogationRules;if(n&&0!==n.length){var a=l.makeGxeUrisByPrefix(e.getNamespaces()),u=e.key,r=n.length,c=0,h=!1;t.forEach(n,function(e){var t,u,l=e.path;if(l)if(t=this._transformPath(s,a,l),u=this._evaluateMatch(i,t,e))c++;else if(n.must)return void(h=!0)},this),!h&&c>0&&(o[u]={nRules:r,nRulesMatched:c})}},this);var c={documentType:null,nRules:0,nRulesMatched:0};return t.forEach(n,function(e){var n=e.key,t=null;n in o&&(t=o[n],null===c.documentType?(c.documentType=e,c.nRules=t.nRules,c.nRulesMatched=t.nRulesMatched):t.nRulesMatched>c.nRulesMatched&&t.nRules===t.nRulesMatched&&(c.documentType=e,c.nRules=t.nRules,c.nRulesMatched=t.nRulesMatched))}),c.documentType},_evaluateMatch:function(e,n,a){var u,l=!1,r=null;if("undefined"!=typeof a.value&&(r=a.value),n in e){if(null===r)return!0;u=e[n],l=t.some(u,function(e){return r===e})}return l},_transformPath:function(e,n,a){var u,l,r,s=[];return t.forEach(a.split("/"),function(t){var a=-1!==t.indexOf("@");u=t.replace("@","").split(":"),2===u.length?(l=null,r=n[u[0]],r&&(l=e[r]),l?(a&&(l="@"+l),s.push(l+":"+u[1])):s.push(t)):s.push(t)}),s.join("/")}});return a("extend-esri")&&n.setObject("dijit.metadata.base.xml.XmlInterrogator",s,r),s});