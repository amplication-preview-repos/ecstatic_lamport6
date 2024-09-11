import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  TextInput,
  ReferenceInput,
  SelectInput,
} from "react-admin";

import { DiaryEntryTitle } from "../diaryEntry/DiaryEntryTitle";

export const FoodCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
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
    </Create>
  );
};
