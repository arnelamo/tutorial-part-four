import styled from '@emotion/styled';

export const VideoContainer = styled.div`
  position:relative;
  padding-bottom:56.25%;
  padding-top:30px;
  height:0;
  overflow:hidden;

  iframe, object, embed {
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
  }
`