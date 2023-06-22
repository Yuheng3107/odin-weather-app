import { useForm } from "react-hook-form";

export default function SearchBar({ getWeatherData, parseWeatherData }) {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    getWeatherData(data["search"]).then((data) => parseWeatherData(data));
  };
  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-center items-center bg-white w-1/2 rounded-lg mt-2"
      >
        <input
          type="search"
          placeholder="Search your city here"
          className="px-4 w-full focus:outline-none"
          {...register("search")}
        ></input>
        <button type="submit" className="p-2 me-2">
          Search
        </button>
      </form>
    </div>
  );
}
