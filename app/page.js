import Image from "next/image";
import GetStartedButton from "@/components/Buttons/GetStartedButton";
import Navbar from "@/components/Navbar";
import NavSpace from "@/components/NavSpace";
import EventContainer from "@/components/EventContainer";
import LoginModal from "@/components/LoginModal";
export default function Home() {
  return (
    <>
      {" "}
      <Navbar />
      <NavSpace />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <section>
          <div>
            <h1 className=" text-[50px] lg:text-9xl font-black italic">
              Step into the Extraordinary: Your Premier Destination for Event
              Tickets!
            </h1>
          </div>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-7">
            <GetStartedButton />
            <a href="/" className="self-center">
              Learn more about us
            </a>
          </div>
        </section>
        <NavSpace />
        <section>
          <EventContainer type="HOTTEST" />
          <EventContainer type="ONLINE" />
        </section>
      </main>
    </>
  );
}
