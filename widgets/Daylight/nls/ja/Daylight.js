// COPYRIGHT © 2019 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/4.14/esri/copyright.txt for details.

define({title:"日光",directShadow:"影の表示",notSupportedInHW:"この機能は、このブラウザーでサポートされていません。",unsupported:"[日光] ツールは、SceneView でのみサポートされています。",datePattern:"MMMM d, yyyy",playDay:"1 日間の陰影と影をアニメーション化",playYear:"1 年間の陰影と影をアニメーション化",pause:"一時中断",season:"季節",spring:"春",summer:"夏",winter:"冬",fall:"秋",timezoneHAST:"HAST",timezoneAKST:"AKST",timezonePST:"PST",timezoneMST:"MST",timezoneCST:"CST",timezoneEST:"EST",timezoneCET:"CET",timezoneEET:"EET",timezoneMSK:"MSK",timezoneGST:"GST",timezoneICT:"ICT",timezoneCCT:"CCT",timezoneJST:"JST",timezoneAEST:"AEST",timezoneNZST:"NZST",timezoneDateline:"国際日付変更線 西側",timezoneHawaii:"ハワイ州",timezoneAlaska:"アラスカ州",timezoneBaja:"バハ カリフォルニア",timezoneMountain:"山地標準時 (米国とカナダ)",timezoneLaPaz:"チワワ、ラパス、マサトラン",timezoneArizona:"アリゾナ州",timezoneSaskatchewan:"サスカチュワン",timezoneCentralAmerica:"中央アメリカ",timezoneCentralTime:"中央標準時 (米国とカナダ)",timezoneMexico:"グアダラハラ、メキシコシティ、モンテレイ",timezoneEasternUS:"東部標準時 (米国とカナダ)",timezoneLima:"ボゴタ、リマ、キト",timezoneIndiana:"インディアナ (東部) ",timezoneAtlantic:"大西洋標準時 (カナダ)",timezoneCuiaba:"クイアバ",timezoneSantiago:"サンティアゴ",timezoneManaus:"ジョージタウン、ラパス、マナウス、サンフアン",timezoneAsuncion:"アスンシオン",timezoneBrasilia:"ブラジリア",timezoneGreenland:"グリーンランド",timezoneMontevideo:"モンテビデオ",timezoneCayenne:"カイエン、フォルタレザ",timezoneBuenosAires:"ブエノスアイレス",timezoneMidAtlantic:"中部大西洋",timezoneAzores:"アゾレス諸島",timezoneCaboVerde:"カーボベルデ",timezoneDublin:"ダブリン、エディンバラ、リスボン、ロンドン",timezoneReykjavik:"モンロビア、レイキャヴィーク",timezoneCasablanca:"カサブランカ",timezoneBelgrade:"ベオグラード、ブラチスラヴァ、ブダペスト、リュブリャナ、プラハ",timezoneSarajevo:"サラエヴォ、スコピエ、ワルシャワ、ザグレブ",timezoneBrussels:"ブリュッセル、コペンハーゲン、マドリード、パリ",timezoneWCAfrica:"西中央アフリカ",timezoneAmsterdam:"アムステルダム、ベルリン、ベルン、ローマ、ストックホルム、ウィーン",timezoneWindhoek:"ウィントフック",timezoneMinsk:"ミンスク",timezoneCairo:"カイロ",timezoneHelsinki:"ヘルシンキ、キエフ、リガ、ソフィア、タリン、ヴィリニュス",timezoneAthens:"アテネ、ブカレスト",timezoneJerusalem:"エルサレム",timezoneAmman:"アンマン",timezoneBeirut:"ベイルート",timezoneHarare:"ハラレ、プレトリア",timezoneDamascus:"ダマスカス",timezoneIstanbul:"イスタンブール",timezoneKuwait:"クウェート、リヤド",timezoneBaghdad:"バグダード",timezoneNairobi:"ナイロビ",timezoneKaliningrad:"カリーニングラード",timezoneMoscow:"モスクワ、 サンクトペテルブルク、ヴォルゴグラード",timezoneMuscat:"アブダビ、マスカット",timezoneBaku:"バクー",timezoneYerevan:"エレバン",timezoneTbilisi:"トビリシ",timezonePortLouis:"ポートルイス",timezoneTashkent:"タシュケント",timezoneIslamabad:"イスラマバード、カラチ",timezoneEkaterinburg:"エカテリンブルク",timezoneAstana:"アスタナ",timezoneDhaka:"ダッカ",timezoneNovosibirsk:"ノヴォシビルスク",timezoneBangkok:"バンコク、ハノイ、ジャカルタ",timezoneKrasnoyarsk:"クラスノヤルスク",timezoneBeijing:"北京、重慶、香港、ウルムチ",timezoneSingapore:"クアラルンプール、シンガポール",timezoneTaipei:"台北",timezonePerth:"パース",timezoneUlaanbaatar:"ウランバートル",timezoneIrkutsk:"イルクーツク",timezoneSeoul:"ソウル",timezoneOsaka:"大阪、札幌、東京",timezoneYakutsk:"ヤクーツク",timezoneCanberra:"キャンベラ、メルボルン、シドニー",timezoneBrisbane:"ブリスベン",timezoneHobart:"ホバート",timezoneGuam:"グアム、ポートモレスビー",timezoneVladivostok:"ウラジオストク",timezoneSolomon:"ソロモン諸島、ニューカレドニア",timezoneMagadan:"マガダン",timezoneFiji:"フィジー諸島共和国",timezoneAuckland:"オークランド、ウェリントン",timezoneNukualofa:"ヌクアロファ",timezoneSamoa:"サモア独立国",chooseTimezone:"タイムゾーンの選択"});