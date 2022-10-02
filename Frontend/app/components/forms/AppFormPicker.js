import React from "react";
import { useFormikContext } from "formik";

import AppPicker from "../AppPicker";
import ErrorsMessage from "./ErrorsMessage";

function AppFormPicker({ items, name,numberOfColumns, placeholder,PickerItemComponent, width }) {
  const { errors, setFieldValue, touched, values } = useFormikContext();

  return (
    <>
      <AppPicker
        items={items}
        onSelectItem={(item) => setFieldValue(name, item)}
        placeholder={placeholder}
        numberOfColumns={numberOfColumns}
        PickerItemComponent = {PickerItemComponent}
        selectedItem={values[name]}
        width={width}
      />
      <ErrorsMessage error={errors[name]} visible={touched[name]} />
    </>
  );
}

export default AppFormPicker;
