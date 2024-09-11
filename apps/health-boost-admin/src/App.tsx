import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { FoodList } from "./food/FoodList";
import { FoodCreate } from "./food/FoodCreate";
import { FoodEdit } from "./food/FoodEdit";
import { FoodShow } from "./food/FoodShow";
import { WorkoutList } from "./workout/WorkoutList";
import { WorkoutCreate } from "./workout/WorkoutCreate";
import { WorkoutEdit } from "./workout/WorkoutEdit";
import { WorkoutShow } from "./workout/WorkoutShow";
import { DiaryEntryList } from "./diaryEntry/DiaryEntryList";
import { DiaryEntryCreate } from "./diaryEntry/DiaryEntryCreate";
import { DiaryEntryEdit } from "./diaryEntry/DiaryEntryEdit";
import { DiaryEntryShow } from "./diaryEntry/DiaryEntryShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"HealthBoost"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Food"
          list={FoodList}
          edit={FoodEdit}
          create={FoodCreate}
          show={FoodShow}
        />
        <Resource
          name="Workout"
          list={WorkoutList}
          edit={WorkoutEdit}
          create={WorkoutCreate}
          show={WorkoutShow}
        />
        <Resource
          name="DiaryEntry"
          list={DiaryEntryList}
          edit={DiaryEntryEdit}
          create={DiaryEntryCreate}
          show={DiaryEntryShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
