import React from "react";
import { Admin, Resource } from "react-admin";
import restProvider from "ra-data-simple-rest";
import Postlist from "../components/Postlist";
import Postcreate from "../components/Postcreate";
import PostEdit from "../components/PostEdit";

export default function Adminpage() {
  return (
    <Admin dataProvider={restProvider("http://localhost:7000")}>
      <Resource
        name="admin-page"
        list={Postlist}
        create={Postcreate}
        edit={PostEdit}
      ></Resource>
    </Admin>
  );
}
