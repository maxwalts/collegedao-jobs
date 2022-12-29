// button needs value prop can pass information to state
// TODO: continue to be white after click
export default function Categories({ selectedCategory, setSelectedCategory }: any) {

  return (
    <div className="flex flex-row space-x-5">
      <CategoryItem value="all" onSelectedCategoryChange={setSelectedCategory} isSelected={selectedCategory == "all"} />
      <CategoryItem value="marketing" onSelectedCategoryChange={setSelectedCategory} isSelected={selectedCategory == "marketing"} />
      <CategoryItem value="technical" onSelectedCategoryChange={setSelectedCategory} isSelected={selectedCategory == "technical"} />
      <CategoryItem value="design" onSelectedCategoryChange={setSelectedCategory} isSelected={selectedCategory == "design"} />
    </div >
  );
};

function CategoryItem({ value, onSelectedCategoryChange, isSelected }: any) {
  const handleClick = (e: any) => {
    onSelectedCategoryChange(e.target.value);
  }

  var className = isSelected ? "text-stone-200" : "text-stone-400";
  className += " hover:text-stone-200";

  return (
    <button onClick={handleClick} value={value} className={className}>{value.charAt(0).toUpperCase() + value.slice(1)}</button>
  )
}