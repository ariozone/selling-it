import React from 'react';
import { useFormikContext } from 'formik';
import AppPicker from '../AppPicker';
import ErrorMessage from './ErrorMessage'

function AppFormPicker({ items, name, placeholder, width, PickerItemComponent, numberOfColumns }) {
  const { errors, touched, setFieldValue, values } = useFormikContext()
  return (<>
    <AppPicker
      items={items}
      onSelectItem={item => setFieldValue(name, item)}
      placeholder={placeholder}
      selectedItem={values[name]}
      numberOfColumns={numberOfColumns}
      width={width}
      PickerItemComponent={PickerItemComponent}
    />
    <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
  </>
  );
}


export default AppFormPicker;
