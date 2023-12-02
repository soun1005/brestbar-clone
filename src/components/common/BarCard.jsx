import React from 'react';

// {
//     "id": 121,
//     "name": "La Javanaise Bar Brest",
//     "location": {
//       "type": "Point",
//       "coordinates": [-4.4834526, 48.3831122]
//     },
//     "place_id": "ChIJR9UAnly5FkgRJuyVhchlEg4",
//     "rating": "4.0",
//     "address": "40 Quai de la Douane, 29200 Brest, France",
//     "status": "OPERATIONAL",
//     "formatted_phone_number": "02 98 80 68 41",
//     "international_phone_number": "+33 2 98 80 68 41",
//     "maps_url": "https://maps.google.com/?cid=1013984778020842534",
//     "user_ratings_total": 238,
//     "opening_hours": "{\n    \"0\": \"lundi: Fermé\",\n    \"1\": \"mardi: Fermé\",\n    \"2\": \"mercredi: Fermé\",\n    \"3\": \"jeudi: Fermé\",\n    \"4\": \"vendredi: 22:00 – 04:00\",\n    \"5\": \"samedi: 22:00 – 04:00\",\n    \"6\": \"dimanche: Fermé\"\n}",
//     "website": "https://www.facebook.com/lajavanaise29200/",
//     "category": [1, 2],
//     "type": [21]
//   },

const categoryMapper = {
  1: 'Au chaud',
  2: '✈️ Exotique',
};

const BarCard = ({ type, name, address, categories, distance }) => {
  return (
    <div className="flex flex-col gap-4 rounded-2xl bg-gray-secondary p-6 text-white">
      {/* bar information and eye button */}
      <div className="flex items-center justify-between">
        <div className="flex w-4/5 flex-col">
          <p>{type.length > 0 ? 'BAR' : 'PAS DÉFINIE'}</p>
          <h2>{name}</h2>
          <p>
            🏃‍♂️ A {distance} KM - {address}
          </p>
        </div>
        <button className="aspect-square rounded-full bg-violet p-4">👁</button>
      </div>
      {/* tags if there's any */}
      {categories.map((category) => (
        <div key={category} className="flex items-center gap-3">
          {/* using category as a key of categoryMapper */}
          {categoryMapper[category]}
        </div>
      ))}
    </div>
  );
};

export default BarCard;
