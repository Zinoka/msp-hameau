<script>
  import { onMount } from "svelte";
  import "leaflet/dist/leaflet.css";
  import L from "leaflet";

  let map;

  onMount(() => {
    const mapElement = document.getElementById("map");
    if (mapElement) {
      map = L.map(mapElement).setView([43.318625486445875, -0.3459285582523891], 13);
      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; OpenStreetMap contributors',
      }).addTo(map);

      L.marker([43.318625486445875, -0.3459285582523891])
        .addTo(map)
        .bindPopup("MSP Hameau")
        .openPopup();
    }
  });
</script>

<style>
  #map {
    height: 400px;
    width: 80%;
    margin-left: 50%;
    transform: translateX(-50%);
    margin-top: 2vh;
    margin-bottom: 3vh;
  }
</style>

<div id="map"></div>
