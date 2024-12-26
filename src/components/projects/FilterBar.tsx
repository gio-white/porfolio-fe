import Dropdown from "./ui/Dropdown"

const FilterBar = () => {
  return (
    <div className="w-full flex justify-center gap-2 p-2 bg-orange-700">
        <Dropdown name="ProjectArea" options={['Data Analysis', 'Web Development', 'Data Engineering', 'Machine Learning']} />
        <Dropdown name="TechUsed" options={['React/NextJS','Python', 'Typescript']} />
    </div>
  )
}
export default FilterBar