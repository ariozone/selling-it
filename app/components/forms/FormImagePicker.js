import React from 'react';
import { View, StyleSheet } from 'react-native';
import ImageInputList from '../ImageInputList';
import ErrorMessage from './ErrorMessage';
import { useFormikContext } from 'formik'

function FormImagePicker({ name }) {
  const { errors, touched, setFieldValue, values } = useFormikContext()
  const imageUris = values[name]
  const handleAdd = uri => { setFieldValue(name, [...imageUris, uri]) }
  const handleDelete = uri => { setFieldValue(name, imageUris.filter(u => u !== uri)) }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleDelete}
      ></ImageInputList>
      <ErrorMessage error={errors[name]} visible={touched[name]}></ErrorMessage>
    </>
  );
}



export default FormImagePicker;
