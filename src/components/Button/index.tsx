import styled from 'styled-components';

interface Props{
  outlined?: boolean;
}

export default styled.button<Props>`
  background: ${props => (props.outlined ? 'trasnsparent' : 'var(--twitter)')};
  color: ${props => (props.outlined ? 'var(--twitter)' : 'var(--white)')};
  border: ${props => (props.outlined ? '1px solid var(--twitter)' : 'none')};
  padding: 16px;
  border-radius: 25px;
  font-weight: bold;
  font-size: 15px;
  cursor: pointer;
  outline: 0;
  transition: background 0.2s ease-in-out;

  &:hover{
    background: ${props => (props.outlined ? 'var(--button-hover)' : 'var(--twitter-light-hover)')};
  }
`