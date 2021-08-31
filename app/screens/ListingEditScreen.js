import React from 'react';
import Screen from '../components/Screen';
import { StyleSheet } from 'react-native'
import { AppFormField, AppForm, SubmitButton, AppFormPicker } from '../components/forms'
import * as Yup from 'yup'
import CategoryPickerItem from '../components/CategoryPickerItem';
import FormImagePicker from '../components/forms/FormImagePicker';
import useLocation from '../hooks/useLocation';


const validationSchema = Yup.object().shape({
  title: Yup.string().required().label('Title').min(1).trim(),
  price: Yup.number().required().min(1).max(1000000).label('Price'),
  description: Yup.string().max(300).trim().label('Description'),
  category: Yup.object().required().nullable().label('Category'),
  images: Yup.array().min(1, 'Please select at least one image')
})
const categories = [
  {
    backgroundColor: "#fc5c65",
    icon: "floor-lamp",
    label: "Furniture",
    value: 1,
  },
  {
    backgroundColor: "#fd9644",
    icon: "car",
    label: "Cars",
    value: 2,
  },
  {
    backgroundColor: "#fed330",
    icon: "camera",
    label: "Cameras",
    value: 3,
  },
  {
    backgroundColor: "#26de81",
    icon: "cards",
    label: "Games",
    value: 4,
  },
  {
    backgroundColor: "#2bcbba",
    icon: "shoe-heel",
    label: "Clothing",
    value: 5,
  },
  {
    backgroundColor: "#45aaf2",
    icon: "basketball",
    label: "Sports",
    value: 6,
  },
  {
    backgroundColor: "#4b7bec",
    icon: "headphones",
    label: "Movies & Music",
    value: 7,
  },
  {
    backgroundColor: "#a55eea",
    icon: "book-open-variant",
    label: "Books",
    value: 8,
  },
  {
    backgroundColor: "#778ca3",
    icon: "application",
    label: "Other",
    value: 9,
  },
]
function ListingEditScreen({ width }) {

  const location = useLocation()

  return (
    <Screen style={styles.container}>

      <AppForm
        initialValues={
          {
            title: '',
            price: '',
            description: '',
            category: null,
            images: []
          }
        }
        onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name='images'></FormImagePicker>
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
