import Places from "./Places.jsx";

import { useFetch } from "../hooks/useFetch.js";
import { fetchAvailablePlaces } from "../http.js";
import { sortPlacesByDistance } from "../loc.js";
import Error from "./Error.jsx";

async function fetchSortedPlaces() {
  const places = await fetchAvailablePlaces();

  return new Promise((resolve) => {
    navigator.geolocation.getCurrentPosition(({ coords }) => {
      const sortedPlaces = sortPlacesByDistance(places, coords.lat, coords.lng);

      resolve(sortedPlaces);
    });
  });
}

export default function AvailablePlaces({ onSelectPlace }) {
  const {
    error,
    isFetching,
    fetchedData: availablePlaces,
  } = useFetch(fetchSortedPlaces, []);

  if (error) {
    return <Error title="An error occured!" message={error.message} />;
  }

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      isLoading={isFetching}
      loadingText="Fetching your available places"
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
