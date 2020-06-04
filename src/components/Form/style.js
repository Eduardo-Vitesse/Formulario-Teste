import styled from 'styled-components'

export const Wrapper = styled.section`
    width: 444px;
    height: 400px;
    background: #3A3A3A;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 0;
`;

export const FormFields = styled.form`
    width: auto;
    height: auto;
    background: #3A3A3A;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 48px;
`;

export const InputBotton = styled.input`
    width: 348px;
    height: 71px;
    font-weight: 800;
    font-size: 18px;
    padding-left: 15px;
    font-family: 'Montserrat', sans-serif;
    margin-top: 37px;
    border: 1px solid #868686;
    background: #3A3A3A;
    color: #FFFFFF;
`;

export const InputTop = styled(InputBotton)`
    margin-top: 0;
`;

export const Button = styled.button`
    width: 348px;
    height: 71px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
    font-size: 22px;
    color: #FFFFFF;
    background: #3A3A3A;
    border: 1px solid #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 37px;
    cursor: pointer;
    &:hover {
        background: #731A65;
  }
`;

export const IconTop = styled.span`
    margin: 0 auto;
`;

export const IconBotton = styled.img`
    margin-left: -12px;
`;