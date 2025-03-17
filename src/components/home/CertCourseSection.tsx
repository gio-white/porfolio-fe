import HighlightsGrid from "./ui/HighlightsGrid";

const CertAndCourses = () => {
  return (
    <section className="flex flex-col p-8 max-w-[80%] mx-auto">
      <div className="flex flex-col mx-auto my-[40px]">
        <h1 className="text-4xl font-bold py-8">Lifelong Learning: Certifications & Courses</h1>
        <p className="text-lg">
          I believe in staying ahead of the curve. Here are some certifications
          and courses I’ve completed to sharpen my skills and expand my
          expertise.
        </p>
      </div>
      <HighlightsGrid />
    </section>
  );
};
export default CertAndCourses;
