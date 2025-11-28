import { restaurantsMock } from "@/mock-data/restaurants";
import { useRouter } from "expo-router";
import React, { useRef } from "react";
import { StyleSheet, View } from "react-native";
import { WebView } from "react-native-webview";

export default function MapView() {
  const router = useRouter();
  const webViewRef = useRef<WebView>(null);

  // Generate markers data for the map using image URL from mock data
  const markersData = restaurantsMock
    .filter((r) => r.coordinates)
    .map((r) => ({
      id: r.id,
      lat: r.coordinates!.latitude,
      lng: r.coordinates!.longitude,
      name: r.name,
      rating: r.rating,
      imageUrl: r.image
    }));

  const mapHTML = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
  <style>
    body { margin: 0; padding: 0; }
    #map { height: 100vh; width: 100vw; }
    .leaflet-top.leaflet-left {
      left: auto !important;
      right: 0 !important;
    }
    .leaflet-control-zoom {
      margin-top: 220px !important;
      margin-right: 16px !important;
    }
    .custom-marker-wrapper {
      position: relative;
      cursor: pointer;
    }
    .marker-pin {
      position: relative;
      width: 80px;
      height: 100px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      padding-top: 10px;
      gap: 2px;
    }
    .marker-image-wrapper {
      position: relative;
      width: 43px;
      height: 43px;
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .marker-image-container {
      width: 43px;
      height: 43px;
      border-radius: 50%;
      border: 3px solid white;
      box-shadow: 0 4px 8px rgba(0,0,0,0.3);
      background: white;
      overflow: hidden;
      flex-shrink: 0;
    }
    .marker-image-inner {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    .marker-image {
      min-width: 100%;
      min-height: 100%;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
    }
    .marker-rating {
      position: absolute;
      top: 0px;
      right: -12px;
      z-index: 10;
      background: white;
      border-radius: 12px;
      padding: 2px 6px;
      display: flex;
      align-items: center;
      gap: 2px;
      box-shadow: 0 2px 4px rgba(0,0,0,0.2);
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
      font-size: 11px;
      font-weight: 600;
      color: #1D1B20;
    }
    .marker-star {
      color: #F9D013;
      font-size: 12px;
    }
    .marker-pointer {
      width: 0;
      height: 0;
      margin-top: -2px;
      border-left: 8px solid transparent;
      border-right: 8px solid transparent;
      border-top: 12px solid white;
      filter: drop-shadow(0 2px 2px rgba(0,0,0,0.2));
    }
  </style>
</head>
<body>
  <div id="map"></div>
  <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
  <script>
    const map = L.map('map').setView([37.78825, -122.4324], 13);
    
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© OpenStreetMap contributors',
      maxZoom: 19
    }).addTo(map);

    const markers = ${JSON.stringify(markersData)};
    
    markers.forEach(marker => {
      const markerHTML = \`
        <div class="marker-pin">
          <div class="marker-image-wrapper">
            <div class="marker-rating">
              <span class="marker-star">★</span>
              <span>\${marker.rating}</span>
            </div>
            <div class="marker-image-container">
              <div class="marker-image-inner">
                <img src="\${marker.imageUrl}" class="marker-image" alt="\${marker.name}" />
              </div>
            </div>
          </div>
          <div class="marker-pointer"></div>
        </div>
      \`;
      
      const customIcon = L.divIcon({
        className: 'custom-marker-wrapper',
        html: markerHTML,
        iconSize: [80, 100],
        iconAnchor: [40, 90],
        popupAnchor: [0, -90]
      });
      
      const leafletMarker = L.marker([marker.lat, marker.lng], { icon: customIcon })
        .addTo(map);
      
      leafletMarker.on('click', function() {
        window.ReactNativeWebView.postMessage(JSON.stringify({ 
          type: 'markerClick', 
          restaurantId: marker.id 
        }));
      });
    });
  </script>
</body>
</html>
  `;

  const handleMessage = (event: any) => {
    try {
      const data = JSON.parse(event.nativeEvent.data);
      if (data.type === "markerClick") {
        router.push(`/home/${data.restaurantId}?source=map` as any);
      }
    } catch (e) {
      console.error("Error parsing message:", e);
    }
  };

  return (
    <View style={styles.container}>
      <WebView
        ref={webViewRef}
        originWhitelist={["*"]}
        source={{ html: mapHTML }}
        style={styles.map}
        onMessage={handleMessage}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
});
