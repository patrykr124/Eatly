import { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import SanityClient from "../../../sanity";
import CategoriesCard from "./CategoriesCard";
const Categories = () => {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    SanityClient.fetch(`*[_type == "category"]`)
      .then((data) => setCategories(data))
      .catch((err) => console.error("Sanity Fetch Error:", err));
  }, []);

  return (
    <ScrollView
      className=""
      contentContainerStyle={{
        paddingHorizontal: 8,
        paddingTop: 10,
        paddingBottom: 10,
        gap: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoriesCard
          key={category._id}
          title={category.name}
          imgUrl={category.image}
        />
      ))}
      
    </ScrollView>
  );
};
export default Categories;
