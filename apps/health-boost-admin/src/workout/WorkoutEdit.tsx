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

export const WorkoutEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
