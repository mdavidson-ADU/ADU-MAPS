var size = 0;
var placement = 'point';
function categories_ADUTurfForWebv2copy_1(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Boston_Backbay_to_495':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(190,9,222,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Boston_Cambridge_and_North':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,170,11,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Boston_Downtown_and_Seaport_to_Cape':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,0,0,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Boston_East_and_North_Shore':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(0,38,255,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Boston_South_Boston_to_I95':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(0,220,59,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Lawrence':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(255,129,228,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Metro_South':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(250,254,0,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'North_Suburbs':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(27,136,0,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Providence_and_South_Central_Mass':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(21,241,234,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Springfield_and_Western_MA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(80,13,214,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Worcester_and_Central_MA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(35,35,35,0.36)', lineDash: null, lineCap: 'butt', lineJoin: 'miter', width: 2.508}),fill: new ol.style.Fill({color: 'rgba(143,97,66,0.36)'}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_ADUTurfForWebv2copy_1 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("Turf");
    var labelFont = "15.600000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Sub_Turf") !== null) {
        labelText = String(feature.get("Sub_Turf"));
    }
    
    var style = categories_ADUTurfForWebv2copy_1(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
