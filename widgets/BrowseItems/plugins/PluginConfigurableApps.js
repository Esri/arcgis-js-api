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
// See http://js.arcgis.com/4.2/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/kernel","dojo/_base/lang","dojo/Deferred","dojo/dom-class","dojo/query","../_AppTemplateFiltersMixin","../../../portal/PortalQueryParams","dojo/i18n!../nls/BrowseItems"],function(t,e,s,i,r,n,l,o,p){var a=t(null,{declaredClass:"esri.widgets.BrowseItems.plugins.PluginConfigurableApps",_css:{base:"esri-browseitems",button:"esri-button",close:"esri-button esri-close"},infoPanelTemplate:'<div><div class="template-info-showing"><div class="thumbnail"><img src="${item:_formatInfoPanelImage}"></div><h4>${item.title}</h4><div class="template-info"><p class="quiet-scroll">${item.snippet}</p></div></div><div class="panel-actions"><button class="${_css.button}" id="create-app">${i18n.items.createApp}</button><button class="${_css.button}" id="preview-app">${i18n.preview}</button><button class="${_css.button}" id="download-app">${i18n.download}</button><button class="${_css.close}" id="close-panel">${i18n.close}</button></div><div>',customGroupInfoPanelTemplate:'<div><div class="template-info-showing"><div class="thumbnail"><img src="${item:_formatInfoPanelImage}"></div><h4>${item.title}</h4><div class="template-info"><p class="quiet-scroll">${item.snippet}</p></div></div><div class="panel-actions"><button class="btn blue btn-main" id="create-app">${i18n.items.createApp}</button><button class="btn btn-secondary btn-wide" id="preview-app">${i18n.preview}</button><button class="btn btn-cancel" id="close-panel">${i18n.close}</button></div><div>',filters:s.mixin({},l.rootNodes.app),filterStrings:p.appTemplateFilters,rowsPerPage:9,extraClasses:[],_portal:null,_user:null,_groups:[],filterType:"all",constructor:function(t){s.mixin(this,t)},fetchData:function(){var t=[];return this._portal=this.parent.get("portal"),this._user=this._portal.user,this.parent.types=['type:"Web Mapping Application"'],this.helpLinkUrl||(this.helpLinkUrl=this._portal?this._portal.helpBase+this._portal.helpMap.m[120001055]:""),this._fetchGroups().then(s.hitch(this,function(e){return e=e||[],e.forEach(function(e){e&&e.id&&t.push('group:"'+e.id+'"')}),this._fetchGroupItems(t)}))},_fetchGroups:function(){var t,e;return t=this._portal.templatesGroupQuery||null,e=t&&t.split("id:")[1],e?this._fetchOrgConfigurableApps():this._fetchEsriConfigurableApps()},_fetchGroup:function(t,e){var r=new i;return this._groups[t]?r.resolve([this._groups[t]]):this._portal.queryGroups(e,!0).then(s.hitch(this,function(e){var s=e.total&&e.results&&e.results[0]||{};this._groups[t]=s,r.resolve([s])})),r},_fetchGroupItems:function(t){var e={groups:t,persistentTypekeywords:['-typekeywords:"Web AppBuilder"','-typekeywords:"WAB3D"'],types:['type:"Web Mapping Application"']};return"2d"===this.filterType?(e.persistentTypekeywords.push('-typekeywords:"3Dscene"'),delete this.filters.present,delete this.filters["3dscene"]):"3d"===this.filterType&&(e.persistentTypekeywords.push('typekeywords:"3Dscene"'),this.filters=null),this.parent._fetchItems(e)},_fetchEsriConfigurableApps:function(){var t=this._user&&this._user.culture||this._portal&&this._portal.culture||e.locale||"en",s=new o({query:'title:"Web Application Templates" AND owner:"esri_'+t.split("-")[0].toLowerCase()+'"'});return this._fetchGroup("esriGallery_"+t,s).then(function(t){return t||[]})},_fetchOrgConfigurableApps:function(){var t=this._portal.templatesGroupQuery||null,e=new o({query:t});return this.filters=null,this.rowsPerPage=8,this.extraClasses=["wide"],this.infoPanelTemplate=this.customGroupInfoPanelTemplate,this._fetchGroup("customGallery",e).then(s.hitch(this,function(t){var e=[];return t&&t.length&&t.length>0&&(this.parent.sortDescending=t[0].sortOrder&&"desc"===t[0].sortOrder,this.parent.sortAttribute=t[0].sortField||"asc",e.push(e[0])),e}))}});return s.mixin(a,{add:function(t,e){if(!t.plugin){var i=s.mixin(e,{parent:t,filterType:t.filterType});t.plugin=new a(i)}},remove:function(t){t.plugIn&&(t.plugin.destroy(),delete t.plugIn)}}),a});