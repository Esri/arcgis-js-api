define(["dojo/_base/declare","dojo/_base/lang","dojo/has","./ClickableTool","../../../../kernel"],function(e,o,t,l,a){var n=e([l],{value:null,postCreate:function(){this.inherited(arguments)},whenToolClicked:function(e,o){o&&o.setInputValue(this.value)}});return t("extend-esri")&&o.setObject("dijit.metadata.form.tools.ClickableValueTool",n,a),n});