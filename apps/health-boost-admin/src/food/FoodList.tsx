import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { DIARYENTRY_TITLE_FIELD } from "../diaryEntry/DiaryEntryTitle";

export const FoodList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"Foods"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
