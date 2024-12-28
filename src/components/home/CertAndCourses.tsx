import HighlightsGrid from "./ui/HighlightsGrid";

const CertAndCourses = () => {
  return (
    <section className="flex flex-col">
      <div className="flex flex-col mx-auto my-[40px]">
        <h1 className="">Lifelong Learning: Certifications & Courses</h1>
        <p>
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
