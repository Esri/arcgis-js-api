define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/array","dojo/topic","dojo/has","../../../../../../kernel","dojo/i18n!../../../../nls/i18nArcGIS","../../../../base/Conditional","../../../../base/etc/docUtil"],function(e,t,i,o,n,r,s,a){var c=e(a,{key:"FGDC_DescIfTemporal",postCreate:function(){this.inherited(arguments);var e=this;this.own(o.subscribe("gxe/interaction-occurred",function(t){try{if(e.parentXNode&&t&&t.inputWidget&&t.inputWidget.parentXNode){var i=t.inputWidget.parentXNode.gxePath;null!=i&&i.indexOf("exDesc")>0&&e.emitInteractionOccurred()}}catch(o){console.error(o)}})),this.own(o.subscribe("gxe/optional-content-toggled",function(t){try{if(e.parentXNode&&t&&t.src&&t.src.target){var i=t.src.target;"tempEle"===i&&e.emitInteractionOccurred()}}catch(o){console.error(o)}}))},validateConditionals:function(e){var t=this.newStatus({message:s.conditionals[this.key]}),i=!0,o=this.parentXNode.parentElement,n=o.gxePath+"/tempEle";return this.focusNode||(this.focusNode=this.parentXNode.inputWidget.focusNode),this.isXNodeOff(this.parentXNode)||this.isXNodeInputEmpty(this.parentXNode)&&this.forActiveXNodes(n,o.domNode,function(){i=!1}),t.isValid=i,this.track(t,e),t}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.base.conditionals.FGDC_DescIfTemporal",c,r),c});