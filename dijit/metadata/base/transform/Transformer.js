define(["dojo/_base/declare","dojo/_base/lang","dojo/has","dijit/_WidgetBase","../../../../kernel"],function(e,t,n,r,a){var o=e([r],{gxeDocument:null,toDocumentType:null,postCreate:function(){this.inherited(arguments)},checkTarget:function(e,t){return t}});return n("extend-esri")&&t.setObject("dijit.metadata.base.transform.Transformer",o,a),o});