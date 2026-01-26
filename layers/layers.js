var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_ADUTurfForWebv2copy_1 = new ol.format.GeoJSON();
var features_ADUTurfForWebv2copy_1 = format_ADUTurfForWebv2copy_1.readFeatures(json_ADUTurfForWebv2copy_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADUTurfForWebv2copy_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADUTurfForWebv2copy_1.addFeatures(features_ADUTurfForWebv2copy_1);
var lyr_ADUTurfForWebv2copy_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADUTurfForWebv2copy_1,
maxResolution:28004.466152261964,
 minResolution:8.66122129157158,

                style: style_ADUTurfForWebv2copy_1,
                popuplayertitle: 'ADU Turf For Web v2 copy',
                interactive: true,
    title: 'ADU Turf For Web v2 copy<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_0.png" /> Boston_Backbay_to_495<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_1.png" /> Boston_Cambridge_and_North<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_2.png" /> Boston_Downtown_and_Seaport_to_Cape<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_3.png" /> Boston_East_and_North_Shore<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_4.png" /> Boston_South_Boston_to_I95<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_5.png" /> Lawrence<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_6.png" /> Metro_South<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_7.png" /> North_Suburbs<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_8.png" /> Providence_and_South_Central_Mass<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_9.png" /> Springfield_and_Western_MA<br />\
    <img src="styles/legend/ADUTurfForWebv2copy_1_10.png" /> Worcester_and_Central_MA<br />' });

lyr_GoogleMaps_0.setVisible(true);lyr_ADUTurfForWebv2copy_1.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_ADUTurfForWebv2copy_1];
lyr_ADUTurfForWebv2copy_1.set('fieldAliases', {'Turf': 'Turf', 'Organizer': 'Organizer', 'Sub_Turf': 'Sub Turf', });
lyr_ADUTurfForWebv2copy_1.set('fieldImages', {'Turf': 'TextEdit', 'Organizer': 'TextEdit', 'Sub_Turf': 'TextEdit', });
lyr_ADUTurfForWebv2copy_1.set('fieldLabels', {'Turf': 'header label - always visible', 'Organizer': 'no label', 'Sub_Turf': 'header label - always visible', });
lyr_ADUTurfForWebv2copy_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});