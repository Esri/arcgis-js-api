define(["dojo/_base/declare","dojo/_base/lang","dojo/dom-class","dojo/has","../../../../../kernel","../../../base/etc/docUtil","./InputSelectCode"],function(e,t,a,n,o,r,d){var i=e([d],{postCreate:function(){this.inherited(arguments)},emitInteractionOccurred:function(){this.inherited(arguments);try{var e=this.parentXNode.gxeDocument;!e.isViewOnly&&e.isAgsFGDC&&this._updateEvalMethod()}catch(t){console.error(t)}},_updateEvalMethod:function(){var e=this.getInputValue(),t="/metadata/dqInfo/report/evalMethDesc",n=this.parentXNode.parentElement.domNode,o=r.findInputWidget(t,n),d=!1;if(("DQAbsExtPosAcc"===e||"DQQuanAttAcc"===e)&&(d=!0),o){var i=o.parentXNode.labelNode;d?(o.parentXNode.minOccurs=1,a.remove(i,"gxeOptionalLabel"),a.add(i,"gxeMandatoryLabel")):(o.parentXNode.minOccurs=0,a.remove(i,"gxeMandatoryLabel"),a.add(i,"gxeOptionalLabel")),o.emitInteractionOccurred()}}});return n("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.form.InputReportType",i,o),i});