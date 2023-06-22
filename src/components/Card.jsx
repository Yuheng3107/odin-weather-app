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
      <div className="bg-white mt-4 p-6 flex-col justify-center items-center rounded-md">
        <h2 className="text-4xl p-2 font-medium">{location}</h2>
        <p className="p-2 text-2xl">{`It is currently ${condition}`}</p>
        <p className="p-2 text-xl">{`Temperature: ${temperature}°C`}</p>
        <p className="p-2 text-xl">{`Humidity: ${humidity}%`}</p>
        <p className="p-2 text-xl">{`Feels Like: ${feelsLike}°C`}</p>
        <p className="p-2 text-xl">{`Cloud Cover: ${cloud}%`}</p>
      </div>
    </div>
  );
}
