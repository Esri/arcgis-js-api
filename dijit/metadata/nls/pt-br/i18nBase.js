// COPYRIGHT © 2017 Esri
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
// See http://js.arcgis.com/3.19/esri/copyright.txt for details.

define({general:{cancel:"Cancelar",close:"Fechar",none:"Nenhum",ok:"Ok",other:"Outro",stamp:"Carimbar",now:"Agora",choose:"Escolha Um:"},editor:{noMetadata:"Não há metadados para este item.",xmlViewOnly:"O tipo de metadados associado com este item não é suportado pelo editor. O metadados deve estar no formato do ArcGIS.",editorDialog:{caption:"Metadados",captionPattern:"Metadados para {title}"},primaryToolbar:{view:"Visualizar",viewXml:"Visualizar XML",edit:"Editar",initializing:"Carregando...",startingEditor:"Iniciando editor...",loadingDocument:"Carregando documento...",updatingDocument:"Atualizando documento...",generatingView:"Gerando visualização...",errors:{errorGeneratingView:"Ocorreu um erro ao gerar a visualização.",errorLoadingDocument:"Ocorreu um erro ao carregar o documento."}},changesNotSaved:{prompt:"Seu documento tem alterações que não foram salvas.",dialogTitle:"Fechar Editor de Metadados",closeButton:"Fechar"},download:{caption:"Download",dialogTitle:"Download",prompt:"Clique aqui para baixar seu arquivo."},load:{caption:"Abrir",dialogTitle:"Abrir",typeTab:"Novo documento",fileTab:"Abrir arquivo",templateTab:"Um Modelo",itemTab:"Seu Item",filePrompt:"Selecione um arquivo XML de Metadados do ArcGIS local. O metadados deve estar no formato do ArcGIS.",templatePrompt:"Criar Metadados",pullItem:"Preencher metadados com detalhes do item.",importWarning:"O arquivo selecionado não aparece no formato do ArcGIS. O metadados atualizado deve estar no formato do ArcGIS.",loading:"Carregando...",noMetadata:"Os metadados podem ser criados para este item ao escolher uma das seguintes opções.",unrecognizedMetadata:"O tipo de metadados associado com este item não é suportado pelo editor. Os metadados suportados podem ser criados ao escolher uma das seguintes opções.",errorLoading:"Ocorreu um erro ao carregar.",warnings:{badFile:"Não foi possível carregar o arquivo selecionado.",notAnXml:"O arquivo selecionado não é um arquivo XML.",notSupported:"Este tipo de arquivo não é suportado."}},save:{caption:"Salvar",dialogTitle:"Salvar Metadados",working:"Salvando metadados...",errorSaving:"Ocorreu um erro, seus metadados não foram salvos.",saveDialog:{pushCaption:"Aplicar alterações no seu item"}},saveAndClose:{caption:"Salvar e Fechar"},saveDraft:{caption:"Salvar Cópia Local",dialogTitle:"Salvar Cópia Local"},validate:{caption:"Validar",dialogTitle:"Validação",docIsValid:"Seu documento é válido."},del:{caption:"Excluir",dialogTitle:"Excluir Metadados",prompt:"Tem certeza que deseja excluir estes metadados?",working:"Excluindo metadados...",errorDeleting:"Ocorreu um erro, seus metadados não foram excluídos."},transform:{caption:"Transformar",dialogTitle:"Transformar Para",prompt:"",working:"Transformando...",errorTransforming:"Ocorreu um erro ao transformar seu documento."},errorDialog:{dialogTitle:"Ocorreu um erro"}},arcgis:{portal:{metadataButton:{caption:"Metadados"}}},calendar:{button:"Calendário...",title:"Calendário"},geoExtent:{button:"Configurar Extensão Geográfica...",title:"Extensão Geográfica",navigate:"Navegar",draw:"Desenhar um Retângulo",drawHint:"Pressione para começar e solte para finalizar."},hints:{date:"(yyyy ou yyyy-mm ou yyyy-mm-dd)",dateTime:"(yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",dateOrDateTime:"(yyyy ou yyyy-mm ou yyyy-mm-dd ou yyyy-mm-ddThh:mm:ss.sss[+-]hh:mm)",delimitedTextArea:"(utilize vírgula ou nova linha para separar)",fgdcDate:"(yyyy ou yyyy-mm ou yyyy-mm-dd)",fgdcTime:"(hh:mm:ss.sss[+-]hh:mm)",integer:"(insira um inteiro)",latitude:"(graus decimais)",longitude:"(graus decimais)",number:"(insira um número)",numberGreaterThanZero:"(insira um número > 0)"},isoTopicCategoryCode:{caption:"Categorias do Tópico",boundaries:"Administrativo e Limite Político",farming:"Agricultura e Pecuária",climatologyMeteorologyAtmosphere:"Atmosfera e Climática",biota:"Biologia e Ecologia",economy:"Negócios e Economia",planningCadastre:"Cadastral",society:"Cultural, Sociedade e Demografia",elevation:"Elevação e Produtos Derivados",environment:"Ambiente e Conservação",structure:"Instalações e Estruturas",geoscientificInformation:"Geológico e Geofísico",health:"Saúde Humana e Doenças",imageryBaseMapsEarthCover:"Imagens e Mapas Base",inlandWaters:"Recursos Hídricos Nacionais",location:"Local e Redes Geodésicas",intelligenceMilitary:"Militar",oceans:"Oceanos e Estuários",transportation:"Redes de Transporte",utilitiesCommunication:"Utilitários e Comunicação"},multiplicity:{moveElementDown:"Mover Seção para Baixo",moveElementUp:"Mover Seção para Cima",removeElement:"Remover Seção",repeatElement:"Repetir Seção"},optionalNode:{switchTip:"Inclua ou exclua esta seção."},serviceTypes:{featureService:"Serviço da Feição",mapService:"Serviço de Mapa",imageService:"Serviço de Imagem",wms:"WMS",wfs:"WFS",wcs:"WCS"},validation:{pattern:"{label} - {message}",patternWithHint:"{label} - {message} {hint}",ok:"Ok",empty:"Um valor é exigido.",date:"O valor deve ser uma data.",integer:"O valor deve ser inteiro.",number:"O valor deve ser um número.",other:"Valor Inválido."},validationPane:{clearMessages:"Apagar Mensagens",prompt:"(clique em cada mensagem abaixo e forneça as informações exigidas no campo especificado)"}});