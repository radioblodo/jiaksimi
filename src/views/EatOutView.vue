<script setup lang="ts">
import { onMounted, ref } from "vue";
import { Loader } from "@googlemaps/js-api-loader";

const selectedPlace = ref<google.maps.places.PlaceResult | null>(null);
const loading = ref(true);
const mapDiv = ref<HTMLDivElement | null>(null);
const suggestions = ref<google.maps.places.PlaceResult[]>([]);

const loader = new Loader({
  apiKey: import.meta.env.VITE_GOOGLE_MAPS_KEY!,
  version: "weekly",
  libraries: ["places"],
});

async function initMap() {
  const { Map } = await loader.importLibrary("maps");
  const { PlacesService } = await loader.importLibrary("places");
  console.log("Initializing map...");

  navigator.geolocation.getCurrentPosition(
    async (pos) => {
      const center = {
        lat: pos.coords.latitude,
        lng: pos.coords.longitude,
      };

      const map = new Map(mapDiv.value!, {
        center,
        zoom: 15,
      });

      const service = new google.maps.places.PlacesService(map);

      service.nearbySearch(
        {
          location: center,
          radius: 1500,
          type: "restaurant",
        },
        (results, status) => {
          if (status === google.maps.places.PlacesServiceStatus.OK && results) {
            // Randomly pick 5 from results
            const shuffled = results.sort(() => 0.5 - Math.random());
            suggestions.value = shuffled.slice(0, 5);
          }
          loading.value = false;
        }
      );
    },
    (err) => {
      alert("Location permission denied or failed.");
      loading.value = false;
    }
  );
}

function pickPlace(place: google.maps.places.PlaceResult) {
  selectedPlace.value = place;
  if (place.geometry?.location && mapDiv.value) {
    const { Map, Marker } = google.maps;
    const map = new Map(mapDiv.value, {
      center: place.geometry.location,
      zoom: 15,
    });
    new Marker({
      position: place.geometry.location,
      map,
      title: place.name,
    });
  }
}

onMounted(initMap);
</script>

<template>
  <div class="eatout-container">
    <h2 class="title">🍽️ Let's Eat Out!</h2>

    <div v-if="loading" class="loading">Loading nearby places…</div>

    <div v-else>
      <div class="suggestion-list">
        <h3>Suggestions:</h3>
        <ul>
          <li
            v-for="place in suggestions"
            :key="place.place_id"
            class="suggestion-item"
            @click="pickPlace(place)"
          >
            <strong>{{ place.name }}</strong> <br />
            <span v-if="place.vicinity">{{ place.vicinity }}</span>
          </li>
        </ul>
      </div>

      <div v-if="selectedPlace" class="info-box">
        <h3>{{ selectedPlace.name }}</h3>
        <p v-if="selectedPlace.vicinity">{{ selectedPlace.vicinity }}</p>
        <p v-if="selectedPlace.rating">⭐ {{ selectedPlace.rating }} / 5</p>
      </div>
    </div>

    <div ref="mapDiv" class="map"></div>
  </div>
</template>

<style scoped>
.eatout-container {
  padding: 1rem;
  max-width: 800px;
  margin: auto;
}
.title {
  font-size: 1.6rem;
  margin-bottom: 1rem;
}
.loading {
  text-align: center;
  margin-bottom: 1rem;
}
.map {
  width: 100%;
  height: 500px;
  border-radius: 10px;
  margin-top: 1rem;
}
.info-box {
  background: #f9f9f9;
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
}
.suggestion-list {
  margin-bottom: 1rem;
}
.suggestion-item {
  cursor: pointer;
  margin-bottom: 0.5rem;
  padding: 0.4rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background 0.2s;
}
.suggestion-item:hover {
  background: #f0f0f0;
}
</style>
