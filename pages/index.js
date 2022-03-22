import { useState } from "react";

export default function Home() {
  const [nameFields, setNameFields] = useState([{ name: "" }]);
  const [ageFields, setAgeFields] = useState([{ age: "" }]);
  const [messageFields, setMessageFields] = useState([{ message: "" }]);
  const [error, setError] = useState(false);

  const addNameField = () => {
    let newField = { name: "" };
    setNameFields([...nameFields, newField]);
  };

  const removeNameField = (index) => {
    let newInputFields = [...nameFields];
    newInputFields.splice(index, 1);
    setNameFields(newInputFields);
  };

  const handleNameChange = (index, e) => {
    let newInputFields = [...nameFields];
    newInputFields[index][e.target.name] = e.target.value;
    setNameFields(newInputFields);
  };

  const addAgeField = () => {
    let newField = { age: "" };
    setAgeFields([...ageFields, newField]);
  };

  const removeAgeField = (index) => {
    let newInputFields = [...ageFields];
    newInputFields.splice(index, 1);
    setAgeFields(newInputFields);
  };

  const handleAgeChange = (index, e) => {
    let newInputFields = [...ageFields];
    newInputFields[index][e.target.name] = e.target.value;
    setAgeFields(newInputFields);
  };

  const addMessageField = () => {
    let newField = { message: "" };
    setMessageFields([...messageFields, newField]);
  };

  const removeMessageField = (index) => {
    let newInputFields = [...messageFields];
    newInputFields.splice(index, 1);
    setMessageFields(newInputFields);
  };

  const handleMessageChange = (index, e) => {
    let newInputFields = [...messageFields];
    newInputFields[index][e.target.name] = e.target.value;
    setMessageFields(newInputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Age: ", ageFields);
    console.log("Name: ", nameFields);
    console.log("Message:", messageFields);

    setError(false);
    setNameFields("");
    setAgeFields("");
    setMessageFields("");
  };
  return (
    <main className="relative mx-auto max-w-3xl px-3">
      <h1 className="mt-5 mb-10 bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text pb-1 text-center text-4xl font-bold text-transparent">
        Dynamic Form
      </h1>
      <div className="flex justify-around gap-5">
        <div>
          <div
            className="cursor-pointer rounded bg-gradient-to-tr from-pink-500 to-amber-500 py-2 px-3 text-center text-sm  font-medium "
            onClick={addNameField}
          >
            Add Name Field
          </div>
          <div
            className="mt-2 cursor-pointer rounded bg-gradient-to-tr from-pink-500 to-amber-500 py-2 px-3 text-center text-sm font-medium"
            onClick={addAgeField}
          >
            Add Age Field
          </div>
          <div
            className="mt-2 cursor-pointer rounded bg-gradient-to-tr from-pink-500 to-amber-500 py-2 px-3 text-center text-sm font-medium"
            onClick={addMessageField}
          >
            Add TextField
          </div>
        </div>
        <form className="relative flex-1 space-y-2.5 border-2 px-4 pt-4 pb-10">
          <div>
            {nameFields.map((nameField, index) => (
              <div key={index}>
                {index > 0 && (
                  <div className="mb-2 flex gap-5">
                    <input
                      className={`w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      }`}
                      type="text"
                      name="name"
                      placeholder={`Enter your name`}
                      value={nameField.name}
                      onChange={(e) => handleNameChange(index, e)}
                    />
                    <button
                      className=" rounded-md  bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600"
                      onClick={() => removeNameField(index)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {ageFields.map((ageField, index) => (
              <div key={index}>
                {index > 0 && (
                  <div className="mb-2 flex gap-5">
                    <input
                      className={`w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      }`}
                      type="number"
                      name="age"
                      placeholder={`Age`}
                      value={ageField.age}
                      onChange={(e) => handleAgeChange(index, e)}
                    />
                    <button
                      className=" rounded-md  bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600"
                      onClick={() => removeAgeField(index)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div>
            {messageFields.map((messageField, index) => (
              <div key={index}>
                {index > 0 && (
                  <div className="mb-2 flex items-start gap-5">
                    <textarea
                      className={`w-full rounded border border-slate-300 px-3 pt-2 pb-16 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                        error &&
                        "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                      }`}
                      name="age"
                      placeholder={`TextField`}
                      value={messageFields.message}
                      onChange={(e) => handleMessageChange(index, e)}
                    />
                    <button
                      className=" rounded-md  bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600"
                      onClick={() => removeMessageField(index)}
                    >
                      Remove
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>

          <button
            className="absolute right-0 bottom-0 rounded bg-blue-500 px-3 py-2 font-medium text-white hover:bg-blue-600"
            onClick={() => setError(true)}
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
}
