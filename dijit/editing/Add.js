define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../kernel","../../OperationBase"],function(e,d,r,i,t){var a=e(t,{declaredClass:"esri.dijit.editing.Add",type:"edit",label:"Add Features",constructor:function(e){return e=e||{},e.featureLayer?(this._featureLayer=e.featureLayer,e.addedGraphics?void(this._addedGraphics=e.addedGraphics):void console.error("In constructor of 'esri.dijit.editing.Add', no graphics provided")):void console.error("In constructor of 'esri.dijit.editing.Add', featureLayer is not provided")},performUndo:function(){this._featureLayer.applyEdits(null,null,this._addedGraphics)},performRedo:function(){this._featureLayer.applyEdits(this._addedGraphics,null,null)}});return r("extend-esri")&&d.setObject("dijit.editing.Add",a,i),a});