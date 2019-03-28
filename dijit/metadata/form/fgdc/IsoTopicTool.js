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
// See http://js.arcgis.com/3.28/esri/copyright.txt for details.

define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/query","dojo/has","dijit/registry","../tools/ClickableTool","./IsoTopicDialog","../../../../kernel"],function(e,t,o,a,i,n,s,d,l){var r=e([s],{thesaurus:"http://www.isotc211.org/2005/resources/Codelist/gmxCodelists.xml#MD_KeywordTypeCode",postCreate:function(){this.inherited(arguments)},whenToolClicked:function(e,o){if(o&&o.parentXNode){var i,s,l,r=null,u=null,h=o.parentXNode.getParentElement();h&&(s=a("[data-gxe-path='/metadata/idinfo/keywords/theme/themekey']",h.domNode))&&1===s.length&&(l=n.byNode(s[0]))&&(r=l.inputWidget,null===(u=r.getInputValue())||u.push||(u=[u])),r&&(i=new d({values:u,onChange:t.hitch(this,function(e){o.setInputValue(this.thesaurus),r.importValues(null,e)})}),i.show())}}});return i("extend-esri")&&t.setObject("dijit.metadata.form.fgdc.IsoTopicTool",r,l),r});