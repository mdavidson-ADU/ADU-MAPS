ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8199462.071069, 5047504.915141, -7784405.438267, 5399600.833915]);
var wms_layers = [];

var format_Turf_0 = new ol.format.GeoJSON();
var features_Turf_0 = format_Turf_0.readFeatures(json_Turf_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Turf_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Turf_0.addFeatures(features_Turf_0);
var lyr_Turf_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Turf_0, 
                style: style_Turf_0,
                popuplayertitle: 'Turf',
                interactive: true,
    title: 'Turf<br />\
    <img src="styles/legend/Turf_0_0.png" /> Lawrence<br />\
    <img src="styles/legend/Turf_0_1.png" /> Metro South<br />\
    <img src="styles/legend/Turf_0_2.png" /> North Suburbs<br />\
    <img src="styles/legend/Turf_0_3.png" /> Providence and South Central Mass<br />\
    <img src="styles/legend/Turf_0_4.png" /> Providence and South Central Mass
<br />\
    <img src="styles/legend/Turf_0_5.png" /> Springfield and Western MA<br />\
    <img src="styles/legend/Turf_0_6.png" /> Worcester and Central MA<br />\
    <img src="styles/legend/Turf_0_7.png" /> Boston Backbay to 495<br />\
    <img src="styles/legend/Turf_0_8.png" /> Boston Cambridge and North<br />\
    <img src="styles/legend/Turf_0_9.png" /> Boston Downtown and Seaport to Cape<br />\
    <img src="styles/legend/Turf_0_10.png" /> Boston East and North Shore<br />\
    <img src="styles/legend/Turf_0_11.png" /> Boston South Boston<br />\
    <img src="styles/legend/Turf_0_12.png" /> <br />' });

lyr_Turf_0.setVisible(true);
var layersList = [lyr_Turf_0];
lyr_Turf_0.set('fieldAliases', {'Turf': 'Turf', 'Organizer': 'Organizer', 'Sub_Turf': 'Sub_Turf', });
lyr_Turf_0.set('fieldImages', {'Turf': 'TextEdit', 'Organizer': 'TextEdit', 'Sub_Turf': 'TextEdit', });
lyr_Turf_0.set('fieldLabels', {'Turf': 'inline label - always visible', 'Organizer': 'inline label - always visible', 'Sub_Turf': 'inline label - always visible', });
lyr_Turf_0.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});