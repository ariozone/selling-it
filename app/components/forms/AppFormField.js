import { useFormikContext } from 'formik';
import React from 'react';
import AppTextInput from '../AppTextInput';
import ErrorMessage from './ErrorMessage';

function AppFormField({ name, width, ...otherProps }) {
  const { errors, touched, handleChange, setFieldTouched } = useFormikContext()
  return (<>
    <AppTextInput
      onChangeText={handleChange(name)}
      onBlur={() => setFieldTouched(name)}
      width={width}
      {...otherProps}

    />
    <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
  </>
  );
}

export default AppFormField;
