/** @format */

import "./Title.scss";
const Title = ({ title, subTitle, styleColor }) => {
  return (
    <div className="section-title">
      <h1 className={styleColor ? "title-white" : "title-main" + " "}>
        {title}
        <span>{subTitle}</span>
      </h1>
    </div>
  );
};

export default Title;
