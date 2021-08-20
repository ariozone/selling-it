import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native'
import { AppFormField, AppForm, SubmitButton, AppFormPicker } from '../components/forms'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title').min(1).trim(),
  price: Yup.number().required().min(1).max(1000000).label('Price'),
  description: Yup.string().max(300).trim().label('Description'),
  category: Yup.object().required().nullable().label('Category')
})
const categories = [
  { label: 'Furniture', backgroundColor: 'red', icon: 'umbrella', value: 1 },
  { label: 'Cameraaaaaaaaaa', backgroundColor: 'green', icon: 'camera', value: 3 },
  { label: 'Clothing', backgroundColor: 'blue', icon: 'glasses', value: 2 },
  { label: 'Cars', backgroundColor: 'orange', icon: 'car', value: 4 }
]
function ListingEditScreen({ width }) {
  return (
    <Screen style={styles.container}>

      <AppForm
        initialValues={
          {
            title: '',
            price: '',
            description: '',
            category: null
          }
        }
        validationSchema={validationSchema}
        onSubmit={values => console.log(values)}>
        <AppFormField
          name='title'
          placeholder='Title'
          maxLength={255}

        >
        </AppFormField>
        <AppFormField
          name='price'
          placeholder='Price'
          keyboardType='numeric'
          maxLength={10}
          width={150}
        >
        </AppFormField>
        <AppFormPicker
          name='category'
          placeholder='Category'
          items={categories}
          width='50%'
          PickerItemComponent={CategoryPickerItem}
          numberOfColumns={3}
        ></AppFormPicker>
        <AppFormField
          name='description'
          placeholder='Description'
          maxLength={300}
          multiline
          numberOfLines={3}

        >
        </AppFormField>
        <SubmitButton title="Post"></SubmitButton>
      </AppForm>
    </Screen>
  );
}
const styles = StyleSheet.create({
  container: { padding: Platform.OS === 'android' ? 10 : 20 }
})
export default ListingEditScreen;
