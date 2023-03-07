export default function Timer({
  stage,
  switchStage,
  seconds,
  minutes,
  toggleTimer,
  runTimer,
}) {
  const options = [
    { name: "Pomodoro", value: 25 },
    { name: "Short Break", value: 5 },
    { name: "Long Break", value: 10 },
  ];

  return (
    <div className=" w-10/12 mx-auto text-white flex flex-col justify-center items-center mt-10">
      <div className="flex gap-5 ">
        {options.map((option, index) => {
          return (
            <h1
              key={index}
              className={`${
                index === stage ? "bg-gray-500 bg-opacity-30 " : ""
              } rounded-lg p-1 p-2 cursor-pointer transition-all`}
              onClick={() => switchStage(index)}
            >
              {option.name}
            </h1>
          );
        })}
      </div>
      <div className="mt-10 mb-10">
        <h1 className="text-9xl font-bold select-none m-0">
          {minutes}:{seconds}
        </h1>
      </div>
      <button
        className="px-16 py-2 text-3xl rounded-md bg-white text-blue-500 uppercase font-bold"
        onClick={() => toggleTimer()}
      >
        {runTimer ? "Stop" : "Start"}
      </button>
    </div>
  );
}
