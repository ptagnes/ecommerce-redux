import React, { useState } from "react";

import { Accordion, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { ArrowDown } from "react-bootstrap-icons";

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
  console.log("item");
  console.log(item);
  return (
    <>
      {item &&
        item.map((item: any, key: any) => {
          return (
            <div key={key}>
              {item.subitems && (
                <Accordion>
                  <Card>
                    <Accordion.Toggle
                      as={Card.Header}
                      onClick={() => {
                        toggleActiveKey("0");
                      }}
                      eventKey={"0"}
                    >
                      <Link
                        to={`/productcategory/${topRoute}/${middleRoute}/${topUrl}`}
                      >
                        <ArrowDown /> {topCategory}: categories
                      </Link>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey={"0"}>
                      <Card.Body className="catNav3">
                        <div key={key} className="catNav-elem">
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
                            </Card>
                          </Accordion>
                        </div>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              )}
            </div>
          );
        })}
    </>
  );
}

export default AccordionCustom2;
