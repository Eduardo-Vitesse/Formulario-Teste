import styled from 'styled-components'

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100vh;
    background: #2D2D2D;


    @media(max-width: 500px) {
        section {
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        div {
            width: 100%;
            height: 100vh;
        }

        img {
            display: none;
        }

        input, button {
            width: 100%;
        }
    }
`;
