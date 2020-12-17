export const sortItems = (sort: string, items: any) => {
  console.log("action in reducer sortItems");
  console.log(sort);

  switch (sort) {
    case "cheapestasc":
      return items.sort(
        (a: any, b: any) => parseFloat(a.price) - parseFloat(b.price)
      );
    case "cheapestdesc":
      return items.sort(
        (a: any, b: any) => parseFloat(b.price) - parseFloat(a.price)
      );
    default:
      return [];
  }
  // items.map((itm: any) =>
  //   console.log(itm.id)
  // );
};
