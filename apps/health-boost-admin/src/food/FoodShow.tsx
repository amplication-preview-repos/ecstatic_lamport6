import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { DIARYENTRY_TITLE_FIELD } from "../diaryEntry/DiaryEntryTitle";

export const FoodShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
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
      </SimpleShowLayout>
    </Show>
  );
};
