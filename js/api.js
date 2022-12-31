
const API_PATH = "https://services6.arcgis.com/hR19wnqEg78ptZn4/arcgis/rest/services/preliminary_nationwide_lsl_survey_with_predictions/FeatureServer/0/";

function getWaterSystemData(map, bbox) {
  var QUERY_PATH = `${API_PATH}query?where=1=1&outFields=*&geometry=${
    bbox.replace(",","%2C")
  }&outgeometryType=esriGeometryEnvelope&inSR=4326&spatialRel=esriSpatialRelIntersects&outSR=4326&f=geojson`;

  fetch(QUERY_PATH)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      map.getSource('water-systems').setData(data);
    })
}
