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

define(["../../kernel","../_EventedWidget","../_Tooltip","./recommendedScales","./ScaleRanges","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/_base/declare","dojo/_base/array","dojo/_base/lang","dojo/dom-class","dojo/dom-construct","dojo/dom-prop","dojo/dom-style","dojo/has","dojo/keys","dojo/number","dojo/on","dojo/query","dojo/string","dojox/html/entities","dojox/lang/functional/object","dojo/i18n!../../nls/jsapi","dojo/text!./templates/ScaleMenu.html","dijit/form/TextBox"],(function(e,t,s,a,i,n,l,c,o,r,d,h,u,p,m,S,_,g,f,b,j,T,L,v){var M=c([t,n,l,s],{declaredClass:"esri.dijit.VisibleScaleRangeSlider.ScaleMenu",templateString:v,baseClass:"esriScaleMenu",labels:L.widgets.visibleScaleRangeSlider,css:{header:"esriHeader",section:"esriSection",content:"esriContent",current:"esriCurrent",input:"esriInput",list:"esriList",item:"esriItem",inline:"esriInline",selectable:"esriSelectable",hidden:"esriHidden"},_elementValueMap:null,_elements:null,_scaleRangeCategories:null,_scaleRanges:null,_rangeToScaleAndNodeLookup:null,constructor:function(){this._scaleRanges=new i},buildRendering:function(){this.inherited(arguments),this._rangeToScaleAndNodeLookup={map:{scale:null,node:this.dap_mapScaleItem}};var e,t=this.labels,s=t.featuredScaleLabels,i=a.all(),n=this.css.item+" "+this.css.selectable;o.forEach(T.keys(i),(function(t){e=s[t];var a=i[t],l=b.substitute(e,{scaleLabel:this._formatScale(a)}),c=h.create("li",{innerHTML:l,className:n},this.dap_recommendedScales);this._rangeToScaleAndNodeLookup[t]={scale:a,node:c}}),this);var l=h.create("span",{innerHTML:t.setTo,className:this.css.inline}),c=h.create("span",{innerHTML:t.selectOne,className:this.css.inline});u.set(this.dap_scaleListHeader,"innerHTML",b.substitute(t.setToSelectOne,{setTo:l.outerHTML,selectOne:c.outerHTML}))},_formatScale:function(e){return"1:"+_.format(e)},postCreate:function(){this.inherited(arguments);var e="."+this.css.item+"."+this.css.selectable;this.own(g(this.domNode,g.selector(e,"click"),r.hitch(this,(function(e){var t=e.target===this.dap_mapScaleItem?this.options.scale.map:this._parseScale(e.target.innerHTML);this._emitScaleSelected(t)})))),this.dap_scaleInput.on("keyDown",r.hitch(this,(function(e){e.keyCode===S.ENTER&&this._handleCustomScaleInput()}))),this.createTooltip(this.dap_scaleInput,this.labels.customScaleInputTooltip)},_emitScaleSelected:function(e){this.emit("scale-selected",{scale:e})},_handleCustomScaleInput:function(){var e=this._parseScale(this.dap_scaleInput.get("value"));isNaN(e)||this._emitScaleSelected(this._scaleRanges.clampScale(e))},_parseScale:function(e){var t=j.decode(e).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*1:/,"").replace(/[^0-9.\s]/g,"");return _.parse(t)},_setOptionsAttr:function(e){var t=e.scale,s=this._formatScale(t.current);u.set(this.dap_currentScaleLabel,"innerHTML",e.label),this.dap_scaleInput.set("value",s,!1);var a=b.substitute(this.labels.featuredScaleLabels.current,{scaleLabel:this._formatScale(t.map)});this._rangeToScaleAndNodeLookup.map.scale=t.map,u.set(this.dap_mapScaleItem,"innerHTML",a),d.toggle(this.dap_mapScaleItem,this.css.hidden,-1===t.map),this._scaleRanges.set("scaleRangeBounds",{minScale:t.min,maxScale:t.max}),this._hideOutOfScaleRanges(),this._set("options",e)},_hideOutOfScaleRanges:function(){var e="."+this.css.item+"."+this.css.selectable,t=f(e,this.dap_recommendedScales),s=this._scaleRanges;o.forEach(T.keys(this._rangeToScaleAndNodeLookup),(function(e){var t=this._rangeToScaleAndNodeLookup[e];t.scale,d.toggle(t.node,this.css.hidden,!s.contains(t.scale))}),this);var a=t.every((function(e){return"none"===p.get(e,"display")}));d.toggle(this.dap_recommendedScaleSection,this.css.hidden,a)}});return m("extend-esri")&&r.setObject("dijit.ScaleMenu",M,e),M}));