define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","./Tabs","../../../kernel"],function(e,o,t,d,a,i){var s=e([a],{_isGxeElementChoice:!0,useRadios:!0,postCreate:function(){this.inherited(arguments),t.add(this.domNode,"gxeElementChoice")}});return d("extend-esri")&&o.setObject("dijit.metadata.form.ElementChoice",s,i),s});