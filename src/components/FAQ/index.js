import React from "react";
import { useState } from "react/cjs/react.development";
import { Container, Pane, Question, Answer, Header, Image } from "./styles/FAQ";

const add = window.location.origin + "/images/icons/close-slim.png"


export default function FAQ({ faq }) {

  let tempArr = []

  for(let i = 0; i < faq.length; i++){

    tempArr.push(false)
  }

  const [Open, setOpen] = useState(tempArr)

  function handleClick(index){
      let temp = [...Open]

      temp.splice(index, 1, !Open[index])

      setOpen(temp)
  }

  return (
    <FAQ.Container>
      <Header>Frequently Asked Questions</Header>
      {faq.map((item, i) => {

        return (
          <FAQ.Pane key={i}>
            <FAQ.Question data={item} opened={Open[i]} index={i} handleClick={handleClick}/>
          </FAQ.Pane>
        );
      })}
    </FAQ.Container>
  );
}

FAQ.Question = ({ children, data, opened, index, handleClick, ...restProps }) => (
  <div {...restProps}>
    <Question>{data.header}<button onClick={()=> handleClick(index)}><Image opened={opened} src={add} alt="X"/></button></Question>
    {opened ? <Answer opened={opened}>{data.body}</Answer> : <Answer />}
    {children}
  </div>
);

FAQ.Container = ({ children, ...restProps }) => (
  <Container {...restProps}>{children}</Container>
);

FAQ.Pane = ({ children}) => (
  <Pane>{children}</Pane>
);
