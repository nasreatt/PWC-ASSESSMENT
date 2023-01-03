mapboxgl.accessToken = 'pk.eyJ1Ijoib3JvYmkiLCJhIjoiY2xjZXZtaXg3N2F1ODNxa2Vkdnd0azU0aSJ9.3zv93gy3J9MSq-GL14reRA';
navigator.geolocation.getCurrentPosition(successLocation,errorLocation,{enableHighAccuracy:true})

function successLocation(position){

}

function errorLocation()
{

}

var map = new mapboxgl.Map({
    container: 'map',//id
    style: 'mapbox://styles/mapbox/streets-v11',//map type 
    //center:center,
    zoom:14,
  }
  );
  const customData={
    'features': [
        {
        'type': 'Feature',
        'properties': {
        'title': 'Lincoln Park is special'
        },
        'geometry': {
        'coordinates': [-87.637596, 41.940403],
        'type': 'Point'
        }
        },
        {
        'type': 'Feature',
        'properties': {
        'title': 'Burnham Park is special'
        },
        'geometry': {
        'coordinates': [-87.603735, 41.829985],
        'type': 'Point'
        }
        },
        {
        'type': 'Feature',
        'properties': {
        'title': 'Millennium Park is special'
        },
        'geometry': {
        'coordinates': [-87.622554, 41.882534],
        'type': 'Point'
        }
        }
        ],
        'type': 'FeatureCollection'
        };
  
  function forwardGeocoder(query)
  {
    const matchingFeatures = [];
for (const feature of customData.features) {//search in api with the letter starts with
// Handle queries with different capitalization
// than the source data by calling toLowerCase().
if (
feature.properties.title
.toLowerCase()
.includes(query.toLowerCase())
) {


feature['center'] = feature.geometry.coordinates;
matchingFeatures.push(feature);
}
}
return matchingFeatures;
}
 
map.addControl(
    new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    localGeocoder: forwardGeocoder,
    zoom: 14,
    placeholder: 'Enter search e.g. Lincoln Park',
    mapboxgl: mapboxgl
    })
    );
