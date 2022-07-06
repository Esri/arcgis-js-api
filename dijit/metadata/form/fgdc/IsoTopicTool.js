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

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dojo/has","dijit/registry","../tools/ClickableTool","./IsoTopicDialog","../../../../kernel"],(function(e,t,o,a,i,n,s,d,l){var r=e([s],{thesaurus:"http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",postCreate:function(){this.inherited(arguments)},whenToolClicked:function(e,o){if(o&&o.parentXNode){var i,s,l=null,r=null,u=o.parentXNode.getParentElement();u&&(i=a("[data-gxe-path='/metadata/idinfo/keywords/theme/themekey']",u.domNode))&&1===i.length&&(s=n.byNode(i[0]))&&(null===(r=(l=s.inputWidget).getInputValue())||r.push||(r=[r])),l&&new d({values:r,onChange:t.hitch(this,(function(e){o.setInputValue(this.thesaurus),l.importValues(null,e)}))}).show()}}});return i("extend-esri")&&t.setObject("dijit.metadata.form.fgdc.IsoTopicTool",r,l),r}));