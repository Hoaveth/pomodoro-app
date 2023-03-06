export default function Timer() {
  const options = ["Pomodoro", "Short Break", "Long Break"];
  return (
    <div className=" w-10/12 mx-auto text-white flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 ">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === 0 ? "bg-gray-500 bg-opacity-30 " : ""
              }rounded-lg p-1 p-2 cursor-pointer transition-all`}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-9xl font-bold select-none m-0">25:00</h1>
      </div>
      <button className="px-16 py-2 text-3xl rounded-md bg-white text-blue-500 uppercase font-bold">
        Start
      </button>
    </div>
  );
}
