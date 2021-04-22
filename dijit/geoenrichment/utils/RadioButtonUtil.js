// COPYRIGHT © 2021 Esri
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
// See http://js.arcgis.com/3.36/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-class","dojo/on","dijit/form/RadioButton","dojox/uuid/generateRandomUuid","./TooltipUtil"],(function(e,t,n,c,s,o){var a={};function i(s){var a=e.create("div",{},s.parentNode),i=new c({customID:s.customID,checked:s.checked,name:s.name},a);if(s.isWhite&&t.add(i.domNode,"isWhite"),s.iconClasses&&s.iconClasses.length){var l=e.create("div",{class:s.iconClasses||""},s.parentNode);n(l,"click",(function(){i.set("checked",!0),s.checkListener&&s.checkListener(s.customID)}))}var r=null;return s.label&&("object"!=typeof s.label&&"<"!==s.label.charAt(0)?(r=e.create("label",{class:s.labelClasses||"",innerHTML:"&nbsp;"+s.label},s.parentNode),s.title&&o.setTooltipToNode(r,s.title),t.add(r,"dijitInline dijitRadioLabel")):r=e.place(s.label,s.parentNode,"last"),n(r,"click",(function(){i.set("checked",!0),s.checkListener&&s.checkListener(s.customID)}))),s.checkListener&&n(i.domNode,"click",(function(){s.checkListener(s.customID)})),i.startup(),{radioButton:i,label:r}}return a.createRadioButton=i,a.createRadioButtonGroup=function(e){e.name||(e.name=s());var t={};return e.parentNodes.forEach((function(n,c){t[e.customIDs[c]]=i({parentNode:n,name:e.name,isWhite:e.isWhite,customID:e.customIDs[c],checked:e.customIDs[c]===e.checkedID,label:e.labels[c],labelClasses:e.labelClasses&&Array.isArray(e.labelClasses)?e.labelClasses[c]:e.labelClasses,title:e.titles&&e.titles[c]?e.titles[c]:"",iconClasses:e.iconClasses&&Array.isArray(e.iconClasses)?e.iconClasses[c]:e.iconClasses,checkListener:function(t){e.checkListener&&e.checkListener(t)}})})),{getButton:function(e){return t[e].radioButton},getLabel:function(e){return t[e].label},updateLabel:function(e,n){t[e].label.innerHTML=n},isChecked:function(e){return t[e].radioButton.get("checked")},check:function(n,c){for(var s in t)t[s].radioButton.set("checked",s===n);c||e.checkListener&&e.checkListener(n)},getValue:function(){var e=null;for(var n in t)if(t[n].radioButton.get("checked")){e=n;break}return e},destroy:function(){for(var e in t)t[e].radioButton.destroy();t={}}}},a}));