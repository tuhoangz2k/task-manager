import styled from 'styled-components';
export const ColumnTitle = styled.div`
    display: flex;
    min-width: 100%;
`;
export const TitleItem = styled.p`
    min-width: 130px;
    padding: 5px 20px;
    border-left: 1px solid #ccc;
`;
export const ModalForm = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const FormWrap = styled.div`
    width: 80%;
`;
