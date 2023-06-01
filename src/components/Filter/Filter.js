import PropTypes from 'prop-types';
import { Input, Label, LabelWrap } from "./Filter.styled";

export const Filter = ({ value, onChange }) => {

  return (

    <LabelWrap>
      <Label> Find contacts by name
        <Input
          type='text'
          value={value}
          onChange={onChange}
        />
      </Label>
    </LabelWrap>
  )
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
}