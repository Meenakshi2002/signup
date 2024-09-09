export const Input = ({ type, placeholder, inputRef }) => {
  return (
    <input type={type} placeholder={placeholder} ref={inputRef} 
    className="border-2 p-2 rounded-md"/>
  );
};
