import React from "react";
import { Create, SimpleForm, TextInput, DateInput } from "react-admin";

function Postcreate(props) {
  return (
    <Create title="Create a post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Create>
  );
}

export default Postcreate;
