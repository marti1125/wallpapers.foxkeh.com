var foxkehMaker;var foxkehMakerView;var foxkehMakerController;$(function(){if(!isFirefox()){return false;}
var profile={"type":"personas","baseURL":"/","assetsFilePath":"../../","parts":[{"name":"bg","className":"FoxkehMakerBGParts","drag":false,"scale":false,"alpha":false,"change":true,"changeList":"json/bg.html"},{"name":"foxkeh","className":"FoxkehMakerParts","drag":true,"scale":true,"alpha":true,"change":true,"changeList":"json/foxkeh.html","scaleMin":0.2,"scaleMax":2,"scaleValue":1,"alphaMin":0.1,"alphaMax":1,"alphaValue":1},{"name":"logo","className":"FoxkehMakerParts","drag":true,"scale":true,"alpha":false,"change":true,"changeList":"json/logo.html","scaleMin":0.1,"scaleMax":1,"scaleValue":.5},{"name":"frame","className":"FoxkehMakerPersonasParts","drag":false,"scale":false,"alpha":false,"change":false,"active":false}]}
var imageWidth=1060;var imageHeight=800;foxkehMaker=new FoxkehMaker(profile);foxkehMakerView=new FoxkehMakerView(foxkehMaker);foxkehMakerController=new FoxkehMakerController(foxkehMakerView);foxkehMakerView.init();foxkehMakerView.initViewport(imageWidth,imageHeight);});