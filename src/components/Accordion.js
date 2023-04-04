import { useState } from "react";

const Accordion = (props) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  }

  return (
    <>
      <h4 className={`accordion-heading ${isActive ? "active" : ""}`} onClick={handleClick}>
        {props.heading}
        <span className={`accordion-toggle ${isActive ? "collapsed" : ""}`}></span>
      </h4>
      {isActive ? (
        <div className="accordion-content">{props.content}</div>
      ) : null}
    </>
  )
}

export default Accordion;