export const Button = ({ buttonLabel, submitHandler}) => {
  return (
    <button
      onClick={submitHandler}
      className={`p-2 px-4 mb-4 font-medium bg-green-400 hover:bg-green-600 hover:text-white rounded-md ml-5`}
    >
      {buttonLabel}
    </button>
  );
};
