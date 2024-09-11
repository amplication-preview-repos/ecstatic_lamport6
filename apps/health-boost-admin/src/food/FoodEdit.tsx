import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DiaryEntryTitle } from "../diaryEntry/DiaryEntryTitle";

export const FoodEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <NumberInput step={1} label="calories" source="calories" />
        <NumberInput step={1} label="carbohydrates" source="carbohydrates" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="diaryEntry.id"
          reference="DiaryEntry"
          label="DiaryEntry"
        >
          <SelectInput optionText={DiaryEntryTitle} />
        </ReferenceInput>
        <NumberInput step={1} label="fat" source="fat" />
        <TextInput label="name" source="name" />
        <NumberInput step={1} label="protein" source="protein" />
      </SimpleForm>
    </Edit>
  );
};
