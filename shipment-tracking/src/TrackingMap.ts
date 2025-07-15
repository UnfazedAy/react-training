export interface Entity {
  location: {
    lat: number;
    lng: number;
  };
  popupText(): string
}

export class TrackingMap {
  private googleMap: google.maps.Map;
  constructor(elementId: string) {
    const mapElement = document.getElementById(elementId);
    if (!mapElement) {
      throw new Error('Map element with id "g-map" not found');
    }
    this.googleMap = new google.maps.Map(mapElement, {
      zoom: 1.6,
      center: {
        lat: 0,
        lng: 20,
      },
    });
  }

  attachMarker(entity: Entity): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: entity.location.lat,
        lng: entity.location.lng,
      },
    });

    marker.addListener("click", () => {
      const popup = new google.maps.InfoWindow({
        content: entity.popupText(),
      });
      popup.open(this.googleMap, marker);
    });
  }
}
