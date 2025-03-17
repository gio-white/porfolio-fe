"use client";
import { motion } from "framer-motion";

// A Card that display a Course or Certification
export const CourseCard: React.FC<Course> = ({ name, color, desc, icon }) => {
  return (
    <motion.div
      style={{ borderColor: color }}
      className="flex flex-col justify-between mx-auto w-full h-52 max-w-[33%] p-4 m-4 rounded-lg border-2"
      whileHover={{ scale: 1.05, borderColor: color }} // Change border color on hover
      transition={{ duration: 0.3 }}
    >
      <img src={icon} alt="Img" />
      <p>{desc}</p>
      <h1 style={{ color: color }} className="text-right text-xl">
        {name}
      </h1>
    </motion.div>
  );
};

type Course = {
  id: number;
  name: string;
  color: string;
  desc: string;
  icon: string;
};

// Grid of Course Cards given a Course Array
type CourseArray = {
  courseList: Course[];
};

export const CourseCardItems: React.FC<CourseArray> = ({ courseList }) => {
  return (
    <section className="w-[80%] flex mx-auto justify-between p-8 gap-4">
      {courseList.map((course) => {
        return <CourseCard key={course.id} {...course} />;
      })}
    </section>
  );
};
