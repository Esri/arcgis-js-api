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
// See http://js.arcgis.com/3.38/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/i18n!../nls/jsapi","dojo/store/Memory","dojo/has","dojo/Evented","../kernel","../renderers/colorRampUtils","dijit/form/FilteringSelect","dojo/query","dojo/dom-style","dojo/on","dojo/dom-construct"],(function(t,e,i,o,a,n,l,r,s,d,p,h,m,c){var u=t([d,l],{declaredClass:"esri.dijit.ColorRampSelector",_colorRampNameMap:null,_colorRamps:null,_namesShown:!1,colorRamp:null,constructor:function(i){t.safeMixin(this,i),this._i18n=o.widgets.colorRampSelector,this._colorRamps=e.clone(s.predefinedColorRamps),this._colorRampNameMap=e.clone(s.predefinedColorRampNameMap)},startup:function(){this.inherited(arguments),this._styleDijitInput(),this._setupColorRampList(),this._setupDropdownEvents(),this._handleColorRampChange(),this._setColorRamp()},_setupDropdownEvents:function(){m(this.inputContainer,"click",e.hitch(this,this.toggleDropDown)),this.dropDownEventsSetup=!0},_setColorRamp:function(){var t=this.colorRamp;t&&(this.setSelected(t)||(this.addColorRamp(t),this.setSelected(t)))},_setupColorRampList:function(){this._generateColorRamps(),this._populateColorRampList()},_styleDijitInput:function(){var t=p(".dijitReset.dijitInputInner",this.domNode)[0];this.inputContainer=p(".dijitReset.dijitInputField.dijitInputContainer",this.domNode)[0],h.set(this.inputContainer,"height","25px!important"),h.set(t,"display","none")},_generateColorRamps:function(){var t,e=this._i18n.colorRamps;i.forEach(this._colorRamps,(function(i){"none"===i.id?i.label="<html><body><div style='padding: 5px 0px 5px 2px; font-weight: 700;'>"+e[i.id]+"</div></body></html>":(i.name=e[i.id]||i.name,n("ie")<=9?(i.labelGradient="<html><body><label style='display: block; padding: 4px 0px 0px 4px;'>"+i.name+"</label></body></html>",i.label=i.labelGradient):(t=this._generateColorRampDivs(i),i.labelGradient="<html><body><div title='"+i.name+"' style='height:20px; padding: 2px; direction: ltr!important;'>"+t+"</div></body></html>",this._namesShown?i.label="<html><body><label style='display: block; padding-left: 2px;'>"+i.name+"</label><div style='height:20px; padding: 2px; direction: ltr!important;'>"+t+"</div></body></html>":i.label=i.labelGradient))}),this)},_populateColorRampList:function(){this.set("labelAttr","label"),this.set("labelType","html"),this.set("searchAttr","id"),this.set("store",new a({data:this._colorRamps})),this._handleColorRampChange()},_generateColorRampDivs:function(t){if(t){var e,o="";return"multipart"===t.type?(e=100/t.colorRamps.length,i.forEach(t.colorRamps,(function(t){o+=this._generateSingleGradientDiv(t.fromColor,t.toColor,e)}),this)):o=this._generateSingleGradientDiv(t.fromColor,t.toColor,100),o}},_generateSingleGradientDiv:function(t,e,o){if(t&&e){var a,n="";return t=t.toRgb?t.toRgb():t,e=e.toRgb?e.toRgb():e,a="(90deg, rgb("+t.slice(0,3).join()+"), rgb("+e.slice(0,3).join()+"));",i.forEach(["-webkit-linear-gradient","-o-linear-gradient","-moz-linear-gradient","linear-gradient"],(function(t){n+="background: "+t+a})),"<div style=' display: inline-block; width:"+o+"%; padding: 0; height: 100%;"+n+"'></div>"}},onChange:function(){this.inherited(arguments),this._handleColorRampChange()},_handleColorRampChange:function(){var t;this.inputContainer&&(i.some(this._colorRamps,(function(e){if(e.id===this.value)return t=e,!0}),this)&&("none"===this.value||n("ie")<=9?this.inputContainer.innerHTML="<html><body><div style='padding: 4px 0px 0px 4px; font-weight: 400;'>"+c.toDom(t.label).innerHTML+"</div></body></html>":this.inputContainer.innerHTML=t.labelGradient,"none"===t.id?(this.colorRampName=null,this.colorRamp=null):(this.colorRampName=this._getColorRampName(t.id),this.colorRamp=t),this.emit("colorRamp-change",{colorRampName:this.colorRampName,colorRamp:this.colorRamp})))},_getColorRampName:function(t){var e;return i.some(this._colorRampNameMap,(function(i){if(i.id===t)return e=i.name,!0})),e},_getIndexById:function(t,e){return t.map((function(t){return t.id})).indexOf(e)},showNames:function(t){this._namesShown=t,this._setupColorRampList()},reset:function(){this.set("value","none",!1),this.isInverted=!1,this._handleColorRampChange()},removeColorRamp:function(t){t&&this.store&&this.store.data&&this.store.data.length&&this.store.remove(t.id)},addColorRamp:function(t){if(t){if(t.toJson&&(t=t.toJson()),n("ie")<=9)t.labelGradient="<label style='display: block; padding: 4px 0px 0px 4px;'>"+t.name+"</label>",t.label=t.labelGradient;else{var e=this._generateColorRampDivs(t),i=this.reverseRamp?"rtl":"ltr";t.labelGradient="<div title='"+t.name+"' style='height:18px; padding: 1px; direction: "+i+"!important;'>"+e+"</div>",this._namesShown?t.label="<label style='display: block; padding-left: 2px;'>"+t.name+"</label><div style='height:18px; padding: 1px; direction: ltr!important;'>"+e+"</div>":t.label=t.labelGradient}if(this.store&&this.store.data&&this.store.data.length)this.store.put(t,{overwrite:!0});else{var o=this._getIndexById(this._colorRamps,t.id);o>-1&&this._colorRamps.splice(o,1),this._colorRamps.push(t)}var a=this._getIndexById(this._colorRampNameMap,t.id);a>-1&&this._colorRampNameMap.splice(a,1),this._colorRampNameMap.push({id:t.id,name:t.name})}},setSelected:function(t,e){if(!t)return this.reset();var i=s.getColorRampId(t,this._colorRamps,this._colorRampNameMap);return i.id?(this.set("value",i.id,!1),this.isInverted=i.isInverted,this._handleColorRampChange(),!0):(this.reset(),!1)}});return n("extend-esri")&&e.setObject("dijit.ColorRampSelector",u,r),u}));