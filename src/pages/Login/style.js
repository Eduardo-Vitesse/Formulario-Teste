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
    }

    @media(max-width: 500px) {
        div {
            width: 100%;
            height: 100vh;
        }
    }

    @media(max-width: 500px) {
        img {
            display: none;
        }
    }

    @media(max-width: 500px) {
        input, button {
            width: 100%;
        }
    }

`;
