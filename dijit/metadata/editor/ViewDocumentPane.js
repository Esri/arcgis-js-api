define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","../base/Templated","dojo/text!./templates/ViewDocumentPane.html","../../../kernel"],function(e,t,s,n,o,a,i){var d=e([o],{gxeDocument:null,templateString:a,xmlString:null,postCreate:function(){this.inherited(arguments)},hideMessage:function(){this.messageNode.innerHTML="",s.set(this.messageNode,"display","none")},showMessage:function(e){this.setNodeText(this.messageNode,e),s.set(this.messageNode,"display","")}});return n("extend-esri")&&t.setObject("dijit.metadata.editor.ViewDocumentPane",d,i),d});