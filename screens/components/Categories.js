import { ScrollView, View, Text } from "react-native";
import React from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
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
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
      <CategoryCard imgUrl="https://links.papareact.com/gn7" title="testing" />
    </ScrollView>
  );
};

export default Categories;
