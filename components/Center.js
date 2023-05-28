import styled from "styled-components";

const CenterStyle = styled.div`
    max-width: 100%;
    margin: 0;
    padding: 0 300px;
`;

export default function Center({children}) {
    return (
        <CenterStyle>{children}</CenterStyle>
    );
}