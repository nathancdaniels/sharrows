var wms_layers = [];


        var lyr_Hybrid_0 = new ol.layer.Tile({
            'title': 'Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}'
            })
        });
var format_Bike_Sharrows_Sep_2023_1 = new ol.format.GeoJSON();
var features_Bike_Sharrows_Sep_2023_1 = format_Bike_Sharrows_Sep_2023_1.readFeatures(json_Bike_Sharrows_Sep_2023_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bike_Sharrows_Sep_2023_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bike_Sharrows_Sep_2023_1.addFeatures(features_Bike_Sharrows_Sep_2023_1);
var lyr_Bike_Sharrows_Sep_2023_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Bike_Sharrows_Sep_2023_1, 
                style: style_Bike_Sharrows_Sep_2023_1,
                interactive: true,
    title: 'Bike_Sharrows_Sep_2023<br />\
    <img src="styles/legend/Bike_Sharrows_Sep_2023_1_0.png" /> Left<br />\
    <img src="styles/legend/Bike_Sharrows_Sep_2023_1_1.png" /> Right<br />\
    <img src="styles/legend/Bike_Sharrows_Sep_2023_1_2.png" /> Straight<br />\
    <img src="styles/legend/Bike_Sharrows_Sep_2023_1_3.png" /> <br />'
        });

lyr_Hybrid_0.setVisible(true);lyr_Bike_Sharrows_Sep_2023_1.setVisible(true);
var layersList = [lyr_Hybrid_0,lyr_Bike_Sharrows_Sep_2023_1];
lyr_Bike_Sharrows_Sep_2023_1.set('fieldAliases', {'attribute': 'attribute', 'Ref No': 'Ref No', });
lyr_Bike_Sharrows_Sep_2023_1.set('fieldImages', {'attribute': 'TextEdit', 'Ref No': 'TextEdit', });
lyr_Bike_Sharrows_Sep_2023_1.set('fieldLabels', {'attribute': 'inline label', 'Ref No': 'header label', });
lyr_Bike_Sharrows_Sep_2023_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});