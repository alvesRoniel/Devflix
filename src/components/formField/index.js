import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Input = styled.input`

`;

function FormField({
  // eslint-disable-next-line react/prop-types
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTexarea = type === 'textarea';
  const tag = isTexarea ? 'textarea' : 'input';

  return (
    <div>
      <label
        htmlFor={fieldId}
      >
        {label}
        :
        <Input
          as={tag}
          id={fieldId}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => { },
};

FormField.prototypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
