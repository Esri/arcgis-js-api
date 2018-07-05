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
// See http://js.arcgis.com/4.8/esri/copyright.txt for details.

define(["../support/_Tooltip","./recommendedScales","./ScaleRanges","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dojo/dom-class","dojo/dom-construct","dojo/dom-prop","dojo/dom-style","dojo/keys","dojo/number","dojo/on","dojo/query","dojo/string","dojox/html/entities","dojox/lang/functional/object","dojo/i18n!./nls/ScaleRangeSlider","dojo/text!./templates/ScaleMenu.html","dijit/form/TextBox"],function(e,t,s,a,n,i,l,c,o,r,d,u,h,m,p,_,S,g,f){return a.createSubclass([n,i,e],{declaredClass:"esri.dijit.ScaleRangeSlider.ScaleMenu",templateString:f,baseClass:"esri-scale-menu",labels:g,css:{header:"esri-scale-menu__header",content:"esri-scale-menu__content",current:"esri-scale-menu__item--current",input:"esri-scale-menu__input",list:"esri-scale-menu__list",item:"esri-scale-menu__item",inline:"esri-inline",selectable:"esri-selectable",secondaryLabel:"esri-scale-menu__label--secondary",hidden:"esri-hidden"},_elementValueMap:null,_elements:null,_scaleRangeCategories:null,_scaleRanges:null,_rangeToScaleAndNodeLookup:null,constructor:function(){this._scaleRanges=new s},buildRendering:function(){this.inherited(arguments),this._rangeToScaleAndNodeLookup={map:{scale:null,node:this.dap_mapScaleItem}};var e,s=this.labels,a=s.featuredScaleLabels,n=t.all(),i=this.css.item+" "+this.css.selectable;S.keys(n).forEach(function(t){e=a[t];var s=n[t],l=p.substitute(e,{scaleLabel:this._formatScale(s)}),o=c.create("li",{innerHTML:l,className:i},this.dap_recommendedScales);this._rangeToScaleAndNodeLookup[t]={scale:s,node:o}},this);var l=c.create("span",{innerHTML:s.setTo}),r=c.create("span",{innerHTML:s.selectOne,className:this.css.secondaryLabel});o.set(this.dap_scaleListHeader,"innerHTML",p.substitute(s.setToSelectOne,{setTo:l.outerHTML,selectOne:r.outerHTML}))},_formatScale:function(e){return"1:"+u.format(e)},postCreate:function(){this.inherited(arguments);var e="."+this.css.item+"."+this.css.selectable;this.own(h(this.domNode,h.selector(e,"click"),function(e){var t=e.target===this.dap_mapScaleItem?this.options.scale.map:this._parseScale(e.target.innerHTML);this._emitScaleSelected(t)}.bind(this))),this.dap_scaleInput.on("keyDown",function(e){e.keyCode===d.ENTER&&this._handleCustomScaleInput()}.bind(this)),this.createTooltip(this.dap_scaleInput,this.labels.customScaleInputTooltip)},_emitScaleSelected:function(e){this.emit("scale-selected",{scale:e})},_handleCustomScaleInput:function(){var e=this._parseScale(this.dap_scaleInput.get("value"));isNaN(e)||this._emitScaleSelected(this._scaleRanges.clampScale(e))},_parseScale:function(e){var t=/[^0-9.\s]/g,s=_.decode(e).replace(/.*\(/,"").replace(/\).*$/,"").replace(/.*1:/,"").replace(t,"");return u.parse(s)},_setOptionsAttr:function(e){var t=e.scale,s=this._formatScale(t.current);o.set(this.dap_currentScaleLabel,"innerHTML",e.label),this.dap_scaleInput.set("value",s,!1);var a=p.substitute(this.labels.featuredScaleLabels.current,{scaleLabel:this._formatScale(t.map)});this._rangeToScaleAndNodeLookup.map.scale=t.map,o.set(this.dap_mapScaleItem,"innerHTML",a),l.toggle(this.dap_mapScaleItem,this.css.hidden,-1===t.map),this._scaleRanges.set("scaleRangeBounds",{minScale:t.min,maxScale:t.max}),this._hideOutOfScaleRanges(),this._set("options",e)},_hideOutOfScaleRanges:function(){var e,t="."+this.css.item+"."+this.css.selectable,s=m(t,this.dap_recommendedScales),a=this._scaleRanges;S.keys(this._rangeToScaleAndNodeLookup).forEach(function(t){var s=this._rangeToScaleAndNodeLookup[t];e=s.scale,l.toggle(s.node,this.css.hidden,!a.contains(s.scale))},this);var n=s.every(function(e){return"none"===r.get(e,"display")});l.toggle(this.dap_recommendedScaleSection,this.css.hidden,n)}})});