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
// See http://js.arcgis.com/3.33/esri/copyright.txt for details.

define(["dojo/dom-construct","dojo/dom-class","dojo/on","dijit/form/RadioButton","dojox/uuid/generateRandomUuid","./TooltipUtil"],(function(e,t,n,c,o,s){var a={};function i(o){var a=e.create("div",{},o.parentNode),i=new c({customID:o.customID,checked:o.checked,name:o.name},a);if(o.isWhite&&t.add(i.domNode,"isWhite"),o.iconClasses&&o.iconClasses.length){var l=e.create("div",{class:o.iconClasses||""},o.parentNode);n(l,"click",(function(){i.set("checked",!0),o.checkListener&&o.checkListener(o.customID)}))}var r=null;return o.label&&("object"!=typeof o.label&&"<"!==o.label.charAt(0)?(r=e.create("label",{class:o.labelClasses||"",innerHTML:"&nbsp;"+o.label},o.parentNode),o.title&&s.setTooltipToNode(r,o.title),t.add(r,"dijitInline dijitRadioLabel")):r=e.place(o.label,o.parentNode,"last"),n(r,"click",(function(){i.set("checked",!0),o.checkListener&&o.checkListener(o.customID)}))),o.checkListener&&n(i.domNode,"click",(function(){o.checkListener(o.customID)})),i.startup(),{radioButton:i,label:r}}return a.createRadioButton=i,a.createRadioButtonGroup=function(e){e.name||(e.name=o());var t={};return e.parentNodes.forEach((function(n,c){t[e.customIDs[c]]=i({parentNode:n,name:e.name,isWhite:e.isWhite,customID:e.customIDs[c],checked:e.customIDs[c]===e.checkedID,label:e.labels[c],labelClasses:e.labelClasses&&e.labelClasses.length?e.labelClasses[c]:e.labelClasses,title:e.titles&&e.titles[c]?e.titles[c]:"",iconClasses:e.iconClasses&&e.iconClasses.length?e.iconClasses[c]:e.iconClasses,checkListener:function(t){e.checkListener&&e.checkListener(t)}})})),{getButton:function(e){return t[e].radioButton},getLabel:function(e){return t[e].label},updateLabel:function(e,n){t[e].label.innerHTML=n},isChecked:function(e){return t[e].radioButton.get("checked")},check:function(n,c){for(var o in t)t[o].radioButton.set("checked",o===n);c||e.checkListener&&e.checkListener(n)},getValue:function(){var e=null;for(var n in t)if(t[n].radioButton.get("checked")){e=n;break}return e},destroy:function(){for(var e in t)t[e].radioButton.destroy();t={}}}},a}));