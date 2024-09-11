import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceField,
  ReferenceManyField,
  Datagrid,
} from "react-admin";

import { DIARYENTRY_TITLE_FIELD } from "./DiaryEntryTitle";
import { USER_TITLE_FIELD } from "../user/UserTitle";

export const DiaryEntryShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="date" source="date" />
        <TextField label="description" source="description" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceField label="User" source="user.id" reference="User">
          <TextField source={USER_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceManyField
          reference="Food"
          target="diaryEntryId"
          label="Foods"
        >
          <Datagrid rowClick="show">
            <TextField label="calories" source="calories" />
            <TextField label="carbohydrates" source="carbohydrates" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="DiaryEntry"
              source="diaryentry.id"
              reference="DiaryEntry"
            >
              <TextField source={DIARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="fat" source="fat" />
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <TextField label="protein" source="protein" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="Workout"
          target="diaryEntryId"
          label="Workouts"
        >
          <Datagrid rowClick="show">
            <TextField label="caloriesBurned" source="caloriesBurned" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="description" source="description" />
            <ReferenceField
              label="DiaryEntry"
              source="diaryentry.id"
              reference="DiaryEntry"
            >
              <TextField source={DIARYENTRY_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="ID" source="id" />
            <TextField label="name" source="name" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
