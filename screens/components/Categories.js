import { ScrollView, View, Text } from "react-native";
import React, { useState, useEffect } from "react";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../../sanity";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(
        `
    *[_type == 'category']`
      )
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizonal: 15,
        paddingTop: 10,
      }}
      horizontal
      showHorizontanlScrollIndicator={false}
      className="mx-4">
      {/* Category Card  */}
      {categories.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={urlFor(category.image).width(200).url()}
          title={category.title}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;
