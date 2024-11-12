/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import feature1 from '../../assets/images/feature-1.png';

const containerStyle = css`
  display: flex;
  flex-direction: column;
  margin-top: 200px;
  margin-bottom: 200px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  background-color: #f5f5f5;
  padding: 6rem 0;

  img {
    width: 60%;
  }

  @media (max-width: 768px) {
    padding: 4rem 0;
    h1 {
      font-size: 24px;
    }
    p {
      font-size: 16px;
    }
    img {
      width: 70%;
    }
  }
`;

const titleStyle = css`
  overflow: hidden;
  color: var(--Labels-Primary, #000);
  font-family: 'Pretendard';
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: 56px;
  letter-spacing: 0.31px;
`;

const paragraphStyle = css`
  color: var(--Labels-Secondary, rgba(60, 60, 67, 0.6));
  font-family: 'Pretendard';
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.41px;
`;

const Feature = () => {
  return (
    <div css={containerStyle}>
      <h1 css={titleStyle}>파이는 이런 일을 할 수 있어요.</h1>
      <p css={paragraphStyle}>
        협업툴에서 발생한 그날의 변경사항을 요약해서 전달해요.
      </p>
      <img src={feature1} alt="" />
    </div>
  );
};

export default Feature;