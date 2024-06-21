let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 34.809839, lng: 135.561064 },
    zoom: 16,
  });

  const locationButton = document.createElement("button");
  locationButton.textContent = "Go to My location";
  locationButton.classList.add("map-button");
  map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
  locationButton.addEventListener("click", () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          map.setCenter(pos);
          var marker = new google.maps.Marker({
            position: pos,
            map: map,
            icon: {
              url: 'https://path-to-your-icon/icon.png',
              scaledSize: new google.maps.Size(20, 20) // Set the size here
            }
          });
          map.setZoom(18);
        }
      )
    }
  });

  const cafeteriaMarker = new google.maps.Marker({
    position: { lat: 34.809899, lng: 135.561615 },
    map: map,
    icon: {
      url: 'pin.png',
      scaledSize: new google.maps.Size(20, 20)
    }
  });

  const cafeteriaInfoWindow = new google.maps.InfoWindow({
    content: "OIC Cafeteria",
  });

  cafeteriaMarker.addListener("click", () => {
    cafeteriaInfoWindow.open(map, cafeteriaMarker);
  });

  const kitchenMarker = new google.maps.Marker({
    position: { lat: 34.809654, lng: 135.562545 },
    map: map,
    icon: {
      url: 'pin.png',
      scaledSize: new google.maps.Size(20, 20)
    }
  });

  const kitchenInfoWindow = new google.maps.InfoWindow({
    content: "キャンピングキッチン",
  });

  kitchenMarker.addListener("click", () => {
    kitchenInfoWindow.open(map, kitchenMarker);
  });
}

window.initMap = initMap;