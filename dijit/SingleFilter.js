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

define(["require","dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/_base/connect","dojo/_base/json","dojo/has","dojo/json","dojo/string","dojo/number","dojo/dom","dojo/dom-style","dojo/dom-attr","dojo/dom-construct","dojo/query","dojo/dom-class","dojo/_base/event","dojo/Evented","dojo/data/ItemFileWriteStore","dojo/date/locale","dojo/parser","dijit/_WidgetBase","dijit/_TemplatedMixin","dijit/_WidgetsInTemplateMixin","dijit/_OnDijitClickMixin","dijit/_FocusMixin","dijit/registry","dijit/form/TextBox","dijit/form/FilteringSelect","dijit/form/RadioButton","dijit/form/DateTextBox","dijit/form/NumberTextBox","../config","../kernel","../lang","../tasks/GenerateRendererTask","../tasks/UniqueValueDefinition","../tasks/GenerateRendererParameters","../layers/FeatureLayer","../layers/GeoRSSLayer","./analysis/ItemTypes","dojo/i18n!../nls/jsapi","dojo/text!./templates/SingleFilter.html"],(function(e,t,i,a,s,r,n,l,o,d,u,h,p,c,b,m,f,v,g,y,O,I,V,C,L,j,D,k,T,w,N,S,F,B,E,H,x,A,q,_,U,M,R){var W=t([I,V,C,L,j,v],{declaredClass:"esri.dijit.SingleFilter",widgetsInTemplate:!0,templateString:R,valueHandlers:[],onFieldChangeEnabled:!0,onOperatorChangeEnabled:!0,onPromptChangeHandler:null,onHintChangeHandler:null,fieldDomains:{},fieldsStore:null,fieldsInfo:{stringFieldsCount:0,numberFieldsCount:0,dateFieldsCount:0},stringOperatorStore:null,dateOperatorStore:null,numberOperatorStore:null,uniqueValuesStore:null,isEnableInteractiveFilter:!0,uniqueValuesResults:{},partsObj:null,dayInMS:86399e3,allowAllDateTypes:!1,showUnique:!0,postMixInProperties:function(){this.inherited(arguments),this.i18n={},this.i18n=i.mixin(this.i18n,M.filterDlg)},parseExpressionTemplate:function(){var e=function(e,r){u.byId(r).className="attributeValueContainer","field_dropdown"===e?u.byId(r).innerHTML=t:"operator_dropdown"===e?u.byId(r).innerHTML=i:"values_input"===e?u.byId(r).innerHTML=a+s:console.error("problem with expressionTemplate from localization file")},t='<select id="'+this.id+'.fieldsList" class="attributeField" data-dojo-type="dijit/form/FilteringSelect" maxHeight="150" sortByLabel="true"></select>',i='<select id="'+this.id+'.operatorList" class="operator" data-dojo-type="dijit/form/FilteringSelect" maxHeight="150" sortByLabel="false"></select>',a='<div id="'+this.id+'.attributeValueContainer"></div>',s='<div class="attributeValueOptions"><table cellpadding="0" cellspacing="0">  <tbody>    <tr>      <td nowrap="nowrap">        <input id="'+this.id+'.radioValue" class="radioValue attributeValueRadio" checked="checked" name="'+this.id+'.inputOption" data-dojo-type="dijit/form/RadioButton" title="'+this.i18n.valueTooltip+'"/>        <label class="labels" title="'+this.i18n.valueTooltip+'">'+this.i18n.value+'        </label>      </td>      <td nowrap="nowrap" class="esriLeadingPadding05">        <input id="'+this.id+'.radioFields" class="radioFields attributeValueRadio" name="'+this.id+'.inputOption" data-dojo-type="dijit/form/RadioButton" title="'+this.i18n.fieldTooltip+'"/>        <label class="labels" title="'+this.i18n.fieldTooltip+'">'+this.i18n.field+'        </label>      </td>      <td id="'+this.id+'.radioUniqueColumn" nowrap="nowrap" class="esriLeadingPadding05">        <input id="'+this.id+'.radioUnique" class="radioUnique attributeValueRadio" name="'+this.id+'.inputOption" data-dojo-type="dijit/form/RadioButton" title="'+this.i18n.uniqueValueTooltip+'"/>        <label class="labels" title="'+this.i18n.uniqueValueTooltip+'">'+this.i18n.uniqueValues+"        </label>      </td>    </tr>  </tbody></table></div>",r=this.i18n.expressionTemplate,n=r.indexOf("${"),l=r.substring(0,n).trim();u.byId(this.id+".column1").innerHTML=l.length?"<div class='attributeText'>"+l+"</div>":"";var o=r.indexOf("}",n+1),d=r.substring(n+2,o);e(d,this.id+".column2"),n=r.indexOf("${",n+1),l=r.substring(o+1,n).trim(),u.byId(this.id+".column3").innerHTML=l.length?"<div class='attributeText'>"+l+"</div>":"",o=r.indexOf("}",n+1),e(d=r.substring(n+2,o),this.id+".column4"),n=r.indexOf("${",n+1),l=r.substring(o+1,n).trim(),u.byId(this.id+".column5").innerHTML=l.length?"<div class='attributeText'>"+l+"</div>":"",o=r.indexOf("}",n+1),e(d=r.substring(n+2,o),this.id+".column6"),l=r.substring(o+1,r.length).trim(),u.byId(this.id+".column7").innerHTML=l.length?"<div class='attributeText'>"+l+"</div>":""},postCreate:function(){this.inherited(arguments),this.parseExpressionTemplate(),this.createOperatorStores(),this.createFieldsStore(this.fields),this.readCodedValues(),O.parse(u.byId(this.id+".exprTable")).then(i.hitch(this,(function(e){s.connect(this.getFieldsList(),"onChange",this,"onChangeField"),s.connect(this.getOperatorList(),"onChange",this,"onChangeOperator"),s.connect(D.byId(this.id+".radioValue"),"onClick",this,"showValueInput"),s.connect(D.byId(this.id+".radioFields"),"onClick",this,"showFields"),s.connect(D.byId(this.id+".radioUnique"),"onClick",this,"showUniqueList"),this.version&&this.version<10.1&&this.mapLayer.url&&this.showUnique&&h.set(u.byId(this.id+".radioUniqueColumn"),"display","none"),s.connect(u.byId(this.id+".deleteExpression"),"onclick",this,"onClickDeleteExpression"),s.connect(this.interactiveCheck,"onclick",this,"onInteractiveClick"),s.connect(this.interactiveArrow,"onclick",this,"onClickShowHideInteractive"),this.enableInteractiveHandlers(),this.isEnableInteractiveFilter||h.set(this._interactiveFilterRow,"display","none"),h.set(u.byId(this.id+".radioUniqueColumn"),"display",this.showUnique?"block":"none"),this.own(this.watch("showUnique",i.hitch(this,(function(e,t,i){h.set(u.byId(this.id+".radioUniqueColumn"),"display",i?"block":"none")}))))})))},constructor:function(e,t){this.id=e.id||"",this.owner=e.owner,this.version=e.version,this.part=e.part,this.fields=e.fields,this.mapLayer=e.mapLayer,!1===e.enableEvents&&(this.onFieldChangeEnabled=!1,this.onOperatorChangeEnabled=!1)},init:function(e){(!e.part||this.mapLayer&&e.mapLayer&&this.mapLayer.id!==e.mapLayer.id)&&(this.clearAttributeValueDijits(),this.mapLayer=e.mapLayer,this.version=e.version,this.fields=e.fields,this.createOperatorStores(),this.createFieldsStore(this.fields),this.readCodedValues(),this.fillFieldsList(this.fieldsStore),this.onChangeField()),e.part&&(this.part=e.part,this.onFieldChangeEnabled=!1,this.onOperatorChangeEnabled=!1,this.buildEditUIField(this.part,this))},destroy:function(){this.onFieldChangeEnabled=!1,this.onOperatorChangeEnabled=!1,this.clearAttributeValueDijits(),a.forEach(D.findWidgets(u.byId(this.id)),(function(e){e.destroyRecursive()})),this.inherited(arguments)},toJson:function(){var e=null;return this.isInteractiveChecked()&&(e={prompt:this.promptText.attr("value"),hint:this.hintText.attr("value")}),{fieldObj:this.getField(),operator:this.getOperator(),valueObj:this.getValue(),interactiveObj:e}},buildFriendlyTextExpr:function(e){var t=this.i18n.expressionTemplate,i=function(e,i,a){return o.substitute(t,{field_dropdown:e,operator_dropdown:i,values_input:a})};if(!1===e.valueObj.isValid)return"&lt;expression is missing value&gt;";var a="";if("string"===e.fieldObj.shortType)if(e.operator===this.i18n.stringOperatorIsBlank||e.operator===this.i18n.stringOperatorIsNotBlank)a=i(e.fieldObj.label,e.operator,"");else if("field"===e.valueObj.type)a=i(e.fieldObj.label,e.operator,e.valueObj.label);else{var s=this.getDecodedValue(e.interactiveObj?e.interactiveObj.value:e.valueObj.value,e.fieldObj.name);a=i(e.fieldObj.label,e.operator,"'"+s+"'")}else if("number"===e.fieldObj.shortType)if(e.operator===this.i18n.numberOperatorIsBetween||e.operator===this.i18n.numberOperatorIsNotBetween){var r=e.interactiveObj?e.interactiveObj.value1:e.valueObj.value1,n=e.interactiveObj?e.interactiveObj.value2:e.valueObj.value2;a=i(e.fieldObj.label,e.operator,d.format(r,{pattern:"#####0.##########"})+" "+this.i18n.andBetweenValues+" "+d.format(n,{pattern:"#####0.##########"}))}else if(e.operator===this.i18n.numberOperatorIsBlank||e.operator===this.i18n.numberOperatorIsNotBlank)a=i(e.fieldObj.label,e.operator,"");else if("field"===e.valueObj.type)a=i(e.fieldObj.label,e.operator,e.valueObj.label);else{s=e.interactiveObj?e.interactiveObj.value:e.valueObj.value;var l=this.getDecodedValue(s,e.fieldObj.name);a=i(e.fieldObj.label,e.operator,s!==l?"'"+l+"'":d.format(s,{pattern:"#####0.##########"}))}else E.isDefined(e.valueObj.value)&&"field"!==e.valueObj.type&&"string"==typeof e.valueObj.value&&(e.valueObj.value=new Date(e.valueObj.value)),a=e.operator===this.i18n.dateOperatorIsBetween||e.operator===this.i18n.dateOperatorIsNotBetween?i(e.fieldObj.label,e.operator,(e.interactiveObj?this.formatFriendlyDate(e.interactiveObj.value1):this.formatFriendlyDate(e.valueObj.value1))+" "+this.i18n.andBetweenValues+" "+(e.interactiveObj?this.formatFriendlyDate(e.interactiveObj.value2):this.formatFriendlyDate(this.addDay(e.valueObj.value2)))):e.operator===this.i18n.dateOperatorIsBlank||e.operator===this.i18n.dateOperatorIsNotBlank?i(e.fieldObj.label,e.operator,""):"field"===e.valueObj.type?i(e.fieldObj.label,e.operator,e.valueObj.label):i(e.fieldObj.label,e.operator,e.interactiveObj?this.formatFriendlyDate(e.interactiveObj.value):this.formatFriendlyDate(e.valueObj.value));return a},builtSingleFilterString:function(e,t){if(E.isDefined(e.valueObj.isValid)&&!e.valueObj.isValid)return{whereClause:null};var i=e.valueObj.value,a=e.valueObj.value1,s=e.valueObj.value2,r=!1;if(e.interactiveObj){if(!e.interactiveObj.prompt||!e.interactiveObj.hint)return{whereClause:null};E.isDefined(t)&&(r=!0,E.isDefined(e.valueObj.value)&&(i="{"+t+"}"),E.isDefined(e.valueObj.value1)&&(a="{"+t+"}"),E.isDefined(e.valueObj.value2)&&(s="{"+(t+1)+"}"))}var n="",l=e.fieldObj.name;if(this.mapLayer&&this.mapLayer.url&&-1!==this.mapLayer.url.indexOf("BigDataCatalogServer")&&this.hasWhiteSpace(l)&&(l='"'+l+'"'),"string"===e.fieldObj.shortType){var o="";switch(i&&"field"!==e.valueObj.type&&this.isHostedService(this.mapLayer.url)&&this.containsNonLatinCharacter(i)&&(o="N"),e.operator){case this.i18n.stringOperatorIs:n="field"===e.valueObj.type?l+" = "+i:l+" = "+o+"'"+i.replace(/\'/g,"''")+"'";break;case this.i18n.stringOperatorIsNot:n="field"===e.valueObj.type?l+" <> "+i:l+" <> "+o+"'"+i.replace(/\'/g,"''")+"'";break;case this.i18n.stringOperatorStartsWith:n=l+" LIKE "+o+"'"+i.replace(/\'/g,"''")+"%'";break;case this.i18n.stringOperatorEndsWith:n=l+" LIKE "+o+"'%"+i.replace(/\'/g,"''")+"'";break;case this.i18n.stringOperatorContains:n=l+" LIKE "+o+"'%"+i.replace(/\'/g,"''")+"%'";break;case this.i18n.stringOperatorDoesNotContain:n=l+" NOT LIKE "+o+"'%"+i.replace(/\'/g,"''")+"%'";break;case this.i18n.stringOperatorIsBlank:n=l+" IS NULL";break;case this.i18n.stringOperatorIsNotBlank:n=l+" IS NOT NULL"}}else if("number"===e.fieldObj.shortType)switch(e.operator){case this.i18n.numberOperatorIs:n=l+" = "+i;break;case this.i18n.numberOperatorIsNot:n=l+" <> "+i;break;case this.i18n.numberOperatorIsAtLeast:n=l+" >= "+i;break;case this.i18n.numberOperatorIsLessThan:n=l+" < "+i;break;case this.i18n.numberOperatorIsAtMost:n=l+" <= "+i;break;case this.i18n.numberOperatorIsGreaterThan:n=l+" > "+i;break;case this.i18n.numberOperatorIsBetween:n=l+" BETWEEN "+a+" AND "+s;break;case this.i18n.numberOperatorIsNotBetween:n=l+" NOT BETWEEN "+a+" AND "+s;break;case this.i18n.numberOperatorIsBlank:n=l+" IS NULL";break;case this.i18n.numberOperatorIsNotBlank:n=l+" IS NOT NULL"}else switch(E.isDefined(i)&&"field"!==e.valueObj.type&&"string"==typeof i&&(i=this.parseFriendlyDate(i)),e.operator){case this.i18n.dateOperatorIsOn:n="field"===e.valueObj.type?l+" = "+i:r?l+" BETWEEN "+(this.supportsStandardizedQuery?"timestamp ":"")+"'{"+t+"}' AND "+(this.supportsStandardizedQuery?"timestamp ":"")+"'{"+(t+1)+"}'":l+" BETWEEN "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(i)+"' AND "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(this.addDay(i))+"'";break;case this.i18n.dateOperatorIsNotOn:n="field"===e.valueObj.type?l+" <> "+i:r?l+" NOT BETWEEN "+(this.supportsStandardizedQuery?"timestamp ":"")+"'{"+t+"}' AND "+(this.supportsStandardizedQuery?"timestamp ":"")+"'{"+(t+1)+"}'":l+" NOT BETWEEN "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(i)+"' AND "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(this.addDay(i))+"'";break;case this.i18n.dateOperatorIsBefore:n="field"===e.valueObj.type?l+" < "+i:l+" < "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(i)+"'";break;case this.i18n.dateOperatorIsAfter:n="field"===e.valueObj.type?l+" > "+i:l+" > "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(this.addDay(i))+"'";break;case this.i18n.dateOperatorIsBetween:n=r?l+" BETWEEN '"+a+"' AND '"+s+"'":l+" BETWEEN "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(a)+"' AND "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(this.addDay(s))+"'";break;case this.i18n.dateOperatorIsNotBetween:n=r?l+" NOT BETWEEN '"+a+"' AND '"+s+"'":l+" NOT BETWEEN "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(a)+"' AND "+(this.supportsStandardizedQuery?"timestamp ":"")+"'"+this.formatDate(this.addDay(s))+"'";break;case this.i18n.dateOperatorIsBlank:n=l+" IS NULL";break;case this.i18n.dateOperatorIsNotBlank:n=l+" IS NOT NULL"}return{whereClause:n}},showDeleteIcon:function(){h.set(u.byId(this.id+".deleteExpression"),"display","block")},hideDeleteIcon:function(){h.set(u.byId(this.id+".deleteExpression"),"display","none")},createFieldsStore:function(e){if(e&&e.length){var t=i.clone(e);t=t.sort((function(e,t){return e.label=e.alias||e.name,t.label=t.alias||t.name,e.label<t.label?-1:e.label>t.label?1:0}));var s=this.isHostedService(this.mapLayer.url);this.supportsStandardizedQuery=this.mapLayer.version>=10.2&&(this.mapLayer.useStandardizedQueries||this.isBigDataLayer(this.mapLayer));var r=a.filter(t,(function(e,t){return!!("esriFieldTypeString"===e.type||"esriFieldTypeDouble"===e.type||"esriFieldTypeSingle"===e.type||"esriFieldTypeInteger"===e.type||"esriFieldTypeSmallInteger"===e.type||"esriFieldTypeDate"===e.type&&(this.allowAllDateTypes||s||this.supportsStandardizedQuery))}),this),n=a.map(r,(function(e,t){var i;switch(e.type){case"esriFieldTypeString":i="string",this.fieldsInfo.stringFieldsCount++;break;case"esriFieldTypeDate":i="date",this.fieldsInfo.dateFieldsCount++;break;default:i="number",this.fieldsInfo.numberFieldsCount++}return{id:t,label:e.label,shortType:i,alias:e.alias,editable:e.editable,name:e.name,nullable:e.nullable,type:e.type}}),this);n.length&&(this.fieldsStore=new g({data:{identifier:"id",label:"label",items:n}}))}},createOperatorStores:function(){var e=[];e.push({name:this.i18n.stringOperatorIs,name_:this.i18n.stringOperatorIs,id:0}),e.push({name:this.i18n.stringOperatorIsNot,name_:this.i18n.stringOperatorIsNot,id:1}),e.push({name:this.i18n.stringOperatorStartsWith,name_:this.i18n.stringOperatorStartsWith,id:2}),e.push({name:this.i18n.stringOperatorEndsWith,name_:this.i18n.stringOperatorEndsWith,id:3}),e.push({name:this.i18n.stringOperatorContains,name_:this.i18n.stringOperatorContains,id:4}),e.push({name:this.i18n.stringOperatorDoesNotContain,name_:this.i18n.stringOperatorDoesNotContain,id:5}),e.push({name:this.i18n.stringOperatorIsBlank,name_:this.i18n.stringOperatorIsBlank,id:6}),e.push({name:this.i18n.stringOperatorIsNotBlank,name_:this.i18n.stringOperatorIsNotBlank,id:7}),this.stringOperatorStore=new g({data:{label:"name",identifier:"id",items:e}}),(e=[]).push({name:this.i18n.dateOperatorIsOn,id:0}),e.push({name:this.i18n.dateOperatorIsNotOn,id:1}),e.push({name:this.i18n.dateOperatorIsBefore,id:2}),e.push({name:this.i18n.dateOperatorIsAfter,id:3}),e.push({name:this.i18n.dateOperatorIsBetween,id:6}),e.push({name:this.i18n.dateOperatorIsNotBetween,id:7}),e.push({name:this.i18n.dateOperatorIsBlank,id:8}),e.push({name:this.i18n.dateOperatorIsNotBlank,id:9}),this.dateOperatorStore=new g({data:{label:"name",identifier:"id",items:e}}),(e=[]).push({name:this.i18n.numberOperatorIs,name_:this.i18n.numberOperatorIs,id:0}),e.push({name:this.i18n.numberOperatorIsNot,name_:this.i18n.numberOperatorIsNot,id:1}),e.push({name:this.i18n.numberOperatorIsAtLeast,name_:this.i18n.numberOperatorIsAtLeast,id:2}),e.push({name:this.i18n.numberOperatorIsLessThan,name_:this.i18n.numberOperatorIsLessThan,id:3}),e.push({name:this.i18n.numberOperatorIsAtMost,name_:this.i18n.numberOperatorIsAtMost,id:4}),e.push({name:this.i18n.numberOperatorIsGreaterThan,name_:this.i18n.numberOperatorIsGreaterThan,id:5}),e.push({name:this.i18n.numberOperatorIsBetween,name_:this.i18n.numberOperatorIsBetween,id:6}),e.push({name:this.i18n.numberOperatorIsNotBetween,name_:this.i18n.numberOperatorIsNotBetween,id:7}),e.push({name:this.i18n.numberOperatorIsBlank,name_:this.i18n.numberOperatorIsBlank,id:8}),e.push({name:this.i18n.numberOperatorIsNotBlank,name_:this.i18n.numberOperatorIsNotBlank,id:9}),this.numberOperatorStore=new g({data:{label:"name",identifier:"id",items:e}})},readCodedValues:function(){a.forEach(this.mapLayer.fields,(function(e){e.domain&&e.domain.codedValues&&(this.fieldDomains[e.name]=e.domain.codedValues)}),this)},getDecodedValue:function(e,t){var i,a,s=this.getCodedValues(t);if(s)for(i=0;i<s.length;i+=1)if((a=s[i]).code===e)return a.name;return e},getCodedValues:function(e){return this.fieldDomains[e]},getFieldsList:function(){return D.byId(this.id+".fieldsList")},getOperatorList:function(){return D.byId(this.id+".operatorList")},getValueFieldsList:function(){return D.byId(this.id+".valueFields")},getAttrValContNode:function(){return u.byId(this.id+".attributeValueContainer")},getField:function(){var e=this.getFieldsList();return{name:e.store.getValue(e.item,"name"),label:e.store.getValue(e.item,"label"),shortType:e.store.getValue(e.item,"shortType"),type:e.store.getValue(e.item,"type")}},getOperator:function(){var e=this.getOperatorList();return e.item?e.store.getValue(e.item,"name"):""},getValue:function(){return{}},isInteractiveChecked:function(){return this.interactiveCheck.checked},setInteractiveSection:function(e,t,i){this.disableInteractiveHandlers(),this.interactiveCheck.checked=e,this.promptText.attr("value",t),this.hintText.attr("value",i),h.set(this.interactiveSpace,"display","block"),this.interactiveArrow.innerHTML="&nbsp;&#9650;",this.enableInteractiveHandlers()},enableInteractiveHandlers:function(){this.onPromptChangeHandler=s.connect(this.promptText,"onChange",this,"onChangeInteractive"),this.onHintchangeHandler=s.connect(this.hintText,"onChange",this,"onChangeInteractive")},disableInteractiveHandlers:function(){s.disconnect(this.onPromptChangeHandler),s.disconnect(this.onHintChangeHandler)},fillFieldsList:function(e){var t=this.getFieldsList();t.set("labelAttr","label"),t.set("searchAttr","label"),t.set("store",e),t.set("value",0)},fillOperatorList:function(e,t,a){var s=this.getOperatorList();if(s.set("labelAttr","name"),s.set("searchAttr","name"),s.set("query",a||{}),s.set("store",e),t)for(var r=!1,n=0;n<20&&(e.fetchItemByIdentity({identity:n,onItem:i.hitch(this,(function(e){e&&e.name[0]===t&&(s.set("value",e.id[0]),r=!0)}))}),!r);n++);else s.set("value",0)},createValueString:function(e){var t=this.getAttrValContNode();if(this.clearAttributeValueDijits(),c.empty(t),e){var i=new T({id:this.id+".value",class:"attributeValue",maxHeight:150,sortByLabel:!0},c.create("div",{},t)),a=this.buildCodedValuesStore(e);i.set("store",a),i.set("value",0),this.valueHandlers.push(s.connect(i,"onChange",this,"onValueChange"))}else{var r=new k({id:this.id+".value",class:"attributeValue",required:!0,placeHolder:"",intermediateChanges:!0},c.create("div",{},t));this.valueHandlers.push(s.connect(r,"onChange",this,"onValueChange"))}this.checkDefaultOption(),this.getValue=function(){var t,i=D.byId(this.id+".value"),a=!0;return e?i.item?t=i.item.code[0]:(t="",a=!1):a=t=i.get("value"),{value:t,isValid:a}}},createValueDate:function(){var e=this.getAttrValContNode();this.clearAttributeValueDijits(),c.empty(e);var t=new N({id:this.id+".value",class:"attributeValue",trim:!0,required:!0,placeHolder:"",constraints:{formatLength:"short"}},c.create("div",{},e));this.checkDefaultOption(),this.valueHandlers.push(s.connect(t,"onChange",this,"onValueChange")),this.getValue=function(){var e=D.byId(this.id+".value").get("value");return{value:e,isValid:E.isDefined(e)}}},createValueNumber:function(e){var t=this.getAttrValContNode();if(this.clearAttributeValueDijits(),c.empty(t),e){var i=new T({id:this.id+".value",class:"attributeValue",maxHeight:150,sortByLabel:!0},c.create("div",{},t)),a=this.buildCodedValuesStore(e);i.set("store",a),i.set("value",0),this.valueHandlers.push(s.connect(i,"onChange",this,"onValueChange"))}else{var r=new S({id:this.id+".value",class:"attributeValue",required:!0,placeHolder:"",intermediateChanges:!0,constraints:{pattern:"#####0.##########"}},c.create("div",{},t));this.valueHandlers.push(s.connect(r,"onChange",this,"onValueChange"))}this.checkDefaultOption(),this.getValue=function(){var t,i=D.byId(this.id+".value"),a=!0;return e?i.item?t=i.item.code[0]:(t="",a=!1):(t=i.get("value"),a=E.isDefined(t)&&!isNaN(t)),{value:t,isValid:a}}},createValueBetweenDate:function(){var e=this.getAttrValContNode();this.clearAttributeValueDijits(),c.empty(e);var t=new N({id:this.id+".value1",class:"attributeValue1",trim:!0,required:!0,placeHolder:"",constraints:{formatLength:"short"}},c.create("div",{},e));c.create("span",{innerHTML:this.i18n.andBetweenValues,class:"attributeBetweenValues"},e);var i=new N({id:this.id+".value2",class:"attributeValue2",trim:!0,required:!0,placeHolder:"",constraints:{formatLength:"short"}},c.create("div",{},e));this.checkDefaultOption(),this.valueHandlers.push(s.connect(t,"onChange",this,"onValueChange")),this.valueHandlers.push(s.connect(i,"onChange",this,"onValueChange")),this.getValue=function(){var e=D.byId(this.id+".value1").get("value"),t=D.byId(this.id+".value2").get("value");return{value1:e,value2:t,isValid:E.isDefined(e)&&E.isDefined(t)}}},createValueBetweenNumber:function(){var e=this.getAttrValContNode();this.clearAttributeValueDijits(),c.empty(e);var t=new S({id:this.id+".value1",class:"attributeValue1",required:!0,placeHolder:"",intermediateChanges:!0,constraints:{pattern:"#####0.##########"}},c.create("div",{},e));c.create("span",{innerHTML:this.i18n.andBetweenValues,class:"attributeBetweenValues"},e);var i=new S({id:this.id+".value2",class:"attributeValue2",required:!0,placeHolder:"",intermediateChanges:!0,constraints:{pattern:"#####0.##########"}},c.create("div",{},e));this.checkDefaultOption(),this.valueHandlers.push(s.connect(t,"onChange",this,"onValueChange")),this.valueHandlers.push(s.connect(i,"onChange",this,"onValueChange")),this.getValue=function(){var e=D.byId(this.id+".value1").get("value"),t=D.byId(this.id+".value2").get("value");return{value1:e,value2:t,isValid:E.isDefined(e)&&E.isDefined(t)&&!isNaN(e)&&!isNaN(t)&&e<=t}}},createValueInTheLastDate:function(){},createValueIsBlank:function(){var e=this.getAttrValContNode();this.clearAttributeValueDijits(),c.empty(e),e.innerHTML="<input id='"+this.id+".value' class='attributeValue' type='text' disabled='true'/>",this.checkDefaultOption(),this.getValue=function(){return{value:null,isValid:!0}}},createValueFields:function(e,t,a){var r=this.getAttrValContNode();this.clearAttributeValueDijits(),c.empty(r);var n=new T({id:this.id+".valueFields",class:"attributeValue",maxHeight:150,labelAttr:"label",searchAttr:"label",store:e,query:t},c.create("div",{},r));if(a)for(var l=!1,o=0;o<100&&(e.fetchItemByIdentity({identity:o,onItem:i.hitch(this,(function(e){e&&e.shortType[0]===t.shortType&&e.name[0]!==a&&(n.set("value",e.id),l=!0)}))}),!l);o++);this.valueHandlers.push(s.connect(n,"onChange",this,"onValueChange")),this.getValue=function(){var e=D.byId(this.id+".valueFields");return{value:e.store.getValue(e.item,"name"),label:e.store.getValue(e.item,"label"),type:"field",isValid:!0}}},createValueUnique:function(e){var t=this.getAttrValContNode();this.clearAttributeValueDijits(),c.empty(t);var i=new T({id:this.id+".valueUnique",class:"attributeValue",maxHeight:150,store:e},c.create("div",{},t));i.set("value",0),this.valueHandlers.push(s.connect(i,"onChange",this,"onValueChange")),this.getValue=function(){var e=D.byId(this.id+".valueUnique");return{value:e.store.getValue(e.item,"value"),isValid:!0}}},setValue:function(e,t){if(t){for(var i=0;i<t.length;i++)if(e===t[i].code){D.byId(this.id+".value").set("value",i);break}}else"date"===this.part.fieldObj.shortType?D.byId(this.id+".value").set("value",new Date(e)):("number"===this.part.fieldObj.shortType&&(e=Number(e)),D.byId(this.id+".value").set("value",e))},setValue1:function(e){"date"===this.part.fieldObj.shortType?e=new Date(e):"number"===this.part.fieldObj.shortType&&(e=Number(e)),D.byId(this.id+".value1").set("value",e)},setValue2:function(e){"date"===this.part.fieldObj.shortType?e=new Date(e):"number"===this.part.fieldObj.shortType&&(e=Number(e)),D.byId(this.id+".value2").set("value",e)},setValueFieldById:function(e){this.getValueFieldsList().set("value",e)},enableOnFieldChange:function(){this.onFieldChangeEnabled=!0},enableOnOperatorChange:function(){this.onOperatorChangeEnabled=!0},onChangeField:function(e){this.onFieldChangeEnabled&&this._onChangeField(this.getFieldsList(),this)},onChangeOperator:function(e){this.onOperatorChangeEnabled&&this._onChangeOperator(this.getOperatorList(),this)},onClickDeleteExpression:function(e){this._deleteExpression(this)},_onChangeField:function(e,t,i){var a=!!this.mapLayer&&this.isPortalHostedService(this.mapLayer.url);this.isBigDataLayer(this.mapLayer)||a&&"esriFieldTypeDate"===this.fieldsStore.getValue(e.item,"type")?h.set(u.byId(this.id+".radioUniqueColumn"),"display","none"):h.set(u.byId(this.id+".radioUniqueColumn"),"display","");var r=t.getOperatorList();switch(this.fieldsStore.getValue(e.item,"type")){case"esriFieldTypeString":var n=null,l=this.fieldsStore.getValue(e.item,"name");if(this.getCodedValues(l)){var o=this.i18n.stringOperatorStartsWith;o+="|"+this.i18n.stringOperatorEndsWith,o+="|"+this.i18n.stringOperatorContains,o+="|"+this.i18n.stringOperatorDoesNotContain,n={name_:new RegExp("^(?!("+o+")$)")}}r.attr("value")===this.i18n.stringOperatorIs?(t.fillOperatorList(this.stringOperatorStore,this.i18n.stringOperatorIs,n),this.onChangeOperator(r,t,i)):t.fillOperatorList(this.stringOperatorStore,this.i18n.stringOperatorIs,n),t.createValueString(this.getCodedValues(l));break;case"esriFieldTypeDate":t.fillOperatorList(this.dateOperatorStore,this.i18n.dateOperatorIsOn),t.createValueDate();break;default:n=null,l=this.fieldsStore.getValue(e.item,"name"),this.getCodedValues(l)&&(o=this.i18n.numberOperatorIsBetween,o+="|"+this.i18n.numberOperatorIsNotBetween,o+="|"+this.i18n.numberOperatorIsAtLeast,o+="|"+this.i18n.numberOperatorIsLessThan,o+="|"+this.i18n.numberOperatorIsAtMost,o+="|"+this.i18n.numberOperatorIsGreaterThan,n={name_:new RegExp("^(?!("+o+")$)")}),r.attr("value")===this.i18n.numberOperatorIs?(t.fillOperatorList(this.numberOperatorStore,this.i18n.numberOperatorIs,n),this.onChangeOperator(r,t,i)):t.fillOperatorList(this.numberOperatorStore,this.i18n.numberOperatorIs,n),t.createValueNumber(this.getCodedValues(l))}"date"===this.fieldsStore.getValue(t.getFieldsList().item,"shortType")?t.disableInteractiveCheck():t.enableInteractiveCheck(),s.publish("filter-expression-change",this)},_onChangeOperator:function(e,t,i){var a=e.item?e.item.name[0]:e.value,r=this.fieldsStore.getValue(t.getFieldsList().item,"shortType"),n=this.fieldsStore.getValue(t.getFieldsList().item,"name");if(t.enableOptions(),"date"!==r&&"number"!==r||a!==this.i18n.dateOperatorIsBetween&&a!==this.i18n.numberOperatorIsBetween&&a!==this.i18n.dateOperatorIsNotBetween&&a!==this.i18n.numberOperatorIsNotBetween)if("date"!==r||a!==this.i18n.dateOperatorInTheLast&&a!==this.i18n.dateOperatorNotInTheLast)if(a===this.i18n.stringOperatorIsBlank||a===this.i18n.dateOperatorIsBlank||a===this.i18n.numberOperatorIsBlank||a===this.i18n.stringOperatorIsNotBlank||a===this.i18n.dateOperatorIsNotBlank||a===this.i18n.numberOperatorIsNotBlank)t.createValueIsBlank(),t.disableOptions();else switch(r){case"string":t.createValueString(this.getCodedValues(n));break;case"date":t.createValueDate();break;default:t.createValueNumber(this.getCodedValues(n))}else t.disableOptions(),t.createValueInTheLastDate();else t.disableOptions(),"date"===r?t.createValueBetweenDate():t.createValueBetweenNumber();s.publish("filter-expression-change",this)},onInteractiveClick:function(e){this.isInteractiveChecked()?(h.set(this.interactiveSpace,"display","block"),this.interactiveArrow.innerHTML="&nbsp;&#9650;"):(h.set(this.interactiveSpace,"display","none"),this.interactiveArrow.innerHTML="&nbsp;&#9660;"),s.publish("filter-expression-change",this)},onClickShowHideInteractive:function(e){this.interactiveCheck.disabled||("none"===h.set(this.interactiveSpace,"display")?(h.set(this.interactiveSpace,"display","block"),this.interactiveArrow.innerHTML="&nbsp;&#9650;"):(h.set(this.interactiveSpace,"display","none"),this.interactiveArrow.innerHTML="&nbsp;&#9660;"))},onChangeInteractive:function(){s.publish("filter-expression-change",this)},showValueInput:function(e){this._showValueInput(D.byNode(e.target),this)},showFields:function(e){this._showFields(D.byNode(e.target),this)},showUniqueList:function(e){this._showUniqueList(D.byNode(e.target),this)},onValueChange:function(){this.onValueChangeHandler&&clearTimeout(this.onValueChangeHandler),this.onValueChangeHandler=setTimeout(i.hitch(this,(function(){this.onValueChangeHandler=null,s.publish("filter-expression-change",this)})),800)},_showValueInput:function(e,t,i){t.onChangeOperator(e,t,i),t.enableInteractiveCheck()},_showFields:function(e,t,i){var a=t.getFieldsList().item,s=this.fieldsStore.getValue(a,"shortType"),r=this.fieldsStore.getValue(a,"name");t.createValueFields(this.fieldsStore,{shortType:s,name:new RegExp("^(?!"+r+"$)")},r),t.disableInteractiveCheck()},_showUniqueList:function(e,t,s){this.uniqueValuesStore&&delete this.uniqueValuesStore;var r=this.fieldsStore.getValue(t.getFieldsList().item,"name");if(this.version>=10.1||!this.mapLayer.url){var n=null;this.mapLayer.queryServiceUrl?n=this.mapLayer.queryServiceUrl:this.mapLayer.itemLayers&&a.forEach(this.mapLayer.itemLayers,(function(e){e.id===this.layerInfo.id&&e.layerUrl&&(n=e.layerUrl)}),this),n||(n=this.mapLayer.url),this.uniqueValuesResults[this.mapLayer.id+"_"+r]?this.onGenerateRendererResults(t,e,this.uniqueValuesResults[this.mapLayer.id+"_"+r]):this.generateRendererUniqueValues(r,n,i.hitch(this,"onGenerateRendererResults",t,e),i.hitch(this,(function(){this.showValueInput(e,t)})))}else if(e)return void this.showValueInput(e,t)},onGenerateRendererResults:function(e,t,i){var s=this.fieldsStore.getValue(e.getFieldsList().item,"name"),r=this.fieldsStore.getValue(e.getFieldsList().item,"shortType"),n=this.fieldsStore.getValue(e.getFieldsList().item,"type");this.uniqueValuesResults[this.mapLayer.id+"_"+s]=i;var l=null;a.forEach(this.mapLayer.fields,(function(e){e.name===s&&e.domain&&(l=e.domain)}));var o=a.filter(i,(function(e,t){return"string"===r?"<Null>"!==e&&""!==e.trim():"<Null>"!==e&&""!==e}));if(o.length){"date"===r?(o=(o=a.map(o,(function(e){return new Date(e)}))).sort((function(e,t){var i=e.getTime(),a=t.getTime();return i<a?-1:i>a?1:0})),o=a.map(o,(function(e){return this.formatFriendlyDate(e)}),this)):o="number"===r?(o=a.map(o,(function(e){return"esriFieldTypeDouble"===n||"esriFieldTypeSingle"===n?parseFloat(e):parseInt(e,10)}))).sort((function(e,t){return e<t?-1:e>t?1:0})):o.sort((function(e,t){return e<t?-1:e>t?1:0}));var u=a.map(o,(function(e,t){var i=e;if("string"===r&&(i=""===e?"<"+this.i18n.emptyString+">":e),l&&l.codedValues){for(var a=0;a<l.codedValues.length;a++){var s=l.codedValues[a];if(e===s.code)return{id:t,name:s.name||i,value:e}}return{id:t,name:""+i,value:e}}var o=i;return"esriFieldTypeDouble"!==n&&"esriFieldTypeSingle"!==n||(o=d.format(e,{pattern:"#####0.##########"})),{id:t,name:""+o,value:e}}),this);this.uniqueValuesStore=new g({data:{label:"name",identifier:"id",items:u}}),e.createValueUnique(this.uniqueValuesStore)}else this.showValueInput(t,e)},generateRendererUniqueValues:function(e,t,s,r){e instanceof Array&&(e=e.toString());var n=new x;n.attributeField=e;var l,o,d=new A;d.classificationDefinition=n,this.mapLayer instanceof _?l=new H(this.mapLayer):this.mapLayer instanceof q&&!this.mapLayer.url?l=new H(this.mapLayer):this.hasDynamicLayers(this.mapLayer)?(o=this.mapLayer.layerDefinitions&&this.mapLayer.layerDefinitions[this.mapLayer.id]?this.mapLayer.layerDefinitions[this.mapLayer.id]:null,d.where=o||null,l=new H(this.mapLayer.url+"/dynamicLayer",{source:this.layerInfo.source})):(o=this.mapLayer.getDefinitionExpression(),d.where=o||null,l=new H(t)),F.defaults.io.timeout=1e4,l.execute(d,(function(e){F.defaults.io.timeout=6e4;var t=a.map(e.infos,(function(e){return e.value}));s(t)}),i.hitch(this,(function(e){F.defaults.io.timeout=6e4,r()})))},hasDynamicLayers:function(e){return!(!e||!e.supportsDynamicLayers)},formatDate:function(e){return y.format(e,{datePattern:"yyyy-MM-dd",selector:"date"})+" "+y.format(e,{selector:"time",timePattern:"HH:mm:ss"})},formatFriendlyDate:function(e){return y.format(e,{formatLength:"short",selector:"date"})},parseFriendlyDate:function(e){return y.parse(e,{formatLength:"short",selector:"date"})},parseDate:function(e){var t=y.parse(e,{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"});return t||(t=y.parse(e.replace(" ",", "),{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"}))||(t=y.parse(e.replace(" "," - "),{datePattern:"yyyy-MM-dd",timePattern:"HH:mm:ss"})),t},addDay:function(e){return new Date(e.getTime()+this.dayInMS)},subtractDay:function(e){return new Date(e.getTime()-this.dayInMS)},containsNonLatinCharacter:function(e){for(var t=0;t<e.length;t++)if(e.charCodeAt(t)>255)return!0;return!1},hasWhiteSpace:function(e){return/\s/g.test(e)},buildCodedValuesStore:function(e){var t=a.map(e,(function(e,t){return{name:e.name,code:e.code,id:t}}));return new g({data:{label:"name",identifier:"id",items:t}})},clearAttributeValueDijits:function(){this.valueHandlers&&0!==this.valueHandlers.length&&(a.forEach(this.valueHandlers,i.hitch(this,(function(e){s.disconnect(e),e=null}))),this.valueHandlers=[],D.byId(this.id+".value")?D.byId(this.id+".value").destroy():u.byId(this.id+".value")&&this.getAttrValContNode().removeChild(u.byId(this.id+".value")),D.byId(this.id+".value1")?D.byId(this.id+".value1").destroy():u.byId(this.id+".value1")&&this.getAttrValContNode().removeChild(u.byId(this.id+".value1")),D.byId(this.id+".value2")?D.byId(this.id+".value2").destroy():u.byId(this.id+".value2")&&this.getAttrValContNode().removeChild(u.byId(this.id+".value2")),D.byId(this.id+".valueFields")&&D.byId(this.id+".valueFields").destroy(),D.byId(this.id+".valueUnique")&&D.byId(this.id+".valueUnique").destroy())},checkDefaultOption:function(){b(".attributeValueOptions .attributeValueRadio",this.domNode).forEach((function(e){D.byNode(e).set("checked",e.className.indexOf("radioValue")>-1)}))},disableOptions:function(){b(".attributeValueOptions .attributeValueRadio",this.domNode).forEach((function(e){D.byNode(e).set("disabled",!0)}))},enableOptions:function(){b(".attributeValueOptions .attributeValueRadio",this.domNode).forEach((function(e){D.byNode(e).set("disabled",!1)}))},checkFieldOption:function(){D.byId(this.id+".radioFields").set("checked",!0)},disableFieldOption:function(){D.byId(this.id+".radioFields").set("disabled",!0)},disableUniqueOption:function(){D.byId(this.id+".radioUnique").set("disabled",!0)},enableInteractiveCheck:function(){this.interactiveCheck.disabled=!1},disableInteractiveCheck:function(){this.interactiveCheck.checked=!1,this.interactiveCheck.disabled=!0},isBigDataLayer:function(e){return!!e.url&&-1!==e.url.indexOf("BigDataCatalogServer")&&("featureClass"===e.type||"table"===e.type)},isPortalHostedService:function(e){if(!e)return!1;return-1!==e.toLowerCase().indexOf("/hosted/")},isHostedService:function(e){if(!e)return!1;var t=-1!==e.indexOf(".arcgis.com/"),i=-1!==e.indexOf("//services")||-1!==e.indexOf("//tiles")||-1!==e.indexOf("//features");return t&&i},buildEditUIField:function(e,t,a){this.getFieldItemByName({name:e.fieldObj.name},i.hitch(this,(function(i){t.getFieldsList().set("value",i.id[0],!1),this.buildEditUIOperator(e,t,a)})),i.hitch(this,(function(){t.getFieldsList().set("value",0),this.buildEditUIOperator(e,t,a)})))},buildEditUIOperator:function(e,t,a){switch(e.fieldObj.shortType){case"string":t.fillOperatorList(this.stringOperatorStore,e.operator);break;case"date":t.fillOperatorList(this.dateOperatorStore,e.operator);break;default:t.fillOperatorList(this.numberOperatorStore,e.operator)}setTimeout(i.hitch(this,(function(){this.getOperatorItemByName(t.getOperatorList().store,{name:e.operator},i.hitch(this,(function(i){t.getOperatorList().set("value",i.id[0],!1),this.buildEditUIValue(e,t,a)})),i.hitch(this,(function(){t.getOperatorList().set("value",0),this.buildEditUIValue(e,t,a)})))})),100)},buildEditUIValue:function(e,t,a){this.onFieldChangeEnabled=!0,this.onOperatorChangeEnabled=!0;var s=e.operator;this.onChangeOperator(t.getOperatorList(),t),t.enableOptions(),setTimeout(i.hitch(this,(function(){s===this.i18n.stringOperatorIsBlank||s===this.i18n.dateOperatorIsBlank||s===this.i18n.numberOperatorIsBlank||s===this.i18n.stringOperatorIsNotBlank||s===this.i18n.dateOperatorIsNotBlank||s===this.i18n.numberOperatorIsNotBlank?(t.createValueIsBlank(),t.disableOptions()):"field"===e.valueObj.type?(t.createValueFields(this.fieldsStore,{shortType:e.fieldObj.shortType,name:new RegExp("^(?!"+e.fieldObj.name+"$)")}),t.checkFieldOption(),this.getFieldItemByName({name:e.valueObj.value},i.hitch(this,(function(e){t.setValueFieldById(e.id[0])})),i.hitch(this,(function(){t.setValueFieldById(0)})))):E.isDefined(e.valueObj.value1)?(t.setValue1(e.valueObj.value1),t.setValue2(e.valueObj.value2)):t.setValue(e.valueObj.value,this.getCodedValues(e.fieldObj.name))})),100)},getFieldItemByName:function(e,t,a){this.fieldsStore.fetch({query:e,onComplete:i.hitch(this,(function(e){e&&e.length?t(e[0]):a()}))})},getOperatorItemByName:function(e,t,a,s){e.fetch({query:t,onComplete:i.hitch(this,(function(e){e&&e.length?a(e[0]):s()}))})}});return n("extend-esri")&&i.setObject("dijit.SingleFilter",W,B),W}));