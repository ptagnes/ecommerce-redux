import React, { useState } from "react";
import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionCustom from "./AccordionCustom";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

function AccordionTopCustom({
  item,
  clName,
  topCategoryName,
  k,
}: {
  item: any;
  clName: string;
  topCategoryName: any;
  k: any;
}) {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);
  const toggleActiveKey = (key: any) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };
  const location = useLocation();
  let pathName = location.pathname.split("/").pop();
  const ke = k.toString();
  //TODO first toggle only redirects

  return (
    <Card className="catNav0">
      <Accordion.Toggle
        as={Card.Header}
        className={topCategoryName === pathName ? clName : ""}
        onClick={() => {
          toggleActiveKey(ke);
        }}
        eventKey={ke}
        variant="link"
      >
        <Link to={`/products/${topCategoryName}`}>{topCategoryName}</Link>
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={ke}>
        <Card.Body className="catNav1">
          {item.map((item: any, key: any) => {
            return (
              <AccordionCustom
                key={key}
                clName="testclass"
                item={item}
                topCategory={item.name}
                topRoute={topCategoryName}
              />
            );
          })}
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
}

export default AccordionTopCustom;
