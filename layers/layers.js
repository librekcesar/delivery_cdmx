var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_cuadricula_cdmx_dos_columnas_utm_1 = new ol.format.GeoJSON();
var features_cuadricula_cdmx_dos_columnas_utm_1 = format_cuadricula_cdmx_dos_columnas_utm_1.readFeatures(json_cuadricula_cdmx_dos_columnas_utm_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_cuadricula_cdmx_dos_columnas_utm_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_cuadricula_cdmx_dos_columnas_utm_1.addFeatures(features_cuadricula_cdmx_dos_columnas_utm_1);
var lyr_cuadricula_cdmx_dos_columnas_utm_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_cuadricula_cdmx_dos_columnas_utm_1, 
                style: style_cuadricula_cdmx_dos_columnas_utm_1,
                interactive: true,
    title: 'cuadricula_cdmx_dos_columnas_utm<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_0.png" /> 0 - 4<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_1.png" /> 4 - 14<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_2.png" /> 14 - 29<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_3.png" /> 29 - 45<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_4.png" /> 45 - 62<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_5.png" /> 62 - 85<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_6.png" /> 85 - 105<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_7.png" /> 105 - 129<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_8.png" /> 129 - 157<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_9.png" /> 157 - 186<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_10.png" /> 186 - 280<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_11.png" /> 280 - 357<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_12.png" /> 357 - 521<br />\
    <img src="styles/legend/cuadricula_cdmx_dos_columnas_utm_1_13.png" /> 521 - 638<br />'
        });
var format_buffers_cdmx_2 = new ol.format.GeoJSON();
var features_buffers_cdmx_2 = format_buffers_cdmx_2.readFeatures(json_buffers_cdmx_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buffers_cdmx_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buffers_cdmx_2.addFeatures(features_buffers_cdmx_2);
var lyr_buffers_cdmx_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_buffers_cdmx_2, 
                style: style_buffers_cdmx_2,
                interactive: false,
                title: '<img src="styles/legend/buffers_cdmx_2.png" /> buffers_cdmx'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_cuadricula_cdmx_dos_columnas_utm_1.setVisible(true);lyr_buffers_cdmx_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_cuadricula_cdmx_dos_columnas_utm_1,lyr_buffers_cdmx_2];
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldAliases', {'id': 'id', 'NUMPOINTS': 'NUMPOINTS', 'estacion': 'estacion', });
lyr_buffers_cdmx_2.set('fieldAliases', {'CP': 'CP', 'ID': 'ID', 'Estación': 'Estación', 'Zonificación': 'Zonificación', 'Nombre del punto99': 'Nombre del punto99', 'Dirección': 'Dirección', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'Nombre del responsable': 'Nombre del responsable', 'Número celular del responsable': 'Número celular del responsable', 'Colonia': 'Colonia', 'Correo electrónico': 'Correo electrónico', 'Estado': 'Estado', });
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldImages', {'id': 'Range', 'NUMPOINTS': 'TextEdit', 'estacion': 'TextEdit', });
lyr_buffers_cdmx_2.set('fieldImages', {'CP': 'Range', 'ID': 'Range', 'Estación': 'TextEdit', 'Zonificación': 'TextEdit', 'Nombre del punto99': 'TextEdit', 'Dirección': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'Nombre del responsable': 'TextEdit', 'Número celular del responsable': 'TextEdit', 'Colonia': 'TextEdit', 'Correo electrónico': 'TextEdit', 'Estado': 'TextEdit', });
lyr_cuadricula_cdmx_dos_columnas_utm_1.set('fieldLabels', {'id': 'header label', 'NUMPOINTS': 'header label', 'estacion': 'header label', });
lyr_buffers_cdmx_2.set('fieldLabels', {'CP': 'no label', 'ID': 'no label', 'Estación': 'no label', 'Zonificación': 'no label', 'Nombre del punto99': 'no label', 'Dirección': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'Nombre del responsable': 'no label', 'Número celular del responsable': 'no label', 'Colonia': 'no label', 'Correo electrónico': 'no label', 'Estado': 'no label', });
lyr_buffers_cdmx_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});