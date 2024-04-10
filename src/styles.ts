import styled, { createGlobalStyle } from 'styled-components'
import Colors from './theme/colors'

const EstiloGlobal = createGlobalStyle`

  :root {
    --cor-principal: ${Colors.corPrincipal};
    --cor-secundaria: ${Colors.corSecundaria};
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Lato, sans-serif;
    list-style: none;
  }

  body {
    padding-bottom: 120px;
  }
`
export default EstiloGlobal

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;

  @media (max-width: 1024px) {
    max-width: 80%;
  }
`
