import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [inputFields, setInputFields] = useState([{ name: "", age: "" }]);
  const [gender, setGender] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [emailSend, setEmailSend] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (index, e) => {
    let newInputFields = [...inputFields];
    newInputFields[index][e.target.name] = e.target.value;
    setInputFields(newInputFields);
  };

  const addFriend = () => {
    let newField = { name: "", age: "" };
    setInputFields([...inputFields, newField]);
  };

  const removeFriend = (index) => {
    let newInputFields = [...inputFields];
    newInputFields.splice(index, 1);
    setInputFields(newInputFields);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Name: ", name);
    console.log("Age: ", age);
    console.log("Friends", inputFields);
    console.log("Gender:", gender);
    console.log("Subject:", subject);
    console.log("Message:", message);
    setError(false);
    setEmailSend(true);
    setName("");
    setAge("");
    setInputFields([{ name: "", age: "" }]);
    setGender("");
    setSubject("");
    setMessage("");
    setTimeout(() => {
      setEmailSend(false);
    }, 2500);
  };
  return (
    <main className="relative flex  flex-col items-center px-3 font-body">
      <h1 className="mt-5 mb-10 bg-gradient-to-tr from-pink-500 to-amber-500 bg-clip-text pb-1 text-center text-4xl font-bold text-transparent">
        Dynamic Form
      </h1>
      <form className="w-full max-w-lg space-y-2.5" onSubmit={handleSubmit}>
        <div>
          <label className="w-full">
            <span className="block font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
              Name
            </span>
            <input
              className={`w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                error &&
                "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              }`}
              placeholder="Enter your name"
              type="text"
              required
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label className="w-full">
            <span className="block font-medium after:ml-0.5 after:text-red-500 after:content-['*']">
              Age
            </span>
            <input
              className={`w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                error &&
                "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              }`}
              placeholder="Enter your age"
              type="number"
              required
              name="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label className="font-medium" htmlFor="friend">
            Friends Details
          </label>
          {inputFields.map((inputField, index) => (
            <div key={index} className="mb-1 flex">
              <input
                className={`w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400  shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 ${
                  error &&
                  "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                type="text"
                id="friend"
                name="name"
                placeholder={`Enter name of friend ${index + 1}`}
                value={inputField.name}
                onChange={(e) => handleChange(index, e)}
              />
              <input
                className={`ml-1 w-1/2 rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm  focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-full ${
                  error &&
                  "invalid:border-pink-500 invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
                }`}
                type="number"
                name="age"
                placeholder="Age"
                value={inputField.age}
                onChange={(e) => handleChange(index, e)}
              />
              <button
                className="ml-3 rounded-md  bg-red-500 px-3 py-2 font-medium text-white hover:bg-red-600"
                onClick={() => removeFriend(index)}
              >
                Remove
              </button>
            </div>
          ))}
          <div
            className="mt-2 cursor-pointer rounded bg-gradient-to-tr from-pink-500 to-amber-500 py-2 text-center font-medium"
            onClick={addFriend}
          >
            Add More Friends
          </div>
        </div>

        <div>
          <label htmlFor="male" className="font-medium">
            Gender
          </label>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <input
                type="radio"
                id="male"
                name="gender"
                value="male"
                onChange={(e) => setGender(e.target.value)}
                className="focus:ring-0"
              />
              <label htmlFor="male" className="">
                Male
              </label>
            </div>
            <div className="flex items-center gap-1">
              <input
                type="radio"
                id="female"
                name="gender"
                className="focus:ring-0"
                value="female"
                onChange={(e) => setGender(e.target.value)}
              />
              <label htmlFor="female">Female</label>
            </div>
          </div>
        </div>

        <div>
          <label>
            <span className="block font-medium after:ml-0.5 after:text-red-500 after:content-['*'] ">
              Subject
            </span>
            <select
              className={`${
                error &&
                "invalid:border-pink-500 focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              } w-full rounded border border-slate-300 px-3 py-2 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 `}
              required
              type="text"
              name="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
            >
              <option value="" disabled hidden>
                Select your subject
              </option>
              <option value="science">Science</option>
              <option value="commerce">Commerce</option>
              <option value="arts">Arts</option>
            </select>
          </label>
        </div>

        <div>
          <label>
            <span className="block font-medium">Additional Message</span>
            <textarea
              className={`mb-2 w-full rounded  border border-slate-300 px-3 pt-2 pb-16 text-sm placeholder-slate-400 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 `}
              placeholder="Enter your message"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>
        </div>

        <button
          className="rounded bg-blue-500 px-3 py-2 font-medium text-white hover:bg-blue-600"
          onClick={() => setError(true)}
          type="submit"
        >
          Submit
        </button>
      </form>
      <div
        className={` ${
          emailSend ? "opacity-100" : "opacity-0"
        } absolute top-16 left-0 right-0 flex justify-center transition-opacity duration-1000 ease-linear`}
      >
        <p className="rounded bg-gradient-to-tr from-pink-500 to-amber-500 p-3 text-sm font-medium">
          Check console for the results
        </p>
      </div>
    </main>
  );
}
