/*
All material copyright ESRI, All Rights Reserved, unless otherwise specified.
See https://js.arcgis.com/4.24/esri/copyright.txt for details.
*/
import t from"../../../core/Error.js";import{open as e}from"../../../core/workers/workers.js";class n{async open(t){this.connection=await e("statsWorker",{strategy:"distributed",signal:t})}destroy(){this.connection?.close()}static getInstance(){return n.instance||(n.instance=new n),n.instance}async summaryStatistics(e,n){if(!this.connection)throw new t("worker-client:summary-statistics","connection is required");return this.connection.invoke("summaryStatistics",{attribute:e,features:n})}async uniqueValues(e,n){if(!this.connection)throw new t("worker-client:unique-values","connection is required");return this.connection.invoke("uniqueValues",{attribute:e,features:n})}async classBreaks(e,n){if(!this.connection)throw new t("worker-client:class-breaks","connection is required");return this.connection.invoke("classBreaks",{attribute:e,features:n})}async histogram(e,n){if(!this.connection)throw new t("worker-client:histogram","connection is required");return this.connection.invoke("histogram",{attribute:e,features:n})}async heatmapStatistics(e,n){if(!this.connection)throw new t("worker-client:heatmap-statistics","connection is required");return this.connection.invoke("heatmapStatistics",{attribute:e,features:n})}}export{n as WorkerClient};