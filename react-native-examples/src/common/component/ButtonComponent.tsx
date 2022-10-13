import React from "react";
import {Button} from "react-native";
import {ObjectType} from "../utils/enum/ObjectType";

export interface IButtons {
  key: string; 
  method: any;
}

export const ButtonViews = {
  // Generate Buttons
  generateButtons: (buttons: IButtons[]): any => {
    return (
      buttons
        .filter((item: IButtons) => typeof item.method === ObjectType.FUNCTION)
        .map((item: IButtons, index: number) => {
          return <Button key={`${index}_${item.key}`} title={item.key} onPress={item.method} />
      })
    );
  },
}