import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native'
import { AppFormField, AppForm, SubmitButton } from '../components/forms'
import * as Yup from 'yup'

const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title').trim(),
  price: Yup.number().required().label('Price'),
  description: Yup.string().required().max(100).trim().label('Description')
})
function ListingEditScreen(props) {
  return (
    <Screen style={styles.container}>
      <AppForm
        initialValues={
          {
            title: '',
            price: '',
            description: ''
          }
        }
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        <AppFormField
          name='title'
          placeholder='Title'

          autoCapitalize='none'
          autoCorrect={false}

        >
        </AppFormField>
        <AppFormField
          name='price'
          placeholder='Price'

        >
        </AppFormField>
        <AppFormField
          name='description'
          placeholder='Description'

          autoCapitalize='none'
          autoCorrect={false}

        >
        </AppFormField>
        <SubmitButton title="Post"></SubmitButton>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { padding: Platform.OS === 'android' ? 10 : 20, }
})
export default ListingEditScreen;
