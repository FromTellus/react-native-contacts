import renderer from 'react-test-renderer';
import CustomerList from "./CustomerList";


describe('<CustomerList />', () => {
    it('has 1 child', () => {
        const tree = renderer.create(<CustomerList />).toJSON();
        expect(tree.children.length).toBe(1);
    });
    it('has 1 FlatList child', () => {
        const tree = renderer.create(<CustomerList />).toJSON();
        expect(tree.children[0].type).toBe('RCTScrollView');
    });
    it('has 1 Text child', () => {
        const tree = renderer.create(<CustomerList />).toJSON();
        expect(tree.children[0].children[0].type).toBe('View');
    });
    it('renders correctly', () => {
        const tree = renderer.create(<CustomerList />).toJSON();
        expect(tree).toMatchSnapshot();
    });
});


