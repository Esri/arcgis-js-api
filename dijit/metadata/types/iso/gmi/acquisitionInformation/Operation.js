define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../base/Descriptor","../../../../form/iso/ObjectReference","./MI_Operation","dojo/text!./templates/Operation.html","../../../../../../kernel"],function(e,t,o,a,i,n,r,s){var d=e(a,{templateString:r});return o("extend-esri")&&t.setObject("dijit.metadata.types.iso.gmi.acquisitionInformation.Operation",d,s),d});