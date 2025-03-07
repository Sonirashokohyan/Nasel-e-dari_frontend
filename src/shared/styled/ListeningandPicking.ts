import styled from "styled-components";

const ListeningMainDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 2rem;
    background-color: #f4f7fc;
`;

const ListeningUpperDivStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2rem;
    text-align: center;
    color: #000;
`;

const ListeningContentStyle = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;
`;

const ListeningContentdivStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ListeningContentULStyle = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    & li {
        width: 12rem;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.2rem;
        font-weight: bold;
        color: #000;
        background-color: white;
        border: 2px solid #0b69dc;
        border-radius: 10px;
        box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.1);
        transition: all 0.3s ease;
        cursor: pointer;

        &:hover {
            background-color: #0b69dc;
            color: white;
            transform: scale(1.1);
        }
    }
`;

const ListeningLowerDivStyle = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    border-top: 2px solid gray;
    padding: 2rem 1rem;

    & button {
        background-color: #0b69dc;
        color: white;
        padding: 12px 24px;
        cursor: pointer;
        border: 2px solid #0b69dc;
        border-radius: 12px;
        font-size: 1rem;
        font-weight: bold;
        transition: 0.3s ease;

        &:hover {
            transform: scale(1.1);
            background-color: #094c9b;
        }
    }
`;

export { ListeningContentStyle, ListeningContentULStyle , ListeningContentdivStyle , ListeningLowerDivStyle , ListeningUpperDivStyle , ListeningMainDivStyle }