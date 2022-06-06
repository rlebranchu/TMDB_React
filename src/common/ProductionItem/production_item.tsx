import React from "react";
import {
  Text
} from "react-native";
import { MovieProductor } from "../../types/interfaces";
import ProductionItemStyle from "./production_item_style";

const ProductionItem: React.FC<{productor: MovieProductor}> =  ({productor}) => {
  return (
    <Text style={ProductionItemStyle.productorName}>{productor.name}</Text>
  );
};

export default ProductionItem;