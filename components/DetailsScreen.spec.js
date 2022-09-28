import renderer from "react-test-renderer";
import DetailsScreen from "./DetailsScreen";
import CustomerList from "./CustomerList";

// check that detail screen is getting image and data from CustomerList

describe("<DetailsScreen />", () => {
  const route = {
    route: {
      params: {
        name: {
          first: "John",
          last: "Doe",
          title: "Mr",
        },
        address: "123 Main St",
        city: "Anytown",
        picture: {
          large: "https://randomuser.me/api/portraits/men/34.jpg",
          medium: "https://randomuser.me/api/portraits/med/men/34.jpg",
          thumbnail: "https://randomuser.me/api/portraits/thumb/men/34.jpg",
        },
        location: {
          country: "sweden",
          city: "Stockholm"
        },
      },
    },
  };

  it("renders correctly", () => {
    const tree = renderer.create(<DetailsScreen {...route} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
