define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-style","dojo/has","../../../kernel","./Element"],function(e,n,t,d,o,i){var s=e(i,{_isHidden:!0,minOccurs:0,preferOpen:!0,noToggle:!0,hide:!0,notApplicable:!0,postCreate:function(){this.inherited(arguments),this.domNode.style.display="none"}});return d("extend-esri")&&n.setObject("dijit.metadata.form.HiddenElement",s,o),s});