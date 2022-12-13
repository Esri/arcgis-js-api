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

define(["dojo/dom-construct","dojo/dom-class","dojo/on","dijit/form/RadioButton","dojox/uuid/generateRandomUuid","./TooltipUtil"],(function(e,t,n,s,a,c){var i={};function o(a){var i=e.create("div",{},a.parentNode),o=new s({customID:a.customID,checked:a.checked,name:a.name},i);if(a.isWhite&&t.add(o.domNode,"isWhite"),a.iconClasses&&a.iconClasses.length){var l=e.create("div",{class:a.iconClasses||""},a.parentNode);n(l,"click",(function(){o.set("checked",!0),a.checkListener&&a.checkListener(a.customID)}))}var r=null;return a.label&&("string"==typeof a.label&&"<"!==a.label.charAt(0)?(r=e.create("label",{class:a.labelClasses||"",innerHTML:"&nbsp;"+a.label},a.parentNode),a.title&&c.setTooltipToNode(r,a.title),t.add(r,"dijitInline dijitRadioLabel")):r="string"==typeof a.label&&"<"===a.label.charAt(0)?e.create("div",{class:"dijitInline "+(a.labelClasses||""),innerHTML:a.label},a.parentNode):e.place(a.label,a.parentNode),n(r,"click",(function(){o.set("checked",!0),a.checkListener&&a.checkListener(a.customID)}))),a.checkListener&&n(o.domNode,"click",(function(){a.checkListener(a.customID)})),o.startup(),{radioButton:o,label:r}}return i.createRadioButton=o,i.createRadioButtonGroup=function(e){e.name||(e.name=a());var t={};return e.parentNodes.forEach((function(n,s){t[e.customIDs[s]]=o({parentNode:n,name:e.name,isWhite:e.isWhite,customID:e.customIDs[s],checked:e.customIDs[s]===e.checkedID,label:e.labels[s],labelClasses:e.labelClasses&&Array.isArray(e.labelClasses)?e.labelClasses[s]:e.labelClasses,title:e.titles&&e.titles[s]?e.titles[s]:"",iconClasses:e.iconClasses&&Array.isArray(e.iconClasses)?e.iconClasses[s]:e.iconClasses,checkListener:function(t){e.checkListener&&e.checkListener(t)}})})),{getButton:function(e){return t[e].radioButton},getLabel:function(e){return t[e].label},updateLabel:function(e,n){t[e].label.innerHTML=n},isChecked:function(e){return t[e].radioButton.get("checked")},check:function(n,s){for(var a in t)t[a].radioButton.set("checked",a===n);s||e.checkListener&&e.checkListener(n)},getValue:function(){var e=null;for(var n in t)if(t[n].radioButton.get("checked")){e=n;break}return e},destroy:function(){for(var e in t)t[e].radioButton.destroy();t={}}}},i}));