import React from 'react'
import PropTypes from 'prop-types'
import s from 'styled-components'

import {
  BLUE,
  BORDER,
  BLACK,
  WHITE,
  SKY,
  SLATE,
  GRAY,
} from '../constants/colors'
import { minWidth, MD } from '../constants/widths'
import {
  SnowBackground,
  Container,
  Col,
  Row,
} from './index'
import { BtnInput } from './Btn'

const styles = `
  margin-bottom: 1rem !important;
  border-radius: 4px !important;
  border: 2px solid ${BORDER};
  background-color: ${WHITE};
  background-clip: padding-box;
  font-size: 1rem !important;
  padding: 0.75rem !important;
  display: block;
  width: 100%;
  line-height: 1.5;
  color: ${BLACK};
  transition: border-color 0.2s;
  box-sizing: border-box;

  &:active,
  &:focus {
    border-color: ${BLUE} !important;
  }

  &:focus {
    outline: 0;
    box-shadow: 0 0 0 0.2rem ${SKY};
  }

  ::placeholder {
    color: ${GRAY};
  }
`

const SelectTag = s.select`
  ${styles}
  line-height: 2;
`

export const Label = s.label`
  color: ${SLATE};
  margin-bottom: 0.5rem;
  display: block;

  ${({ small }) => small && 'font-size: 80%;'}
`

export const Select = ({
  options,
  label,
  name,
  smallLabel,
}) => (
  <>
    {label && <Label htmlFor={name} small={smallLabel}>{label}</Label>}
    <SelectTag id={name} name={name}>
      {options.map(({ value, text }) => (
        <option value={value} key={value}>
          {text}
        </option>
      ))}
    </SelectTag>
  </>
)

Select.defaultProps = {
  label: null,
  smallLabel: false,
}

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    value: PropTypes.any,
  })).isRequired,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  smallLabel: PropTypes.bool,
}

const InputTag = s.input`
  ${styles}
`

export const Input = ({ label, name, ...other }) => (
  <>
    {label && (<Label>{label}</Label>)}
    <InputTag name={name} id={name} {...other} />
  </>
)

Input.defaultProps = {
  label: null,
}

Input.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
}

export const Textarea = s.textarea`
  ${styles}
`

export const SubmitBtn = s(BtnInput)`
  ${({ disabled }) => disabled && `
    cursor: not-allowed;
    opacity: 0.625;
  `}
`

const StyledContainer = s(Container)`
  padding-top: 1rem !important;
  padding-bottom: 1rem !important;

  ${minWidth(MD)} {
    padding-top: 1.5rem !important;
    padding-bottom: 1.5rem !important;
  }
`

const Wrapper = s.div`
  border-radius: 16px;
  background: ${WHITE};
  padding: 1rem;

  ${minWidth(MD)} {
    padding: 1.5rem;
  }
`

export const FormWrapper = ({ children }) => (
  <SnowBackground>
    <StyledContainer>
      <Row>
        <Col lg={6} offsetLg={3} md={8} offsetMd={2}>
          <Wrapper>
            {children}
          </Wrapper>
        </Col>
      </Row>
    </StyledContainer>
  </SnowBackground>
)

FormWrapper.propTypes = {
  children: PropTypes.node.isRequired,
}
