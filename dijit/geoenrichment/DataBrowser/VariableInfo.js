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
// See http://js.arcgis.com/3.39/esri/copyright.txt for details.

define(["../../../declare","dojo/dom-construct","dojox/mvc/Templated","dojo/text!./templates/VariableInfo.html","dojo/i18n!../../../nls/jsapi"],(function(i,e,t,n,s){return i("esri.dijit.geoenrichment.VariableInfo",t,{nls:s=s.geoenrichment.dijit.VariableInfo,templateString:n,infoFields:null,postCreate:function(){if(this.inherited(arguments),"string"==typeof this.infoFields)this.infoFields=this.infoFields.split(",");else if(!(this.infoFields instanceof Array))return void(this.infoFields={});for(var i={},e=0;e<this.infoFields.length;e++){var t=this.infoFields[e],n=t.indexOf(":");if(n>0){var s=t.substr(n+1),a=this[(t=t.substr(0,n))+"Header"];a&&(a.innerHTML=s)}i[t]=!0}this.infoFields=i},_setVariableAttr:function(i){this.descriptionValue.innerHTML=i.description,this._updateGroup(i,"vintage");var t=i.filteringTags.Source;this._updateGroup(i,"source",t&&t.value),this._updateGroup(i,"fullName",!0),t=this._getOptionalField(i,"percentBase"),this._updateGroup(i,"percentBase",t&&this._getBaseFieldDescription(i,"percentBase")),t=this._getOptionalField(i,"averageBase"),this._updateGroup(i,"averageBase",t&&this._getBaseFieldDescription(i,"averageBase")),this._updateGroup(i,"indexBase",!0),this._updateGroup(i,"definition");var n=this._getOptionalField(i,"filteringTags");if(this.filteringTagsGroup.style.display=n?"":"none",n)for(var s in e.empty(this.filteringTagsValue),n){var a=n[s];e.create("div",{innerHTML:a.name+": "+a.value},this.filteringTagsValue)}},_getBaseFieldDescription:function(i,e){return i[e+"Alias"]+" ("+i[e]+")"},_updateGroup:function(i,e,t){void 0===t?t=i[e]:!0===t&&(t=this._getOptionalField(i,e));var n=this[e+"Value"];n.innerHTML=t,(n=this[e+"Group"]).style.display=t?"":"none"},_getOptionalField:function(i,e){return this.infoFields["*"]||this.infoFields[e]?i[e]:null}})}));