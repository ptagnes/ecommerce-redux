import React, { useState } from "react";

import { Accordion, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import AccordionCustom2 from "./AccordionCustom2";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function AccordionCustom({
  item,
  clName,
  topCategory,
  topRoute,
}: {
  item: any;
  clName: string;
  topCategory: any;
  topRoute: any;
}) {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);
  const toggleActiveKey = (key: any) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };
  //className={currentActiveKey === k ? clName : ""}
  // const topCat = item.productList.name;
  //defaultActiveKey="0"
  const rname = item.routeName;
  return (
    <Accordion>
      <Card>
        <Accordion.Toggle
          as={Card.Header}
          onClick={() => {
            toggleActiveKey("0");
          }}
          eventKey={"0"}
        >
          <Link to={`/productcategories/${topRoute}/${rname}`}>
            {topCategory}
          </Link>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={"0"}>
          <Card.Body className="catNav2">
            {/**Embedded accordion start */}
            {item.productList &&
              item.productList.map((item: any, key: any) => {
                return (
                  <>
                    <Link
                      style={{ padding: "1rem", display: "block" }}
                      to={`/productcategory/${topRoute}/${rname}/${item.routeName}`} //${topUrl}
                    >
                      {item.name}
                    </Link>
                    <AccordionCustom2
                      key={key}
                      topCategory={item.name}
                      clName={"something"}
                      item={item.items}
                      topUrl={item.routeName}
                      topRoute={topRoute}
                      middleRoute={rname}
                    />
                  </>
                );
              })}
            {/**Embedded accordion end */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordionCustom;
