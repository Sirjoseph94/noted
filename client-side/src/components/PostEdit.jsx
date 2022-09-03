import React from "react";
import { Edit, SimpleForm, TextInput, DateInput } from "react-admin";

function PostEdit(props) {
  return (
    <Edit title="Edit a post" {...props}>
      <SimpleForm>
        <TextInput source="title" />
        <TextInput disabled source="id" />
        <TextInput multiline source="body" />
        <DateInput label="Published" source="publishedAt" />
      </SimpleForm>
    </Edit>
  );
}

export default PostEdit;
