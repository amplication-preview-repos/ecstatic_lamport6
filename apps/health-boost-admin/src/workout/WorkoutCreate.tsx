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

export const WorkoutCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput step={1} label="caloriesBurned" source="caloriesBurned" />
        <TextInput label="description" multiline source="description" />
        <ReferenceInput
          source="diaryEntry.id"
          reference="DiaryEntry"
          label="DiaryEntry"
        >
          <SelectInput optionText={DiaryEntryTitle} />
        </ReferenceInput>
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Create>
  );
};
