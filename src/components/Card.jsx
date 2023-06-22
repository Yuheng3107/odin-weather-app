export default function Card({
  location,
  condition,
  temperature,
  humidity,
  feelsLike,
  cloud,
}) {
  return (
    <div className="flex justify-center mt-10">
      <div className="bg-white mt-4 p-4 flex-col justify-center items-center rounded-md">
        <h2 className="text-xl p-2">{location}</h2>
        <p className="p-2">{`It is currently ${condition}`}</p>
        <p className="p-2">{`Temperature: ${temperature}°C`}</p>
        <p className="p-2">{`Humidity: ${humidity}%`}</p>
        <p className="p-2">{`Feels Like: ${feelsLike}°C`}</p>
        <p className="p-2">{`Cloud Cover: ${cloud}%`}</p>
      </div>
    </div>
  );
}
