import Form from "./components/Form";
import Hero from "./components/Hero";

function LandingPage() {
  return (
    <>
      <div className="flex flex-col   pt-24  px-4 md:px-20">
        <Hero />
        <Form />
      </div>
    </>
  );
}

export default LandingPage;
