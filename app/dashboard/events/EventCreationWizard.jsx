"use client";
import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AiOutlineClose } from "react-icons/ai";
import { FaTimes } from "react-icons/fa";

import "./style.css";

const WelcomeStep = ({ nextStep }) => (
  <div className="animated-background w-full bg-white h-screen text-black rounded-lg flex flex-col justify-center items-center">
    <h2 className="p-5  text-[80px] font-black italic ">Welcome!</h2>
    <p className="text-xl">
      To <span>Lets go!</span> Event Creation Wizard
    </p>
    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={nextStep}
    >
      Next
    </button>
  </div>
);

const TipsStep = ({ nextStep, prevStep }) => (
  <div className="animated-background w-full bg-white h-screen text-black rounded-lg flex flex-col justify-center items-center">
    <h2 className="p-5  text-[50px] text-center font-black italic ">
      Here's our recipe for an unforgettable event:
    </h2>
    <div className="flex justify-center gap-4 p-10 w-full">
      <div className="bg-white bg-opacity-30 text-black p-2 rounded-lg w-[30%] p-5 shadow-lg backdrop-filter backdrop-blur-lg">
        <h3 className="font-bold text-xl">Tip 1</h3>
        <p>
          Easily build and publish your event, then watch your sales skyrocket.
        </p>
      </div>
      <div className="bg-white bg-opacity-30 text-black p-2 rounded-lg w-[30%] p-5 shadow-lg backdrop-filter backdrop-blur-lg">
        <h3 className="font-bold text-xl">Tip 1</h3>
        <p>
          Easily build and publish your event, then watch your sales skyrocket.
        </p>
      </div>
      <div className="bg-white bg-opacity-30 text-black p-2 rounded-lg w-[30%] p-5 shadow-lg backdrop-filter backdrop-blur-lg">
        <h3 className="font-bold text-xl">Tip 1</h3>
        <p>
          Easily build and publish your event, then watch your sales skyrocket.
        </p>
      </div>
    </div>
    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={nextStep}
    >
      I am ready!
    </button>
    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={prevStep}
    >
      back
    </button>
  </div>
);

const TriviaStep = ({ nextStep, prevStep, setTrivia }) => (
  <div className="animated-background w-full bg-white h-screen text-black rounded-lg flex flex-col justify-center items-center">
    <h2 className="p-5  text-[50px] text-center font-black italic ">
      Tell us a little about your events
    </h2>
    <div className="flex flex-col ">
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold p-10 italic">
          {" "}
          How many events do you plan to organize in the next year?
        </p>
        <select
          className="w-[400px] h-[50px] text-black rounded-md shadow-2xl"
          onChange={(e) => setTrivia(e.target.value)}
        >
          <option value="small">Small (1-50 attendees)</option>
          <option value="medium">Medium (51-200 attendees)</option>
          <option value="large">Large (201+ attendees)</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold p-10 italic">
          {" "}
          On average, how big are your events?
        </p>
        <select
          className="w-[400px] h-[50px] text-black rounded-md shadow-2xl"
          onChange={(e) => setTrivia(e.target.value)}
        >
          <option value="1-5">1-5</option>
          <option value="6-10">6-10</option>
          <option value="11-15">11-15</option>
          <option value="16+">16+</option>
        </select>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-[20px] font-bold p-10 italic">
          {" "}
          On average, how big are your events?
        </p>
        <select
          className="w-[400px] h-[50px] text-black rounded-md shadow-2xl"
          onChange={(e) => setTrivia(e.target.value)}
        >
          <option value="small">Small (1-50 attendees)</option>
          <option value="medium">Medium (51-200 attendees)</option>
          <option value="large">Large (201+ attendees)</option>
        </select>
      </div>
    </div>
    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={nextStep}
    >
      Next
    </button>
    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={prevStep}
    >
      back
    </button>
  </div>
);

const EventDataStep = ({
  nextStep,
  prevStep,
  setEventData,
  addTicket,
  updateTicket,
  tickets,
  deleteTicket,
  calculateEstimatedIncome,
}) => (
  <div className="w-full  bg-[#FAF9F6] h-screen text-black rounded-lg flex flex-col justify-center items-center overflow-auto ">
    <div className="w-[80%] overflow-auto">
      <h2 className="text-[25px] font-bold my-[20px] italic">
        Now lets fill some boring paperwork 🥱
      </h2>
      <p className="text-[20px] font-light my-[20px]">
        Answer a few questions about your event and our AI creation tool will
        use internal data to build an event page. You can still create an event
        without AI.
      </p>
      <h2 className="text-[25px] font-bold my-[20px] italic">
        What’s the name of your event?
      </h2>
      <p className="text-[20px] font-light my-[20px]">
        This will be your event’s title. Your title will be used to help create
        your event’s summary, description, category, and tags – so be specific!
      </p>
      <input
        className="w-full border border-black  h-[72px] p-5 rounded-lg text-[20px] font-light my-[20px]"
        placeholder="event title*"
        onChange={(e) => setEventData(e.target.value)}
      />
      <h2 className="text-[25px] font-bold my-[20px] italic">
        What’s your event about?
      </h2>
      <p className="text-[20px] font-light my-[20px]">
        This will be your event’s title. Your title will be used to help create
        your event’s summary, description, category, and tags – so be specific!
      </p>
      <textarea
        className="w-full border border-black  h-[150px] p-5 rounded-lg text-[20px] font-light my-[20px]"
        placeholder="Event description*"
        onChange={(e) => setEventData(e.target.value)}
      />
      <h2 className="text-[25px] font-bold my-[20px] italic">
        When does your event start and end?
      </h2>
      <div className="w-full flex justify-between">
        <label className="flex flex-col text-[20px] font-light my-[20px]">
          Date
          <input
            className="border w-[300px] border-black h-[72px] p-5 rounded-lg"
            type="date"
          />
        </label>
        <label className="flex flex-col text-[20px] font-light my-[20px]">
          Start Time
          <input
            className="border w-[300px] border-black h-[72px] p-5 rounded-lg"
            type="time"
          />
        </label>
        <label className="flex flex-col text-[20px] font-light my-[20px]">
          End Time
          <input
            className="border w-[300px] border-black h-[72px] p-5 rounded-lg"
            type="time"
          />
        </label>
      </div>
      <h2 className="text-[25px] font-bold my-[20px] italic">
        What Type of Event Are you Hosting?
      </h2>
      <div className="w-full flex justify-between">
        <div className=" m-10 bg-yellow-300 px-[130px] py-[20px] rounded-full ">
          Physical
        </div>
        <div className=" m-10 bg-yellow-300 px-[130px] py-[20px] rounded-full ">
          Online
        </div>
        <div className=" m-10 bg-yellow-300 px-[130px] py-[20px] rounded-full ">
          Hybrid
        </div>
      </div>
      {/* <input
        className="w-full border border-black h-[52px]"
        onChange={(e) => setEventData(e.target.value)}
      />
      <p>Use location</p> */}
      <h2 className="text-[25px] font-bold my-[20px] italic">
        How much do you want to charge for tickets?
      </h2>
      <label className="flex items-center text-[20px] font-light my-[20px]">
        Or are tickets free?
        <input type="checkbox" className="ml-4 h-6 w-6" />
      </label>
      <p className="text-[20px] font-light my-[20px]">
        Our tool can only generate different Ticket Types To Suit Your Event
        Needs.
      </p>
      <div className="flex gap-6 overflow-x-auto">
        <div className="flex gap-6">
          {tickets.map((ticket, index) => (
            <div
              key={index}
              className="flex flex-col border bg-[#FAF9F6] p-4 rounded  mb-4 w-[230px] h-[260px] shadow-md relative"
            >
              {index !== 0 && (
                <button
                  onClick={() => deleteTicket(index)}
                  className="absolute top-0 right-0 p-2"
                >
                  <AiOutlineClose />
                </button>
              )}
              <label className="mb-2 font-medium text-gray-700">
                Ticket Type
                <input
                  value={ticket.type}
                  onChange={(e) => updateTicket(index, "type", e.target.value)}
                  className="border rounded p-2 w-full "
                />
              </label>
              <label className="mb-2 font-medium text-gray-700">
                Ticket Price in $
                <input
                  value={ticket.price}
                  onChange={(e) => updateTicket(index, "price", e.target.value)}
                  className="border rounded p-2 w-full"
                />
              </label>
              <label className="mb-2 font-medium text-gray-700">
                Ticket Quantity
                <input
                  value={ticket.quantity}
                  onChange={(e) =>
                    updateTicket(index, "quantity", e.target.value)
                  }
                  className="border rounded p-2 w-full"
                />
              </label>
            </div>
          ))}
        </div>

        <button
          onClick={addTicket}
          className="flex flex-none items-center h-[260px] justify-center border-dotted border-4 rounded-md  border-gray-300 text-gray-300 w-[230px] h-[96px] rounded mb-4"
        >
          <span className="mr-2">+</span> Add more prices
        </button>
      </div>
      {!isNaN(calculateEstimatedIncome()) && (
        <h2>
          Based on the Maths Initial Income: ${calculateEstimatedIncome()}{" "}
          (pre-charges of course)
        </h2>
      )}
    </div>

    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={nextStep}
    >
      Next
    </button>
    <button
      className="m-10  bg-black text-white px-[60px] py-[20px] rounded-lg"
      onClick={prevStep}
    >
      back
    </button>
  </div>
);
const PhotosStep = ({ nextStep, prevStep }) => {
  const [photos, setPhotos] = useState([]);

  const handlePhotoUpload = (event) => {
    setPhotos([...photos, ...event.target.files]);
  };

  const deletePhoto = (index) => {
    setPhotos(photos.filter((_, i) => i !== index));
  };

  return (
    <div className=" animated-background w-full bg-white h-screen text-black rounded-lg flex flex-col justify-center items-center">
      <h2 className="p-5  text-[50px] text-center font-black italic ">
        Lets upload some catchy photos
      </h2>
      <div className="flex w-[80%] justify-center flex-wrap gap-6 overflow-auto ">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="flex flex-col border bg-[#FAF9F6] p-4 rounded mb-4 w-[230px] h-[260px] shadow-md relative"
          >
            <button
              onClick={() => deletePhoto(index)}
              className="absolute top-0 right-0 p-2"
            >
              <AiOutlineClose className="text-black" />
            </button>
            <img
              src={URL.createObjectURL(photo)}
              alt="Uploaded"
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        <label className=" justify-center items-center cursor-pointer flex flex-col border-dotted border-4 border-gray-500 p-4 rounded mb-4 w-[230px] h-[260px] shadow-md relative">
          <span>+ Upload Photo</span>
          <input
            type="file"
            multiple
            onChange={handlePhotoUpload}
            className="w-full h-full hidden"
          />
        </label>
      </div>
      <button
        className="m-10 bg-black text-white px-[60px] py-[20px] rounded-lg"
        onClick={nextStep}
      >
        Publish Event
      </button>
      <button
        className="m-10 bg-black text-white px-[60px] py-[20px] rounded-lg"
        onClick={prevStep}
      >
        Back
      </button>
    </div>
  );
};
const ThankYouStep = ({ setIsModalOpen }) => (
  <div className=" animated-background w-full bg-white h-screen text-black rounded-lg flex flex-col justify-center items-center">
    <h2 className="p-5  text-[50px] text-center font-black italic ">
      Thank you for using our Event Creation Wizard
    </h2>
    <p>Your Event is being reviewed and will be published if approved</p>
    <button
      onClick={() => setIsModalOpen(false)}
      className="m-10 bg-black text-white px-[60px] py-[20px] rounded-lg"
    >
      Exit Wizard
    </button>
  </div>
);

const EventCreationWizard = ({ setIsModalOpen, isModalOpen }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [trivia, setTrivia] = useState("");
  const [eventData, setEventData] = useState("");
  const [tickets, setTickets] = useState([
    { type: "General Admission", price: "" },
  ]);

  const addTicket = () => {
    setTickets([...tickets, { type: "", price: "", quantity: "" }]);
  };
  const calculateEstimatedIncome = () => {
    return tickets.reduce((total, ticket) => {
      return total + ticket.price * ticket.quantity;
    }, 0);
  };

  const updateTicket = (index, field, value) => {
    const newTickets = [...tickets];
    newTickets[index][field] = value;
    setTickets(newTickets);
  };
  const deleteTicket = (index) => {
    setTickets(tickets.filter((_, i) => i !== index));
  };
  const nextStep = () => setCurrentStep(currentStep + 1);
  const prevStep = () => setCurrentStep(currentStep - 1);

  return (
    <div className="flex justify-center items-center ">
      {" "}
      <div className="w-[1500px] h-screen">
        <TransitionGroup>
          <button
            onClick={() => setIsModalOpen(!isModalOpen)}
            className=" cursor-pointer text-3xl font-black absolute top-0 left-0 m-4"
          >
            <FaTimes />
          </button>{" "}
          <CSSTransition key={currentStep} timeout={500} classNames="fade">
            <div className="">
              {currentStep === 1 && <WelcomeStep nextStep={nextStep} />}
              {currentStep === 2 && (
                <TipsStep nextStep={nextStep} prevStep={prevStep} />
              )}{" "}
              {/* Pass prevStep */}
              {currentStep === 3 && (
                <TriviaStep
                  nextStep={nextStep}
                  prevStep={prevStep}
                  setTrivia={setTrivia}
                /> /* Pass prevStep */
              )}
              {currentStep === 4 && (
                <EventDataStep
                  nextStep={nextStep}
                  prevStep={prevStep}
                  addTicket={addTicket}
                  updateTicket={updateTicket}
                  deleteTicket={deleteTicket}
                  tickets={tickets}
                  calculateEstimatedIncome={calculateEstimatedIncome}
                /> /* Pass prevStep */
              )}
              {currentStep === 5 && (
                <PhotosStep nextStep={nextStep} prevStep={prevStep} />
              )}
              {currentStep === 6 && (
                <ThankYouStep setIsModalOpen={setIsModalOpen} />
              )}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </div>
  );
};

export default EventCreationWizard;
