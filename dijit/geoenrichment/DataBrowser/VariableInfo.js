// COPYRIGHT © 2016 Esri
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
// See http://js.arcgis.com/3.18/esri/copyright.txt for details.

define(["../../../declare","dojo/dom-construct","dojox/mvc/Templated","dojo/text!./templates/VariableInfo.html","dojo/i18n!../../../nls/jsapi"],function(e,i,t,n,s){return s=s.geoenrichment.dijit.VariableInfo,e("esri.dijit.geoenrichment.VariableInfo",t,{nls:s,templateString:n,infoFields:null,postCreate:function(){if(this.inherited(arguments),"string"==typeof this.infoFields)this.infoFields=this.infoFields.split(",");else if(!(this.infoFields instanceof Array))return void(this.infoFields={});for(var e={},i=0;i<this.infoFields.length;i++){var t=this.infoFields[i],n=t.indexOf(":");if(n>0){var s=t.substr(n+1);t=t.substr(0,n);var a=this[t+"Header"];a&&(a.innerHTML=s)}e[t]=!0}this.infoFields=e},_setVariableAttr:function(e){this.descriptionValue.innerHTML=e.description,this._updateGroup(e,"vintage");var t=e.filteringTags.Source;this._updateGroup(e,"source",t&&t.value),this._updateGroup(e,"fullName",!0),t=this._getOptionalField(e,"percentBase"),this._updateGroup(e,"percentBase",t&&this._getBaseFieldDescription(e,"percentBase")),t=this._getOptionalField(e,"averageBase"),this._updateGroup(e,"averageBase",t&&this._getBaseFieldDescription(e,"averageBase")),this._updateGroup(e,"indexBase",!0);var n=this._getOptionalField(e,"filteringTags");if(this.filteringTagsGroup.style.display=n?"":"none",n){i.empty(this.filteringTagsValue);for(var s in n){var a=n[s];i.create("div",{innerHTML:a.name+": "+a.value},this.filteringTagsValue)}}},_getBaseFieldDescription:function(e,i){return e[i+"Alias"]+" ("+e[i]+")"},_updateGroup:function(e,i,t){"undefined"==typeof t?t=e[i]:t===!0&&(t=this._getOptionalField(e,i));var n=this[i+"Value"];n.innerHTML=t,n=this[i+"Group"],n.style.display=t?"":"none"},_getOptionalField:function(e,i){return this.infoFields["*"]||this.infoFields[i]?e[i]:null}})});