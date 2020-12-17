import React, { useState } from "react";

import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

function AccordionCustom2({
  item,
  clName,
  topCategory,
  topUrl,
  topRoute,
  middleRoute,
}: {
  item: any;
  clName: string;
  topCategory: any;
  topUrl: any;
  topRoute: any;
  middleRoute: any;
}) {
  const [currentActiveKey, setCurrentActiveKey] = useState(null);
  const toggleActiveKey = (key: any) => {
    setCurrentActiveKey(currentActiveKey === key ? null : key);
  };

  //className={currentActiveKey === k ? clName : ""}

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
          <Link to={`/productcategory/${topRoute}/${middleRoute}/${topUrl}`}>
            {topCategory}
          </Link>
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={"0"}>
          <Card.Body className="catNav3">
            {item.name}
            {/**Embedded menu start */}
            {item &&
              item.map((item: any, key: any) => {
                return (
                  <div key={key} className="catNav-elem">
                    {item.subitems ? (
                      <Accordion>
                        <Card>
                          <Card.Header>
                            <Accordion.Toggle
                              as={Button}
                              variant="link"
                              eventKey="0"
                            >
                              {item.name}
                            </Accordion.Toggle>
                          </Card.Header>
                          {item.subitems.map((itm: any, i: any) => (
                            <Accordion.Collapse eventKey="0" key={i}>
                              <Card.Body className="catNav4">
                                <Link
                                  to={`/details/${topRoute}/${middleRoute}/${topUrl}/${itm.id}`}
                                >
                                  {itm.name}
                                </Link>
                              </Card.Body>
                            </Accordion.Collapse>
                          ))}
                        </Card>
                      </Accordion>
                    ) : (
                      <>
                        <Link
                          to={`/details/${topRoute}/${middleRoute}/${topUrl}/${item.id}`}
                        >
                          {item.name}
                        </Link>
                      </>
                    )}
                  </div>
                );
              })}
            {/**Embedded menu end */}
          </Card.Body>
        </Accordion.Collapse>
      </Card>
    </Accordion>
  );
}

export default AccordionCustom2;
