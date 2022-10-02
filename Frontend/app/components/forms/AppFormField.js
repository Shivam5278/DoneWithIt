import React from 'react';
import { useFormikContext } from 'formik';


import AppTextInput from '../AppTextInput';
import ErrorsMessage from './ErrorsMessage';

function AppFormField({name,width, ...otherProps}) {

    const {setFieldTouched, handleChange,errors,touched } = useFormikContext();

    return (
        <>
            <AppTextInput 
            
            onBlur={() => setFieldTouched(name)}
            onChangeText={handleChange(name)}
            width={width}
            {...otherProps}
        />
        <ErrorsMessage error={errors[name]} visible={touched[name]}/>
        </>
    );
}

export default AppFormField;