define(["dojo/_base/declare","dojo/_base/lang","dojo/has","../../../../../kernel","../../../base/Descriptor","dojo/text!./templates/KwElements.html","../citation/CitationElements"],function(e,t,a,s,n,o){var i=e(n,{templateString:o});return a("extend-esri")&&t.setObject("dijit.metadata.types.arcgis.keywords.KwElements",i,s),i});